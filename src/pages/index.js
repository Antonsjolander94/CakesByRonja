import React from "react";
import Layout from "../components/Layout";
import Pastries from "../components/Pastries";
import PageTransition from "gatsby-plugin-page-transitions";

import tw, { styled } from "twin.macro";

const IndexContainer = tw.div`
  container mx-auto
`;

const index = () => {
  return (
    <Layout>
      <PageTransition>
        <IndexContainer>
          <Pastries />
        </IndexContainer>
      </PageTransition>
    </Layout>
  );
};

export default index;
