import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import Button from "../button/Button";
import TextArea from "react-textarea-autosize";
import { IconPhoto } from "@tabler/icons-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  const createPostInput = useRef<HTMLTextAreaElement>(null);
  return (
    <>
      {/* <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div> */}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white p-4 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Create new post
                  </Dialog.Title>
                  <div className="mt-2">
                    <div
                      className="h-28 cursor-text"
                      onClick={() => createPostInput.current?.focus()}
                    >
                      <TextArea
                        ref={createPostInput}
                        maxRows={4}
                        className="h-full w-full resize-none border-none p-0 text-lg text-gray-800 outline-none focus-visible:shadow-none focus-visible:ring-0 "
                        placeholder="What's new, Bikrant?"
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center">
                    <label
                      htmlFor="post-image"
                      className="flex items-center gap-1"
                    >
                      <IconPhoto className="icon h-4 w-4" />
                      <span>Upload</span>
                      <input
                        type="file"
                        id="post-image"
                        className="sr-only"
                        multiple
                      />
                    </label>
                    <div className="ml-auto flex items-center gap-2">
                      <Button variant="outlined" onClick={onClose}>
                        Cancel
                      </Button>

                      <Button>Create</Button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
