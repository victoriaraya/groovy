import Image from "next/image";
import { getUserShows } from "@/utils/auth";
import { getArtistInfo } from "@/utils/actions";

const MyShows = async () => {
  const shows = await getUserShows();
  const parsedShows = shows.map((show) => {
    const [name, artistId, url, imageUrl] = show.split("~");
    return { name, artistId: parseInt(artistId), url, imageUrl };
  });
  // take out imageurl, figure out how to get artistname from artistId
  // so I can use the artist image

  // const artists = parsedShows.map(async (show) => {
  //   const artist = await getArtistInfo(show.artistId);
  //   return artist.name;
  // });

  // async function parseShows(shows) {
  //   const parsedShows = await Promise.all(
  //     shows.map(async (show) => {
  //       const [name, artistId, url] = show.split("~");
  //       const artist = await getArtistName(+artistId);
  //       return { name, artistName: artist.name, url };
  //     })
  //   );
  //   return parsedShows;
  // }
  // let parsedShows;
  // parseShows(shows).then((result) => {
  //   parsedShows = result;
  // });
  // console.log(parsedShows);

  return (
    <div className="h-full w-full">
      {shows.length ? (
        <h1 className="flex justify-start align-top text-white text-lg pb-6">
          Click on an artist to get more information about their show
        </h1>
      ) : (
        <h1 className="flex justify-start align-top text-white text-lg">
          Keep track of your favorite shows here! Search for shows on an artist
          page to add.
        </h1>
      )}
      <div className="grid grid-cols-3 gap-1 mx-10">
        {parsedShows.map((show, index) => (
          <div key={index} className="flex w-[300px] gap-4">
            <a href={show.url}>
              {/* <Image
                className="h-[375px] w-[300px] rounded-sm"
                src={show.imageUrl}
                // src={`/images/${show.artistName
                //   .replace(/\s+/g, "")
                //   .toLowerCase()}2.jpg`}
                width={300}
                height={375}
                alt={show.name}
              /> */}
              <div className="flex justify-between text-white text-xl pt-1 h-10 w-full">
                <p>{show.name}</p>
              </div>
            </a>
            {/* <RemoveFromMyShows event={event} /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyShows;
