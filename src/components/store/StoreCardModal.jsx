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
                    <div className="flex justify-end  ">
                      <div
                        onClick={closeModal}
                        className="relative cursor-pointer"
                      >
                        <p className="text-3xl    cursor-pointer font-bold text-black ">
                          Back
                        </p>
                        <div className="absolute top-5 -right-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="92"
                            height="24"
                            viewBox="0 0 92 24"
                            fill="none"
                          >
                            <path
                              d="M0.939339 10.9393C0.353554 11.5251 0.353554 12.4749 0.939339 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51471C13.1924 2.92893 13.1924 1.97918 12.6066 1.39339C12.0208 0.807604 11.0711 0.807604 10.4853 1.39339L0.939339 10.9393ZM92 10.5L2 10.5L2 13.5L92 13.5L92 10.5Z"
                              fill="black"
                            />
                          </svg>
                        </div>
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
