import SignOut from "@/utils/SignOut";
import ProfileSidebarItem from "./ProfileSidebarItem";

const items = [
  {
    name: "My artists",
    path: "/profile/my-artists",
  },
  {
    name: "My shows",
    path: "/profile/my-shows",
  },
  {
    name: "Sign out",
    path: "/",
  },
];

const ProfileSidebar = () => {
  return (
    // z-10 top-14 left-0
    <div className="absolute h-full top-0 left-0 w-64 bg-zinc-500">
      <div className="flex flex-col space-y-8 w-full text-center pt-10 items-center">
        {items.map((item, index) => (
          <ProfileSidebarItem key={index} item={item} />
        ))}
        <SignOut />
      </div>
    </div>
  );
};

export default ProfileSidebar;

/* 
import { useClerk } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";

const { signOut } = useClerk();
  const router = useRouter();

<button onClick={() => signOut(() => router.push("/"))}>
          Sign out
        </button> */
