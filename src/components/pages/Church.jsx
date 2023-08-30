import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ChurchModal from "../church/ChurchModal";

const Church = () => {
  let history = useHistory();
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <div className="bg-home bg-cover bg-center bg-no-repeat  min-h-screen">
      <div className="grid player360__container py-16 md:pt-32 lg:grid-cols-2 gap-6 md:gap-16">
        <div className=" px-6 lg:pl-16 flex i flex-col items-center lg:items-start">
          <h2 className="text-black text-3xl md:text-5xl font-bold">
            The so and so church
          </h2>
          <div className="max-w-[48rem] mt-3 rounded-3xl overflow-hidden">
            <img
              className="w-full"
              src="/assets/images/church-photo.png"
              alt="church"
            />
          </div>
          <div className=" w-full px-2 mt-6 md:mt-16 flex  items-center sm:justify-center gap-4 sm:gap-10">
            <button className="bg-blue-600 max-w-[11rem] w-full text-white sm:text-xl font-bold px-4 py-2 rounded-xl">
              360 Image{" "}
            </button>
            <button
              onClick={() => history.push("/store")}
              className="bg-blue-600 max-w-[11rem] w-full text-white sm:text-xl font-bold px-4 py-2 rounded-xl"
            >
              E- Store{" "}
            </button>
          </div>
        </div>
        <div className="px-6 lg:pr-16 text-black">
          <p className="mt-16 text-2xl font-bold">
            This church was founded in blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah.
          </p>
          <div className="mt-10">
            <h3 className="text-2xl font-bold">Service offered</h3>
            <p className="text-xl font-semibold">
              Upon subscription get access to{" "}
            </p>
            <ul className="ml-8 text-xl list-disc font-semibold">
              <li className="">Live straming Holy mass</li>
              <li className="">Donations and offerings</li>
              <li>
                1 on 1 virtual prayer session/special service bookings (virtual
                prayers with a priest or church assistants lighting candles for
                customers through online video streaming, or having personal
                items blessed by a priest).
              </li>
            </ul>
            <div className="mt-10 ml-8">
              <button
                onClick={openModal}
                className="bg-[#F2544A] max-w-[11rem] w-full text-xl sm:text-2xl px-4 py-2 text-white font-bold rounded-xl "
              >
                Subcribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <ChurchModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default Church;
