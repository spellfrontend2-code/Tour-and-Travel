import  {Outlet, Navigate} from "react-router-dom";
import { useAuthStore } from "@/context/useAuthStore";
function ProtectedRoute({role,navigateRoute}) {
const {authData}=useAuthStore();
const validRole=role?.map((r)=>r.toLowerCase()===authData?.role?.toLowerCase());
const isAuthenticated=!!authData?.accessToken && validRole;
return isAuthenticated
    ? <Outlet />
    : <Navigate to={navigateRoute} replace />;

}

export default ProtectedRoute;