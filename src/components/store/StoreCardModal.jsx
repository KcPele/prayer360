import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import ColorModal from "./ColorModal";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
const StoreCardModal = ({ isOpen, closeModal, title, image }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
          <div className="flex  min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-[73rem] transform overflow-hidden rounded-2xl bg-white p-6 mt-4 text-left align-middle shadow-xl transition-all">
                <div className="p-4 grid  gap-8 md:grid-cols-2">
                  <div className="max-w-[500px] rounded-xl overflow-hidden">
                    <img
                      className="w-full object-cover"
                      src={image}
                      alt="product"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <div>
                        <h3 className="text-black text-xl font-bold">
                          {title}
                        </h3>
                        <p className="text-slate-600">
                          By the New Modern Churh
                        </p>

                        <p className="text-slate-600 leading-4 mt-4">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Eius excepturi, fugiat adipisci porro minima
                          quia aliquam atque. Minima, aliquid aliquam?
                        </p>
                      </div>
                      <div className="mt-8 relative">
                        <p>Color</p>
                        <ColorModal />
                      </div>
                      <div className="mt-16">
                        <p>How Many</p>
                      </div>
                      <div className="mt-8">
                        <p className="text-slate-500">Price</p>
                        <p className="text-slate-600">NGN 1,500</p>
                      </div>
                      <div className="flex gap-3 mt-8">
                        <button
                          disabled
                          className="text-white font-bold bg-green-600/40 p-4 rounded-md"
                        >
                          Add to bag
                        </button>
                        <button
                          disabled
                          className="text-black font-bold bg-gray-500 opacity-30 p-4 rounded-md"
                        >
                          Contact Sellet
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-end ">
                      <div>
                        <p
                          onClick={closeModal}
                          className="text-3xl   cursor-pointer font-bold text-black "
                        >
                          Back
                        </p>
                        {/* <MdOutlineKeyboardBackspace
                          className="w-10"
                          size={24}
                        /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default StoreCardModal;
