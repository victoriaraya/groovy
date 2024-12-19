import Image from "next/image";
import { getUserShows } from "@/utils/auth";
import { getArtistInfo } from "@/utils/actions";
import RemoveFromMyShows from "@/components/RemoveFromMyShows";

const MyShows = async () => {
  const shows = await getUserShows();
  const parsedShows = shows.map((show) => {
    const [name, artistId, url] = show.split("~");
    return { name, artistId: parseInt(artistId), url };
  });

  let artistNames = [];
  for (let show of parsedShows) {
    const artist = await getArtistInfo(show.artistId);
    artistNames.push(artist.name);
  }

  return (
    <div
      className={
        shows.length <= 3 ? "min-h-screen sm:h-screen w-full" : "h-full w-full"
      }
    >
      {shows.length ? (
        <h1 className="text-white text-lg pb-6 mt-24 sm:mt-0 text-center sm:text-left">
          Click on an artist to get more information about their show
        </h1>
      ) : (
        <h1 className="text-white text-xl sm:text-lg mt-28 sm:mt-0 text-center sm:text-left">
          Keep track of your favorite shows here! Search for shows on an artist
          page to add.
        </h1>
      )}
      <div className="grid gird-cols-1 sm:grid-cols-3 gap-1 gap-y-9 sm:gap-y-5 mx-10 pb-2 mt-5 sm:mt-0">
        {parsedShows.map((show, index) => (
          <div key={index} className="flex w-[300px] gap-4">
            <a href={show.url} target="_blank" rel="noopener noreferrer">
              <Image
                className="h-[375px] w-[300px] rounded-sm"
                src={`/images/${artistNames[index]
                  .replace(/\s+/g, "")
                  .toLowerCase()}2.jpg`}
                width={300}
                height={375}
                alt={show.name}
              />
              <div className="flex justify-between text-white text-lg pt-2 sm:pt-1 h-10 w-full">
                <p className="pb-2">{show.name}</p>
              </div>
            </a>
            <RemoveFromMyShows event={shows[index]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyShows;
