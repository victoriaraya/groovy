import SignOut from "@/utils/SignOut";
import { currentUser } from "@clerk/nextjs";
import Link from "next/link";

const Profile = async () => {
  const user = await currentUser();

  return (
    <div className="h-full">
      <h1 className="flex text-center text-8xl text-white pt-16">
        Hello, {`${user.username}`}!
      </h1>
    </div>
  );
};

export default Profile;
