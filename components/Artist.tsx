import { getArtistInfo } from "@/utils/actions";
import Image from "next/image";

async function Artist(props) {
  const artist = await getArtistInfo(props.id);

  // reg ex to trim inner white space, 'Don Toliver' would be 'dontoliver'
  let artistNameForImgTag = artist.name.replace(/\s+/g, "").toLowerCase();

  return (
    <div className="relative h-52">
      <Image
        className="h-full w-full"
        src={`/images/${artistNameForImgTag}1.jpg`}
        width={400}
        height={400}
        alt={artist.name}
      />
      <div className="absolute bottom-0 right-0 text-xl">{artist.name}</div>
    </div>
  );
}

export default Artist;
