import React from "react";
import { useHistory } from "react-router-dom";

const HomePage = ({ title, locations, homeData }) => {
  let history = useHistory();
  return (
    <div className="grid gap-32 px-4">
      <h1 className="text-4xl text-black text-center font-bold">{title}</h1>

      <div className=" bg-black bg-opacity-50 w-full grid gap-10 px-6  md:grid-cols-3 items-center justify-around max-w-[60rem] h-fit py-3 mx-auto no-scrollbar ">
        {homeData?.map((item, index) => (
          <div
            key={index}
            onClick={() => history.push(item?.url)}
            className="relative snap-always overflow-hidden hover:cursor-pointer snap-center  max-w-[18rem] rounded-2xl  h-[16rem]"
          >
            <div className=" rounded-2xl">
              <img className=" h-full w-ful  rounded-2xl" src={item?.src} />
            </div>
            <div className="absolute bottom-0 p-3 text-center w-full backdrop-blur-sm bg-black/30">
              <h3 className="text-white text-xl ">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
