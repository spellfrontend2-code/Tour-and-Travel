import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Eye, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { authHooks } from "@/features/auth/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/context/useAuthStore";
import { toast } from "sonner";
function AdminLogin() {
  const {setAuthData}=useAuthStore();
    const authHook=authHooks();
    const adminLogin=authHook.useAdminLogin();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

const navigate=useNavigate();
  const onSubmit = (data) => {
    adminLogin.mutate(data,{
        onSuccess:(res)=>{
              const authData = {
          user: res.user,
          // permissions: res.permissions,
          accessToken: res.token.access_token,
          refreshToken: res.token.refresh_token,
          role: res?.roles[0],
          expiresAt: res.token.expires_in,
        };
        setAuthData(authData);
        toast.success(res.message,{duration:1000});
        navigate("/admin");
        }
    });
  };
  const [showPassword, setShowPassword] = useState(false);
  return (
      <div className="flex w-full h-screen justify-center items-center ">
      <div className="w-1/2 h-1/2 p-15 flex flex-col gap-5 items-center border-2 border-[rgb(var(--primary-rgb)/0.3)] rounded-2xl">
        <p className="text-3xl font-bold ">Admin Login</p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full h-full flex flex-col justify-around items-center"
        >
          <div className="flex flex-col gap-1">
            <label className="font-bold">Email</label>

            <input
              id="email"
              type="email"
              className={` border-2 border-[rgb(var(--primary-rgb)/0.3)] rounded-xl px-2 py-1 focus:outline-none focus:border-[var(--primary-color)] hover:border-[var(--primary-color)]`}
              placeholder="email"
              required
              {...register("email")}
            />
            <label className="font-bold">Password</label>

            <div className="flex border-2 border-[rgb(var(--primary-rgb)/0.3)] rounded-xl px-2 py-1 hover:border-[var(--primary-color)]">
              <input
                type={showPassword ? "text" : "password"}
                className="flex-1 px-2 py-1 focus:outline-none  [&::-ms-reveal]:hidden
    [&::-ms-clear]:hidden"
                placeholder="password"
                required
                {...register("password")}
              />
              <button
                type="button"
                className="flex items-center justify-center cursor-pointer"
                onClick={() => setShowPassword((v) => !v)}
              >
              {showPassword ? <Eye size={18} strokeWidth={1}/> : <EyeOffIcon size={18} strokeWidth={1}/>}
              </button>
            </div>
          </div>
          <Button
            type="submit"
            disabled={adminLogin.isPending}
            variant="greenSolidViewButton"
            className="w-[40%]"
          >
           {adminLogin.isPending?"Logging In...":"Log In"}
          </Button>
        </form>
      </div>
   
    </div>
  );
}

export default AdminLogin;
