import React, { Component } from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const Lightbox = ({ images, selectedImage, handleClose }) => {
  return (
    <div
      id="modal"
      className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-blue-500 bg-opacity-50 transform scale-0 transition-transform duration-300"
    >
      <div className="bg-white w-1/2 h-1/2 p-12">
        <button id="closebutton" type="button" className="focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
          placeat maiores repudiandae, error perferendis inventore aspernatur
          voluptatum omnis sint debitis!
        </p>
      </div>
    </div>
  );
};

export default Lightbox;
