import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

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

  return (
    <div className="gallery grid grid-cols-4 auto-rows-14 gap-2 max-w-5xl m-auto">
      {images.map(({ id, fluid }) => (
        <Img key={id} fluid={fluid} className="shadow-md hover:blur-sm"/>
      ))}
    </div>
  );
};

export default Gallery;
