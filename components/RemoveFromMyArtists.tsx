"use client";
import { deleteUserArtist } from "@/utils/api";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import Link from "next/link";

const RemoveFromMyArtists = ({ artist, userId }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleClick = async (artist) => {
    await deleteUserArtist(artist);
    onOpen();
  };

  return (
    <button className="group" onClick={() => handleClick(artist)}>
      <Modal isOpen={isOpen} placement="top" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="text-center justify-center text-xl py-5 flex-row gap-1.5">
                Removed!
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      <span className="text-4xl group-hover:hidden">x</span>
      <span className="hidden px-1 group-hover:z-40 rounded-sm my-1 group-hover:visible group-hover:flex group-hover:bg-white group-hover:border-solid group-hover:border-white group-hover:border-2 group-hover:-mr-1 text-black text-xl group-active:bg-gray-400 group-active:border-gray-400">
        Remove from my artists
      </span>
    </button>
  );
};

export default RemoveFromMyArtists;
