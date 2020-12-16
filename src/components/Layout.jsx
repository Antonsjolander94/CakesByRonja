import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { GlobalStyles } from "twin.macro";
import { Helmet } from "react-helmet";
import "./index.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet
        meta={[
          {
            name: "google-site-verification",
            content: "-w_qPwmxpzsWOqaL-LstXWZDLtTTSUy5hLQixNFG-0A",
          },
        ]}
      />
      <GlobalStyles />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
