import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";
import { Link } from "react-router-dom/cjs/react-router-dom";
const Footer = () => {
  return (
    <div className="p-3 sm:p-5 bg-slate-900">
      <div className="grid md:grid-cols-2">
        <div class="  ">
          <h3 class="font-bold text-xl text-indigo-600">PRAYER 360</h3>
          <div className="max-w-[200px]">
            <p className="text-white/80">
              Join us for the most experience with the worlds first Metaverse
              platform
            </p>
          </div>
        </div>
        <div class=" w-full md:px-6 text-gray-800 sm:grid md:grid-cols-3 sm:grid-cols-2 mx-auto">
          <div class="">
            <div class="text-lg text-white  font-bold">Quicklink</div>
            <Link class="my-3 block text-white/70" to="/">
              Home
            </Link>
            <Link class="my-3 block text-white/70" to="/">
              Plans
            </Link>
            <Link class="my-3 block text-white/70" to="/">
              Services
            </Link>
          </div>
          <div class="">
            <div class="text-lg text-white font-bold">NFT</div>
            <Link class="my-3 block text-white/70" to="/#">
              Waitlist
            </Link>
            <Link class="my-3 block text-white/70" to="/#">
              Roadmap
            </Link>
            <Link class="my-3 block text-white/70" to="/#">
              FAQ
            </Link>
          </div>
          <div class="">
            <div class="text-lg text-white font-bold">Company</div>
            <Link class="my-3 block text-white/70" to="/#">
              About
            </Link>
            <Link class="my-3 block text-white/70" to="/#">
              Carears
            </Link>
            <Link class="my-3 block text-white/70" to="/#">
              Partners
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-3 grid gap-4 md:grid-flow-col justify-between">
        <p className="text-white">© 2023 Prayer 360</p>
        <div className="items-end  text-white/90 grid gap-6 grid-flow-col md:mr-32 ">
          <BsInstagram size={24} className="" />
          <BiLogoFacebook size={24} className="" />
          <BiLogoLinkedin size={24} className="" />
          <BiLogoTwitter size={24} className="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
