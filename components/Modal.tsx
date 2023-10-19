"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  const handleSubmit = async() => {
    // handle logic that tracks product
  }

  return (
    <>
      <button type="button" className="btn" onClick={openModal}>
        Track
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          onClose={closeModal}
          className="dialog-container flex items-center justify-center"
        >
          <Dialog.Panel className="dialog-content">
            <div>close btn</div>
            <Dialog.Title className="dialog-head_text">
              Stay updated with the best market prices straight to your inbox!
            </Dialog.Title>
            <Dialog.Description className="my-4">
              Never miss the best prices again.
            </Dialog.Description>

            <Input
              className="text-neutral-900"
              type="email"
              placeholder="your-email@gmail.com"
            />

            <Button 
              onClick={handleSubmit}
              className="w-full my-4">
                Track product
            </Button>
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
