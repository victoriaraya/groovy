"use client";

import { deleteUserArtist } from "@/utils/api";
import revalidateRemove from "@/utils/revalidateRemoveArtist";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import { FaMinus } from "react-icons/fa6";

const RemoveFromMyArtistsModal = ({ artist }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleClick = async (artist) => {
    await deleteUserArtist(artist);
    onOpen();
    await revalidateRemove();
  };

  return (
    <button className="group" onClick={() => handleClick(artist)}>
      <Modal
        isOpen={isOpen}
        isDismissable={false}
        placement="top"
        onOpenChange={onOpenChange}
      >
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
      <span className="text-3xl group-hover:hidden">
        <FaMinus className="my-[0.3rem] -mr-1" />
      </span>
      <p className="hidden px-1 group-hover:z-40 rounded-sm my-1 group-hover:visible group-hover:flex group-hover:bg-white group-hover:border-solid group-hover:border-white group-hover:border-2 group-hover:-mr-1 text-black text-xl group-active:bg-gray-400 group-active:border-gray-400">
        Remove from my artists
      </p>
    </button>
  );
};

export default RemoveFromMyArtistsModal;
