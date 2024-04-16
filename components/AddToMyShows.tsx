"use client";

import { addUserShow } from "@/utils/api";
import revalidateShow from "@/utils/revalidateAddShow";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";

const AddToMyShows = ({ event, userId }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleClick = async (event) => {
    await addUserShow(event);
    onOpen();
    await revalidateShow();
  };

  return (
    <button
      className="group"
      onClick={userId === "none" ? onOpen : () => handleClick(event)}
    >
      {userId === "none" ? (
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
                  Added! Click
                  <Link href="/profile/my-shows" className="underline">
                    here
                  </Link>
                  to see your shows.
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
      <span className="text-3xl group-hover:hidden">
        <FaPlus className="my-[0.3rem] -mr-1" />
      </span>
      <span className="hidden px-1 group-hover:z-40 rounded-sm my-1 group-hover:visible group-hover:flex group-hover:bg-white group-hover:border-solid group-hover:border-white group-hover:border-2 group-hover:-mr-1 text-black text-xl group-active:bg-gray-400 group-active:border-gray-400">
        Add to my shows
      </span>
    </button>
  );
};

export default AddToMyShows;
