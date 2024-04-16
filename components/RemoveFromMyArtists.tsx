"use client";

import { deleteUserArtist } from "@/utils/api";
import revalidateRemove from "@/utils/revalidateRemoveArtist";
import Link from "next/link";
import { FaMinus } from "react-icons/fa6";

const RemoveFromMyArtists = ({ artist }) => {
  const handleClick = async (artist) => {
    await deleteUserArtist(artist);
    await revalidateRemove();
  };

  return (
    <button
      className="group flex self-end mb-10 -ml-10 w-6"
      onClick={() => handleClick(artist)}
    >
      <span className="text-2xl mt-1 -ml-1 text-white animate-pulse group-hover:hidden">
        <FaMinus />
      </span>
      <p className="hidden px-1 -ml-24 mr-1 pt-[3px] w-96 h-10 group-hover:z-40 rounded-sm my-1 group-hover:visible group-hover:flex group-hover:bg-white group-hover:border-solid group-hover:border-white group-hover:border-2 text-black text-base/[16px] text-center group-active:bg-gray-400 group-active:border-gray-400">
        Remove from my artists
      </p>
    </button>
  );
};

export default RemoveFromMyArtists;
