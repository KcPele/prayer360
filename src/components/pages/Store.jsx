import React, { Fragment } from "react";
import { BiSearch } from "react-icons/bi";
import StoreCard from "../store/StoreCard";
import Navbar from "../Navbar";
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
        <div className="bg-[#dacada] p-6 max-w-[59.1rem] w-full ">
          <div className="text-black  text-center">
            <h2 className="text-xl md:text-4xl font-bold">
              The so and so Church
            </h2>
            <p className="uppercase text-[#3b333bce]">By the amazing network</p>
            <p className="mt-6 text-[#655c65ce]">
              Luxury and Bespoke Stationery | Focused on Mindfulness | Inspired
              by #heartsbydesign
            </p>
          </div>
          <div className="flex mt-10 items-center rounded-md bg-[#c492af9c]">
            <BiSearch size={24} className="ml-6 text-black" />
            <input
              placeholder="Search for a product"
              className="w-full placeholder-[#655c65ce] text-[#655c65ce] bg-transparent p-3 border-none outline-none"
            />
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            {storeData.map((product, index) => (
              <StoreCard
                key={index}
                image={product.image}
                title={product.title}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  );
};

export default Store;
