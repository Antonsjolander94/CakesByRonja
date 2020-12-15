import React, { useState, useCallback } from "react";
import tw, { styled } from "twin.macro";
import Img from "gatsby-image";
import "react-medium-image-zoom/dist/styles.css";
import styles from "./ZoomableMedia.module.scss";

import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const PastryWrapper = styled.div`
  ${tw`relative overflow-hidden cursor-pointer`}
  ${tw`hocus:(outline-none)`}

  .pastry-img {
    min-height: 100%;
  }
`;
const PastryTitle = styled.div`
  ${tw`h-24 absolute hidden`}
`;

const PastryImage = styled(Img)`
  ${tw`transition duration-300`}
  ${tw`hocus:(opacity-50)`}
`;

const Pastry = ({ title, image, imageTitle }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomChange = useCallback((shouldZoom) => {
    setIsZoomed(shouldZoom);
  }, []);

  return (
    <PastryWrapper>
      <ControlledZoom
        className={styles.ZoomableMedia}
        isZoomed={isZoomed}
        onZoomChange={handleZoomChange}
      >
        <PastryImage
          alt={imageTitle}
          className="pastry-img"
          fluid={image.fluid}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </ControlledZoom>
      <PastryTitle>{title}</PastryTitle>
    </PastryWrapper>
  );
};

export default Pastry;
