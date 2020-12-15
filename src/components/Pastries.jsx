import React, { useState, useEffect } from "react";
import Pastry from "./Pastry";
import usePastries from "../hooks/use-pastries";
import tw, { styled } from "twin.macro";
import StackGrid from "react-stack-grid";

const PastryGrid = styled.section`
  /* ${tw`grid lg:grid-cols-3 grid-cols-2 lg:gap-1 mt-10`} */
  ${tw`mt-10`}
`;

const Pastries = () => {
  const isBrowser = typeof window !== "undefined";
  const [width, setWidth] = useState(isBrowser ? window.innerWidth : 0);

  useEffect(() => {
    if (!isBrowser) return false;

    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const { edges } = usePastries();
  return (
    <PastryGrid>
      <StackGrid columnWidth={width <= 768 ? "50%" : "25%"} duration={0}>
        {edges &&
          edges.length &&
          edges.map(({ node }) => (
            <Pastry
              key={node.contentful_id}
              image={node.omslagsbild}
              imageTitle={node.omslagsbild.title}
              title={node.rubrik}
            />
          ))}
      </StackGrid>
    </PastryGrid>
  );
};

export default Pastries;
