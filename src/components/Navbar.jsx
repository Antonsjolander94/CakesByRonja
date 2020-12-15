import React from "react";
import tw, { styled } from "twin.macro";
import Logo from "../assets/Logo.inline.svg";
import { Link } from "gatsby";
import CakesBanner from "../assets/CakesBanner.inline.svg";

const Banner = styled(CakesBanner)`
  ${tw`w-full h-6 absolute z-50`}
  bottom: -7px;
  left: 0;
  right: 0;
  transform: scale(1.2);

  @media (max-width: 1023px) {
    bottom: -8px;
    transform: scale(4.5);
  }
`;

const NavbarWrapper = styled.header`
  ${tw`lg:py-8 py-5 relative  z-50`}
  background-color: #e3c7de;
`;
const NavbarContainer = styled.nav`
  ${tw`container mx-auto flex justify-between items-center`}
`;

const StyledLogo = styled(Logo)`
  ${tw`lg:h-28 h-20 lg:w-28 w-40 justify-center flex items-center`}
  path {
    fill: #663433;
    transition: all 0.3s ease;
  }
  polygon {
    fill: #663433;
    transition: all 0.3s ease;
  }
`;

const Button = styled(Link)`
  ${tw`text-black flex items-center`}
  ${tw`hocus:(outline-none)`}
  &:hover, &:focus {
    .logo {
      path {
        fill: #4d2726;
      }
      polygon {
        fill: #4d2726;
      }
    }
  }
`;

const Left = styled.div`
  ${tw`font-sans font-medium text-lg underline tracking-wider uppercase lg:w-40 w-full flex lg:justify-start justify-center items-center cursor-pointer`}
`;
const Right = styled.div`
  ${tw`font-sans font-medium text-lg underline tracking-wider uppercase lg:w-40 w-full flex lg:justify-end justify-center items-center cursor-pointer`}
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Banner />
      <NavbarContainer>
        <Left>
          <Button to="/om-mig">Om mig</Button>
        </Left>
        <Button to="/">
          <StyledLogo className="logo" />
        </Button>
        <Right>
          {" "}
          <Button to="/kontakt">Kontakt</Button>
        </Right>
      </NavbarContainer>
    </NavbarWrapper>
  );
};

export default Navbar;
