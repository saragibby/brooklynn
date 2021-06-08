import React, { useState } from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import LightBox from "./lightbox";

const useGallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "gallery" } }) {
        nodes {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  return data.allFile.nodes.map((node) => ({
    ...node.childImageSharp, // Note that we're spreading the childImageSharp object here
    id: node.id,
  }));
};

const Gallery = () => {
  const images = useGallery();
  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (e, index) => {
    console.log("open...", e);
    setShowLightbox(true);
    setSelectedImage(index);
  };
  const handleClose = () => {
    setShowLightbox(false);
    setSelectedImage(null);
  };
  const handlePrevRequest = (i, length) => (e) => {
    setSelectedImage((i - 1 + length) % length);
  };
  const handleNextRequest = (i, length) => (e) => {
    setSelectedImage((i + 1) % length);
  };

  console.log("selectedImage", images[selectedImage]);

  return (
    <>
      <div className="gallery grid grid-cols-4 auto-rows-14 gap-2 max-w-5xl m-auto">
        {images.map(({ id, fluid }, index) => (
          <div
            onClick={(e) => handleOpen(e, index)}
            key={`div-${id}`}
            className="overflow-hidden"
          >
            <Img key={id} fluid={fluid} />
          </div>
        ))}
      </div>
      {/* <LightBox
        images={images}
        handleClose={handleClose}
        handleNextRequest={handleNextRequest}
        handlePrevRequest={handlePrevRequest}
        selectedImage={selectedImage}
      /> */}
      {showLightbox && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-opacity-80 bg-gray-700 flex justify-center items-center"
          onClick={handleClose}
        >
          <div className="w-3/4 h-3/4">
            <Img
              fluid={images[selectedImage].fluid}
              style={{ height: "100%", width: "100%" }}
              imgStyle={{ objectFit: "contain" }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
