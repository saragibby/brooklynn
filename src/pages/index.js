import React, { useState } from "react";
import RsvpForm from "../components/rsvpForm";
import BannerSvg from "../components/bannerSvg";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Map from "../components/map";
import Gallery from "../components/gallery"

const IndexPage = () => {
  const [showRsvpForm, setShowRsvpForm] = useState(false);

  return (
    <Layout>
      <Seo title="Brooklynn Gibbons" />

      <div
        className="bg-cover bg-center w-screen h-screen"
        style={{ backgroundImage: `url('by-river.webp')` }}
      >
        <div className="w-96 text-white border-2 border-white absolute right-6 top-1/3 p-4 text-center">
          <p className="font-semibold text-2xl">Let's Celebrate</p>
          <p className="text-xl">July 31, 2021</p>
          <div className="p-5 relative flex justify-center">
            <a href="#celebrate" className="arrow down" />
          </div>
        </div>

        <div className="w-screen h-28 bg-white bg-opacity-60 bottom-6 absolute flex flex-col items-center justify-center">
          <div className="relative top-0">
            <BannerSvg />
            <h2 className="absolute w-full top-5 text-center text-2xl text-gold font-fancy">
              Class of 2021
            </h2>
          </div>
          <h1 className="absolute text-5xl pt-5">Brooklynn Gibbons</h1>
        </div>
      </div>
      <div id="celebrate" className="p-4 lg:p-12">
        <div className="bg-yellow-50 rounded-xl shadow-md p-4 flex flex-col lg:flex-row lg:p-12">
          <div className="w-full flex lg:flex-none flex-col items-center lg:items-start lg:w-auto">
            <h3 className="text-4xl lg:text-5xl pb-5">Let's Celebrate</h3>
            <h3 className="text-xl lg:text-2xl pb-4">Brooklynn's Graduation Party</h3>
            <p>July 31, 2021 | 2:00 PM – 6:00 PM</p>
            <p className="text-sm lg:text-base">18926 Burberry Dr, Macomb, MI 48042, USA</p>
            <div className="pt-6">
              <button className="bg-gray-500 hover:bg-gray-800 text-white hover:text-gold font-bold py-3 px-8 rounded" onClick={() => setShowRsvpForm(!showRsvpForm)}>
                {showRsvpForm ? "Show Map" : "RSVP" }
              </button>
            </div>
          </div>
          <div className="lg:pl-12 w-full h-full pt-12 lg:pt-0">
            {!showRsvpForm && <Map />}
            {showRsvpForm && <RsvpForm />}
          </div>
        </div>
      </div>
      <Gallery />
    </Layout>
  );
};

export default IndexPage;
