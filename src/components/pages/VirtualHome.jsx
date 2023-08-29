import React from "react";

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
    <main className="bg-home bg-cover pt-32 bg-center bg-no-repeat  min-h-screen">
      <HomePage title="Virtual Pilgrimage" locations={[]} homeData={homeData} />
    </main>
  );
};

export default VirtualHome;
