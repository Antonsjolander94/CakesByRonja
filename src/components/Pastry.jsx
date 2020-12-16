import React from "react";
import tw, { styled } from "twin.macro";
import Img from "gatsby-image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import "./ZoomableMedia.module.scss";

const PastryWrapper = styled.div`
  ${tw`relative overflow-hidden cursor-pointer`}
  ${tw`hocus:(outline-none)`}
`;
const PastryTitle = styled.div`
  ${tw`h-24 absolute hidden`}
`;

const PastryImage = styled(Img)`
  ${tw`transition duration-300`}
  ${tw`hocus:(opacity-50)`}
`;

const Pastry = ({ title, image }) => {
  return (
    <PastryWrapper>
      <Zoom>
        <PastryImage className="pastry-img" fluid={image.fluid} />
      </Zoom>
      <PastryTitle>{title}</PastryTitle>
    </PastryWrapper>
  );
};

export default Pastry;
