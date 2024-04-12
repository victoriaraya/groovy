"use client";

import prisma from "@/utils/db";
import Link from "next/link";
import { useState, useEffect } from "react";

import { getUserArtists } from "@/utils/auth";
// import { useArtistContext } from "@/contexts/ArtistContext";

const DisplayUserArtists = () => {
  //   const [userArtists, setUserArtists] = useState([]);
  //   const { artists } = useArtistContext();
  console.log(artists);
  //   const fetchArtists = () => {
  // const { artists } = await prisma.user.findUnique({
  //   where: { id: userId },
  //   include: { artists: true },
  // });
  //     setUserArtists(artists);
  //   };

  //   useEffect(() => {
  //     setUserArtists(artists);
  //   }, [artists]);

  return (
    <div className="flex flex-col items-center gap-3">
      {artists.map((artist, index) => (
        <div key={index} className="flex gap-4">
          <Link href={`/artist/${artist.id}`}>
            <div className="flex bg-white h-10 w-24">
              <p>{artist.name}</p>
            </div>
          </Link>
          <button className="flex justify-end text-white text-2xl">-</button>
        </div>
      ))}
    </div>
  );
};

export default DisplayUserArtists;
