"use client";

import { deleteUserShow } from "@/utils/api";
import revalidateRemoveShow from "@/utils/revalidateRemoveShow";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import { FaMinus } from "react-icons/fa6";

const RemoveFromMyShowsModal = ({ event }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleClick = async (event) => {
    await deleteUserShow(event);
    onOpen();
    await revalidateRemoveShow();
  };

  return (
    <div className="flex justify-end">
      <button
        className="rounded-sm px-2 h-8 -mr-3 -mb-3 -mt-5 pt-1.5 group"
        onClick={() => handleClick(event)}
      >
        <Modal
          isOpen={isOpen}
          isDismissable={false}
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
        <span className="text-xl group-hover:hidden">
          <FaMinus className="mt-1.5 -mr-1" />
        </span>
        <span className="hidden px-1 group-hover:z-40 relative rounded-sm mt-1 group-hover:visible group-hover:flex group-hover:bg-gray-300 group-hover:border-solid group-hover:border-slate-800 group-hover:border-2 group-hover:-mr-1.5 text-black group-active:bg-gray-400">
          Remove from my shows
        </span>
      </button>
    </div>
  );
};

export default RemoveFromMyShowsModal;
