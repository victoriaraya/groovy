import Link from "next/link";

const ProfileSidebarItem = ({ item }) => {
  const { path, name } = item;

  return (
    <div className="flex items-center space-x-2 text-xl hover:text-white">
      <Link href={path}>{name}</Link>
    </div>
  );
};

export default ProfileSidebarItem;
