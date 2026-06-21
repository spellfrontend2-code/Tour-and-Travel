import ProfileForm from "@/components/ProfileForm";

function Profile(){
  return (
    <div className="p-3 sm:p-3 md:p-10 w-full flex flex-col items-center h-full justify-center gap-4">
      <h1 className="tracking-wider uppercase text-4xl font-bold text-[var(--primary-color)]">Profile</h1>
      <div className="border-2 border-gray-200 rounded-2xl p-3 w-full max-w-2xl">
        <ProfileForm />
      </div>
    </div>
  );
}
export default Profile;
