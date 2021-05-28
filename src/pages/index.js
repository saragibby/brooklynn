import * as React from "react";
import { Link } from "gatsby";
import BannerSvg from "../components/bannerSvg";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Map from "../components/map";

const IndexPage = () => (
  <Layout>
    <Seo title="Brooklynn Gibbons" />

    <div
      class="bg-cover bg-center w-screen h-screen"
      style={{ backgroundImage: `url('by-river.webp')` }}
    >
      <div className="w-96 text-white border-2 border-white absolute right-6 top-1/3 p-4 text-center">
        <p className="font-semibold text-2xl">Let's Celebrate</p>
        <p className="text-xl">July 31, 2021</p>
        <div className="p-5 relative flex justify-center">
          <a href="#celebrate" class="arrow down" />
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
    <div id="celebrate" className="p-12">
      <div className="bg-yellow-50 rounded-xl shadow-md p-12 flex">
        <div className="min-w-96">
          <h3 className="text-5xl pb-5">Let's Celebrate</h3>
          <h3 className="text-2xl pb-4">Brooklynn's Graduation Party</h3>
          <p>July 31, 2021 | 2:00 PM – 6:00 PM</p>
          <p>18926 Burberry Dr, Macomb, MI 48042, USA</p>
          <div className="pt-6">
            <button class="bg-gray-500 hover:bg-gray-800 text-white hover:text-gold font-bold py-3 px-8 rounded">
              RSVP
            </button>
          </div>
        </div>
        <div className="pl-8 w-full h-full">
        <Map />
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
