"use client";

import { FormEvent, Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { addUserEmailToProduct } from "@/lib/actions";

interface Props {
  productId: string;
}

const Modal = ({ productId } : Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    // handle logic that tracks product
    e.preventDefault();

    setIsSubmitting(true);

    await addUserEmailToProduct(productId, email);

    setIsSubmitting(false);

    setEmail('');

    closeModal();
  };

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

            <form action="" onSubmit={handleSubmit}>
              <Input
                required
                id="email"
                value={email}
                className="text-neutral-900"
                type="email"
                placeholder="your-email@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />

              <Button type="submit" className="w-full my-4">
                {isSubmitting ? "Submitting..." : "Track"}
              </Button>
            </form>
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
