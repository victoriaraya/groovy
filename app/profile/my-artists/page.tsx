import Link from "next/link";
import Image from "next/image";
// import DisplayUserArtists from "@/components/DisplayUserArtists";
import { getUserArtists } from "@/utils/auth";
// import RemoveFromMyArtists from "@/components/RemoveFromMyArtists";
import { FaMinus } from "react-icons/fa6";

const MyArtists = async () => {
  const artists = await getUserArtists();

  return (
    <div className="h-full w-full">
      {artists.length ? (
        <h1 className="flex justify-start align-top text-white pb-6">
          click to go to artist page
        </h1>
      ) : (
        <h1 className="flex justify-start align-top text-white">
          Add your favorite artists from their page
        </h1>
      )}
      <div className="grid grid-cols-3 gap-1 mx-10">
        {artists.map((artist, index) => (
          <div key={index} className="flex w-[300px] gap-4">
            <Link href={`/artist/${artist.id}`}>
              <Image
                className="h-[375px] w-[300px] rounded-sm"
                src={`/images/${artist.name
                  .replace(/\s+/g, "")
                  .toLowerCase()}3.jpg`}
                width={300}
                height={375}
                alt={artist.name}
              />
              <div className="flex justify-between text-white text-xl pt-1 h-10 w-full">
                <p>{artist.name}</p>
              </div>
            </Link>
            <button className="group flex self-end mb-10 -ml-10 w-6 ">
              <span className="text-2xl mt-1 -ml-1 text-white group-hover:hidden">
                <FaMinus />
              </span>
              <p className="hidden px-1 -ml-24 mr-1 pt-[3px] w-96 h-10 group-hover:z-40 rounded-sm my-1 group-hover:visible group-hover:flex group-hover:bg-white group-hover:border-solid group-hover:border-white group-hover:border-2 text-black text-base/[16px] text-center group-active:bg-gray-400 group-active:border-gray-400">
                Remove from my artists
              </p>
            </button>
            {/* <RemoveFromMyArtists artist={artist} userId={user.id} />
            <button className="flex justify-end text-white text-2xl">-</button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyArtists;
