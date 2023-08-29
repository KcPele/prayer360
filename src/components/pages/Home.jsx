import HomePage from "../home/HomePage";

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
      url: "/virtual-home",
    },
  ];
  return (
    <main className="bg-home bg-cover pt-32 bg-center bg-no-repeat  min-h-screen">
      <HomePage title="Home" locations={[]} homeData={homeData} />
    </main>
  );
}
