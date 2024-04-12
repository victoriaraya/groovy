import ProfileSidebar from "@/components/ProfileSidebar";

export default function ProfileLayout({ children }) {
  return (
    <div className="flex h-full w-full bg-zinc-700">
      <header className="absolute h-2 w-screen bg-gray-100"></header>
      <div className="relative">
        <ProfileSidebar />
      </div>
      <div className="flex w-full h-full pt-5 ml-64 p-4">{children}</div>
    </div>
  );
}
