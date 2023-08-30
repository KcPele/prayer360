import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
const ChurchModal = ({ isOpen, closeModal }) => {
  const [formDetails, setFormDetails] = React.useState({
    name: "",
    email: "",
    password: "",
    country: "",
    state: "",
    phone: "",
    code: "",
  });
  const handleOnChange = (e) => {
    setFormDetails({
      ...formDetails,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubscription = async (e) => {
    e.preventDefault();
    console.log(formDetails);
  };
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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-black p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-2xl px-2 flex justify-between font-medium leading-6 text-gray-900"
                >
                  <p className="text-white"> Elite Plan</p>
                  <p
                    onClick={closeModal}
                    className="text-gray-400 text-md cursor-pointer"
                  >
                    x
                  </p>
                </Dialog.Title>
                <div className="mt-8">
                  <hr />
                </div>
                <form onSubmit={handleSubscription} className="mt-3 px-2">
                  <div className="grid gap-3">
                    <div>
                      <input
                        placeholder="Name"
                        type="text"
                        value={formDetails.name}
                        onChange={handleOnChange}
                        name="name"
                        className="rounded-md w-full p-3 bg-white"
                      />
                    </div>
                    <div>
                      <input
                        placeholder="Email"
                        type="email"
                        value={formDetails.email}
                        onChange={handleOnChange}
                        name="email"
                        className="rounded-md w-full p-3 bg-white"
                      />
                    </div>
                    <div>
                      <input
                        placeholder="Password"
                        type="password"
                        value={formDetails.password}
                        onChange={handleOnChange}
                        name="password"
                        className="rounded-md w-full p-3 bg-white"
                      />
                    </div>
                    <div>
                      <input
                        placeholder="Country"
                        type="text"
                        value={formDetails.country}
                        onChange={handleOnChange}
                        name="country"
                        className="rounded-md w-full p-3 bg-white"
                      />
                    </div>
                    <div>
                      <input
                        placeholder="State"
                        type="text"
                        value={formDetails.state}
                        onChange={handleOnChange}
                        name="state"
                        className="rounded-md w-full p-3 bg-white"
                      />
                    </div>
                    <div>
                      <input
                        placeholder="mobile Phone"
                        type="tel"
                        value={formDetails.phone}
                        onChange={handleOnChange}
                        name="phone"
                        className="rounded-md w-full p-3 bg-white"
                      />
                    </div>
                    <div>
                      <input
                        placeholder="5001"
                        type="text"
                        value={formDetails.code}
                        onChange={handleOnChange}
                        name="code"
                        className="rounded-md w-full p-3 bg-white"
                      />
                    </div>
                    <div className="">
                      <button
                        type="submit"
                        className="bg-blue-500 text-white w-full py-2 rounded-md font-medium"
                        onClick={closeModal}
                      >
                        PROCEED
                      </button>
                    </div>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ChurchModal;
