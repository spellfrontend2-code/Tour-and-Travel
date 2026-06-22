import ProfileForm from "@/components/ProfileForm";

function Profile(){
  return (
    <div className="p-3 sm:p-3 md:p-10 w-full flex flex-col h-full justify-center gap-4">
      <div className="">
          <p className="text-3xl font-bold tracking-wide">My Profile</p>
          <p>
            Manage your personal information. 
          </p>
        </div>
      <div className="rounded-2xl p-3 w-full flex justify-center">
        <ProfileForm />
      </div>
    </div>
  );
}
export default Profile;
