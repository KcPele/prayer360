import { Fragment } from "react";
import HomePage from "../home/HomePage";
import Navbar from "../Navbar";
import Footer from "../home/Footer";

export default function Home() {
  const homeData = [
    {
      src: "/assets/images/pil1.png",
      title: "Virtual Pilgrimage",
      url: "/virtual-home",
    },
    {
      src: "/assets/images/pil2.png",
      title: "Pilgrimage Package",
      url: "/virtual-home",
    },
    {
      src: "/assets/images/pil3.png",
      title: "Souvenir",
      url: "/store",
    },
  ];
  return (
    <Fragment>
      <Navbar />
      <main className="bg-home bg-cover pt-32 bg-center bg-no-repeat  min-h-screen">
        <HomePage
          title="Life Giving Purpose"
          locations={[]}
          homeData={homeData}
        />
      </main>
      <div className="bg-[#FFC04B] px-3 md:px-5 text-center py-[3rem]">
        <h2 className="text-black font-bold text-3xl md:text-4[rem]">
          WELCOME TO BLESS
        </h2>
        <div className="mt-[2.6rem] text-[1rem] text-center max-w-[81.8rem] w-full mx-auto">
          <p className="">
            Rome International Church sits at the cross-roads of cultures. This
            means that we are a diverse group of people, welcoming anyone from
            anywhere to worship with us as we discover how God's Word reveals
            God's purpose for our lives. Our services are in English to reach
            across cultures with the message of Jesus for all nations. If you
            are looking for a community where you can grow in your understanding
            of God and the Bible, we would love to have you join us!
          </p>
          <div className="mt-[1.5rem]">
            <p>Vision:</p>
            <p>
              To see diverse people discover their life-giving purpose in Jesus
              Christ.
            </p>
          </div>
          <div className="mt-[1.5rem]">
            <p>Mission:</p>
            <p>
              To encourage, equip, and empower disciples of Jesus to be disciple
              makers in Rome and beyond.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
