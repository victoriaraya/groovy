import ProfileSidebar from "@/components/ProfileSidebar";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { UserButton } from "@clerk/nextjs";
import { CgProfile } from "react-icons/cg";

const links = [
  {
    name: "My artists",
    path: "/profile/my-artists",
  },
  {
    name: "My shows",
    path: "/profile/my-shows",
  },
];

export default function ProfileLayout({ children }) {
  return (
    <div className="w-full h-full relative bg-zinc-700">
      <header className="-mt-11 ml-4 text-4xl text-white absolute">
        <Link href="/">
          <AiOutlineHome />
        </Link>
      </header>
      <header className="absolute top-0 right-0 -mt-11 mr-4">
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "h-9 w-9 border-2 border-white",
            },
          }}
        />
      </header>
      <aside className="absolute left-0 top-0 h-full w-64 bg-zinc-500">
        <div className="flex flex-col space-y-8 w-full text-center items-center">
          <ul className="px-4">
            {links.map((link) => (
              <li key={link.name} className="my-6 text-2xl hover:text-white">
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <div className="ml-64 h-full w-[calc(100vw-200px)]">
        <header className="h-2 w-screen bg-gray-100"></header>
        <div className="h-full p-4">{children}</div>
      </div>
    </div>
  );
}
