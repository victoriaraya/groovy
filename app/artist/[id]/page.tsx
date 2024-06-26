import { getArtistInfo } from "@/utils/actions";
import {
  wizkid1,
  wizkid2,
  wizkid3,
  dontoliver1,
  dontoliver2,
  dontoliver3,
  kaliuchis1,
  kaliuchis2,
  kaliuchis3,
  amrdiab1,
  amrdiab2,
  amrdiab3,
  rema1,
  rema2,
  rema3,
  cleosol1,
  cleosol2,
  cleosol3,
  kaytranada1,
  kaytranada2,
  kaytranada3,
  beenieman1,
  beenieman2,
  beenieman3,
} from "@/components/songs";
import Link from "next/link";
import Image from "next/image";
import FindShows from "@/components/FindShows";
import AddToMyArtists from "@/components/AddToMyArtists";
import Chat from "@/components/Chat";
import ImageCarousel from "@/components/Carousel";
import { currentUser } from "@clerk/nextjs";
import { getUserArtists } from "@/utils/auth";
import RemoveFromMyArtistsModal from "@/components/RemoveFromMyArtistsWithModal"; //

const songs = {
  wizkid: [wizkid1(), wizkid2(), wizkid3()],
  dontoliver: [dontoliver1(), dontoliver2(), dontoliver3()],
  kaliuchis: [kaliuchis1(), kaliuchis2(), kaliuchis3()],
  amrdiab: [amrdiab1(), amrdiab2(), amrdiab3()],
  rema: [rema1(), rema2(), rema3()],
  cleosol: [cleosol1(), cleosol2(), cleosol3()],
  kaytranada: [kaytranada1(), kaytranada2(), kaytranada3()],
  beenieman: [beenieman1(), beenieman2(), beenieman3()],
};

const ArtistPage = async ({ params }) => {
  const artist = await getArtistInfo(+params.id);
  const user = await currentUser();
  let hasArtist;
  if (user) {
    const userArtists = await getUserArtists();
    hasArtist = userArtists.some(
      (artistInfo) => artistInfo.name == artist.name
    );
  } else {
    hasArtist = false;
  }

  // reg ex to trim inner white space, 'Don Toliver' would be 'dontoliver'
  let artistName = artist.name.replace(/\s+/g, "").toLowerCase();

  const imagePaths = Array.from(Array(3).keys()).map(
    (index) => `/images/${artistName}${index + 1}.jpg`
  );

  return (
    <div className="bg-zinc-700 text-white grid grid-cols-[1fr_.80fr]">
      <div>
        {hasArtist ? (
          <span className="flex justify-end p-2">
            {await new Promise((resolve) => setTimeout(resolve, 2000))}
            <RemoveFromMyArtistsModal artist={artist} />
          </span>
        ) : (
          <span className="flex justify-end p-2">
            {await new Promise((resolve) => setTimeout(resolve, 2000))}
            <AddToMyArtists artist={artist} userId={user ? user.id : "none"} />
          </span>
        )}
        <p
          className={
            artist.name == "Kaytranada"
              ? "text-[110px] p-4 pl-7 self-end pb-8"
              : "text-9xl p-4 pl-7 self-end pb-8"
          }
        >
          {artist.name}
        </p>
      </div>
      <div className="row-span-2 pt-2">
        <ImageCarousel imagePaths={imagePaths} />
      </div>
      <div className="flex flex-col">
        <div className="flex">
          <div className="text-xl pl-4 basis-1/2">
            <p className="pl-2 pb-1">Our favorites</p>
            <div className="">{songs[artistName]}</div>
          </div>
          <div className="text-xl ml-8 pr-3 basis-1/2">
            <p className="pb-1">Bio</p>
            <p className="text-base text-left">{artist.bio}</p>
          </div>
        </div>
        <div className="flex pt-5">
          <div className="basis-1/2 pl-4">
            <FindShows artist={artist} userId={user ? user.id : "none"} />
          </div>
          <div className="basis-1/2 pl-4">
            <Chat artist={artist} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistPage;
