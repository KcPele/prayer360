import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const TourCard = ({ img, title, discription, url }) => {
  let history = useHistory();
  return (
    <div
      onClick={() => history.push(url)}
      className="max-w-2xl cursor-pointer w-full rounded-xl overflow-hidden bg-red-950"
    >
      <div className="max-h-[400px]">
        <img className="w-full object-contain" src={img} alt="" />
      </div>
      <div className="">
        <div className="grid gap-2 px-6 py-6 text-white">
          <div className="font-bold text-xl mb-2">{title}</div>
          <div className="w-[50%]">
            <hr />
          </div>
          <p className="max-w-[60%] mb-6 text-gray-300 text-base truncate">
            {discription}
          </p>
          <button className="text-red-400 w-fit ">Tap to know more</button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
