import Image from "next/image";
import Link from "next/link";
import { FaPlus, FaMinus } from "react-icons/fa";
import { artists } from "@/prisma/artists";

function Artist({
  id,
  onHover,
  onLeave,
  hoveredElement,
  customStyle1,
  customStyle2,
}) {
  // reg ex to trim inner white space, 'Don Toliver' would be 'dontoliver'
  let artistNameForImgTag = artists[id - 1].name
    .replace(/\s+/g, "")
    .toLowerCase();

  return (
    <div
      className={customStyle1}
      onMouseEnter={() => onHover(artistNameForImgTag)}
      onMouseLeave={onLeave}
    >
      <Link href={`/artist/${id}`}>
        <Image
          className="h-full w-full transition ease-in-out sm:hover:-translate-y-1 sm:hover:scale-110 duration-300 rounded-sm"
          src={`/images/${artistNameForImgTag}.jpg`}
          width={400}
          height={400}
          alt={artists[id - 1].name}
        />
        <div className={customStyle2}>
          <span className="hidden sm:block sm:animate-pulse sm:text-2xl sm:pt-1">
            {hoveredElement === artistNameForImgTag ? <FaPlus /> : <FaMinus />}
          </span>
          {artists[id - 1].name}
        </div>
      </Link>
    </div>
  );
}

export default Artist;
