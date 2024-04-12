"use client";

import { addUserArtist } from "@/utils/api";
import revalidate from "@/utils/revalidate";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import Link from "next/link";

const AddToMyArtists = ({ artist, userId }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleClick = async (artist) => {
    await addUserArtist(artist);
    onOpen();
    await revalidate();
  };

  return (
    <button
      className="group"
      onClick={userId === "none" ? onOpen : () => handleClick(artist)}
    >
      {userId === "none" ? (
        <Modal isOpen={isOpen} placement="top" onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalBody className="text-center justify-center text-xl py-5 flex-row gap-1.5">
                  Please sign in first! Click
                  <Link href="/sign-in" className="underline">
                    here
                  </Link>
                  to sign in.
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      ) : (
        <Modal isOpen={isOpen} placement="top" onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalBody className="text-center justify-center text-xl py-5 flex-row gap-1.5">
                  Added! Click
                  <Link href="/profile/my-artists" className="underline">
                    here
                  </Link>
                  to see your artists.
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
      <span className="text-4xl group-hover:hidden">+</span>
      <span className="hidden px-1 group-hover:z-40 rounded-sm my-1 group-hover:visible group-hover:flex group-hover:bg-white group-hover:border-solid group-hover:border-white group-hover:border-2 group-hover:-mr-1 text-black text-xl group-active:bg-gray-400 group-active:border-gray-400">
        Add to my Artists
      </span>
    </button>
  );
};

export default AddToMyArtists;
