import SignOut from "@/utils/SignOut";
import { currentUser } from "@clerk/nextjs";
import Link from "next/link";

const Profile = async () => {
  const user = await currentUser();

  return (
    <div className="h-screen overflow-hidden">
      <h1 className="flex text-[100px] text-white p-4">
        Hello, {`${user.username}`}!
      </h1>
    </div>
  );
};

export default Profile;
