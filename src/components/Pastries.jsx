import React from "react";
import Img from "gatsby-image";
import usePastry from "../hooks/use-pastry";
import tw, { styled } from "twin.macro";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import styles from "./ZoomableMedia.module.scss";
import Masonry from "react-masonry-css";

const PastryGrid = styled.section`
  ${tw`mt-20 container mx-auto lg:px-0 px-1`}

  .my-masonry-grid {
    display: flex;
    margin-left: -5px; /* gutter size offset */
    margin-right: 5px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 10px; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .my-masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */
    background: #f7dfc5;
    margin-bottom: 10px;
  }
`;

const Pastries = () => {
  const { edges } = usePastry();
  const images = edges[0].node.bilder;

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 2,
  };

  return (
    <PastryGrid>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((img) => (
          <div key={img.id}>
            <Zoom className={styles.ZoomableMedia}>
              <Img fluid={img.fluid} />
            </Zoom>
          </div>
        ))}
      </Masonry>
    </PastryGrid>
  );
};

export default Pastries;
