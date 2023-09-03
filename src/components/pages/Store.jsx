import React, { Fragment } from "react";

import Navbar from "../Navbar";
import StoreCardSection from "../store/StoreCardSection";
const storeData = [
  {
    image: "/assets/images/book-store-photo.jpg",
    title: "These Thoughts Notebook1",
    price: "1,500",
  },
  {
    image: "/assets/images/book-store-photo.jpg",
    title: "These Thoughts Notebook2",
    price: "1,500",
  },
  {
    image: "/assets/images/book-store-photo.jpg",
    title: "These Thoughts Notebook3",
    price: "1,500",
  },
  {
    image: "/assets/images/book-store-photo.jpg",
    title: "These Thoughts Notebook3",
    price: "1,500",
  },
];

const Store = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="bg-home bg-cover bg-center bg-no-repeat  min-h-screen">
        <div className="flex justify-center items-center py-24 px-6">
          <div className="max-w-[67.1rem] w-full">
            <StoreCardSection storeData={storeData} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Store;
