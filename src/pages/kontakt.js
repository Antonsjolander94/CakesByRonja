import React from "react";
import Layout from "../components/Layout";
import tw from "twin.macro";
import PageTransition from "gatsby-plugin-page-transitions";

const ContactContainer = tw.div`
  container mx-auto mt-10
`;
const kontakt = () => {
  return (
    <Layout>
      <PageTransition>
        <ContactContainer>Kontakt</ContactContainer>
      </PageTransition>
    </Layout>
  );
};

export default kontakt;
