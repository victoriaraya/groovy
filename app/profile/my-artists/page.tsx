import Link from "next/link";
import Image from "next/image";
import { getUserArtists } from "@/utils/auth";
import RemoveFromMyArtists from "@/components/RemoveFromMyArtists";
import { FaPlus } from "react-icons/fa6";

const MyArtists = async () => {
  const artists = await getUserArtists();

  return (
    <div
      className={
        artists.length <= 3
          ? "min-h-screen sm:h-screen w-full"
          : "h-full w-full"
      }
    >
      {artists.length ? (
        <h1 className="text-white text-lg pb-6 bg-zinc-700">
          Click on an artist to go to their page
        </h1>
      ) : (
        <h1 className="sm:flex justify-start align-top text-white text-lg bg-zinc-700 mt-28 sm:mt-0">
          Keep track of your favorite artists here! You can add artists from
          their page, look for the{" "}
          <span className="sm:pt-0.5 px-1.5 animate-pulse">
            <FaPlus />
          </span>{" "}
          in the top right corner.
        </h1>
      )}
      <div className="grid gird-cols-1 sm:grid-cols-3 gap-9 sm:gap-1 mx-10 mt-16 sm:mt-0">
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
              <div className="flex justify-between text-white text-xl pt-2 sm:pt-1 h-10 w-full">
                <p>{artist.name}</p>
              </div>
            </Link>
            <RemoveFromMyArtists artist={artist} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyArtists;
