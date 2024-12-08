import SignOut from "@/utils/SignOut";
import { currentUser } from "@clerk/nextjs";
import Link from "next/link";

const Profile = async () => {
  const user = await currentUser();

  return (
    <div className="h-screen sm:w-full">
      <h1 className="sm:flex text-6xl sm:text-[100px] text-white sm:p-4 mt-32 sm:mt-6 sm:text-left text-center">
        Hello, {`${user.username}`}!
      </h1>
    </div>
  );
};

export default Profile;
