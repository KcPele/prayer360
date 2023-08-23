"use client";
import React from "react";
import StoreCardModal from "./StoreCardModal";

const StoreCard = ({ image, title, price }) => {
  let [isOpen, setIsOpen] = React.useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div
      onClick={openModal}
      className="bg-[#c492af9c] cursor-pointer flex flex-col pt-6 items-center rounded-md overflow-hidden"
    >
      <div className="max-w-[180px]  rounded-lg flex items-center  overflow-hidden  max-h-[220px]">
        <img className="h-full w-full" src={image} alt="book" />
      </div>
      <div className="bg-white p-6 mt-6 w-full">
        <h3>{title}</h3>
        <p>NGN {price}</p>
      </div>
      <StoreCardModal
        isOpen={isOpen}
        closeModal={closeModal}
        title={title}
        image={image}
      />
    </div>
  );
};

export default StoreCard;
