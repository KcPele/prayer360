import React, { Fragment } from "react";
import HomePage from "../home/HomePage";
import Navbar from "../Navbar";

const VirtualHome = () => {
  const homeData = [
    {
      src: "/assets/images/vil1.png",
      title: "Holy Land",
      url: "/tour",
    },
    {
      src: "/assets/images/vil2.png",
      title: "Holy City",
      url: "/tour",
    },
    {
      src: "/assets/images/vil3.png",
      title: "Others",
      url: "/tour",
    },
  ];
  return (
    <Fragment>
      <Navbar />
      <main className="bg-home bg-cover pt-32 bg-center bg-no-repeat  min-h-screen">
        <HomePage
          title="Virtual Pilgrimage"
          locations={[]}
          homeData={homeData}
        />
      </main>
    </Fragment>
  );
};

export default VirtualHome;
