import React from "react";
import tw, { styled } from "twin.macro";

const FooterWrapper = styled.footer`
  ${tw`flex justify-center items-center p-10 border-t mt-20`}
  border-color: rgba(0,0,0,0.05);
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p className="text-black text-sm text-center sm:text-left">
        © {new Date().getFullYear()} CakesByRonja
      </p>
    </FooterWrapper>
  );
};

export default Footer;
