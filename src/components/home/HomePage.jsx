"use client";

import React from "react";

const HomePage = ({ title, locations }) => {
  return (
    <div className="grid gap-32 px-4">
      <h1 className="text-4xl text-black text-center font-bold">{title}</h1>

      <div className="snap-x snap-mandatory bg-black bg-opacity-50 w-full grid gap-10 px-6 grid-flow-col items-center max-w-[70rem] h-[20rem] mx-auto no-scrollbar overflow-x-auto">
        <div
          onClick={() => {}}
          className="relative snap-always overflow-hidden cursor-pointer snap-center   w-[18rem] rounded-2xl  h-[16rem]"
        >
          <img
            className="object-fill h-full  rounded-2xl"
            src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
          />
          <div className="absolute bottom-0 p-3 text-center w-full backdrop-blur-sm bg-black/30">
            <h3 className="text-white text-xl ">Virtual Pilgrimage</h3>
          </div>
        </div>
        <div
          onClick={() => {}}
          className="relative snap-always overflow-hidden cursor-pointer snap-center   w-[18rem] rounded-2xl  h-[16rem]"
        >
          <img
            className="object-fill h-full  rounded-2xl"
            src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
          />
          <div className="absolute bottom-0 p-3 text-center w-full backdrop-blur-sm bg-black/30">
            <h3 className="text-white text-xl ">Virtual Pilgrimage</h3>
          </div>
        </div>
        <div
          onClick={() => {}}
          className="relative snap-always overflow-hidden cursor-pointer snap-center   w-[18rem] rounded-2xl  h-[16rem]"
        >
          <img
            className="object-fill h-full  rounded-2xl"
            src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
          />
          <div className="absolute bottom-0 p-3 text-center w-full backdrop-blur-sm bg-black/30">
            <h3 className="text-white text-xl ">Virtual Pilgrimage</h3>
          </div>
        </div>
        <div
          onClick={() => {}}
          className="relative snap-always overflow-hidden cursor-pointer snap-center   w-[18rem] rounded-2xl  h-[16rem]"
        >
          <img
            className="object-fill h-full  rounded-2xl"
            src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
          />
          <div className="absolute bottom-0 p-3 text-center w-full backdrop-blur-sm bg-black/30">
            <h3 className="text-white text-xl ">Virtual Pilgrimage</h3>
          </div>
        </div>
        <div
          onClick={() => {}}
          className="relative snap-always overflow-hidden cursor-pointer snap-center   w-[18rem] rounded-2xl  h-[16rem]"
        >
          <img
            className="object-fill h-full  rounded-2xl"
            src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
          />
          <div className="absolute bottom-0 p-3 text-center w-full backdrop-blur-sm bg-black/30">
            <h3 className="text-white text-xl ">Virtual Pilgrimage</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
