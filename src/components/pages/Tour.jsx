import React, { Fragment } from "react";
import TourCard from "../tour/TourCard";
import Navbar from "../Navbar";

const slidedatas = [
  {
    image:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    text: "Take a virtual live tour of india's famous pilgrimages",
  },
  {
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    text: "Take a virtual live tour of india's famous pilgrimages",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    text: "Take a virtual live tour of india's famous pilgrimages",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    text: "Take a virtual live tour of india's famous pilgrimages",
  },
];

const Tour = () => {
  return (
    <Fragment>
      <Navbar />
      <main className="  bg-white  min-h-screen">
        <div className="carousel relative  w-full max-h-[34rem] h-fit">
          {slidedatas.map((slide, index) => (
            <div
              key={index}
              id={`slide${index}`}
              className=" carousel-item relative w-full"
            >
              <img src={slide.image} className="w-full object-cover" />
              <div className="absolute  bg-black/50 inset-0">
                <div className="h-full mx-20 md:mx-32  xl:ml-72 w-fit flex items-center lg:max-w-4xl">
                  <h2 className=" text-white font-bold sm:leading-[4rem]  lg:leading-[6rem] text-3xl sm:text-5xl lg:text-7xl">
                    {slide.text}
                  </h2>
                </div>
              </div>
              <div className="absolute flex justify-between transform-translate-y-1/2 left-5 right-5 top-1/2">
                {index !== 0 ? (
                  <a href={`#slide${index - 1}`} className="btn btn-circle">
                    ❮
                  </a>
                ) : (
                  <p></p>
                )}
                {index !== slidedatas.length - 1 && (
                  <a href={`#slide${index + 1}`} className="btn btn-circle">
                    ❯
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className=" px-10 py-16 md:py-28 grid gap-10 md:gap-20 md:grid-cols-[fit-content(100%)_1fr_fit-content(100%)]">
          <div className=" text-black font-bol">
            <p className="text-2xl">Location:</p>
            <p className="text-2xl">Hollyland</p>
          </div>
          <div className="tour__card-section2 grid gap-12">
            <TourCard
              title="Trimbakeshwar Temple"
              discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptas at explicabo non labore animi hic corporis quo quas laboriosam."
              img="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              url="/church/trimbakeshwar"
            />
            <TourCard
              title="Trimbakeshwar Temple"
              discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptas at explicabo non labore animi hic corporis quo quas laboriosam."
              img="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              url="/church/trimbakeshwar"
            />
            <TourCard
              title="Trimbakeshwar Temple"
              discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptas at explicabo non labore animi hic corporis quo quas laboriosam."
              img="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              url="/church/trimbakeshwar"
            />
            <TourCard
              title="Trimbakeshwar Temple"
              discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptas at explicabo non labore animi hic corporis quo quas laboriosam."
              img="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              url="/church/trimbakeshwar"
            />
            <TourCard
              title="Trimbakeshwar Temple"
              discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptas at explicabo non labore animi hic corporis quo quas laboriosam."
              img="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              url="/church/trimbakeshwar"
            />
          </div>
          <div className="invisible hidden xl:flex flex-col text-2xl md:text-4xl">
            <p>Location:</p>
            <p>Hollyland</p>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Tour;
