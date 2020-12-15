import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { GlobalStyles } from "twin.macro";
import "./index.scss";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
