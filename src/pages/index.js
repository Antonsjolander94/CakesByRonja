import React, { useState } from "react";
import Layout from "../components/Layout";
import Pastries from "../components/Pastries";
import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../components/seo";
import tw, { styled } from "twin.macro";
import Img from "gatsby-image";
import UseAbout from "../hooks/use-about";
import { Link } from "gatsby";
import Sticky from "react-stickynode";

const IndexContainer = tw.div`
  container mx-auto 
`;
const AboutContainer = styled.div`
  ${tw`container mx-auto`}
`;
const AboutContent = styled.div`
  ${tw`flex justify-center  lg:max-w-md max-w-sm mx-auto lg:p-0 px-5`}
`;
const AboutItems = styled.div`
  ${tw`flex items-center`}
`;
const AboutImageWrapper = styled.div`
  ${tw``}
`;
const AboutText = styled.h1`
  ${tw`text-sm flex  flex-col ml-5`}
`;
const AboutImg = styled(Img)`
  ${tw`w-16 h-16 rounded-full `}
`;
const StyledLink = styled(Link)`
  ${tw`underline`}
`;
const AboutWrapper = styled.section`
  ${tw`flex flex-col relative py-4 overflow-hidden pt-6 `}
  background-color: #F7DFC5;

  &.active {
    ${tw`pt-0 py-3`}
    background-color:rgba(247, 223, 197, 0.95);
    .about-img {
      ${tw`w-12 h-12`}
    }
  }
`;

const Index = ({ location }) => {
  const data = UseAbout();
  const [scrolled, setScrolled] = useState(false);
  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setScrolled(true);
    }
    if (status.status === Sticky.STATUS_ORIGINAL) {
      setScrolled(false);
    }
  };

  console.log({ data: data });
  return (
    <Layout>
      <SEO
        title={"Cakes By Ronja - Unika bakverk i Stockholm"}
        description={
          "Bröllopstårtor, tårtor och unika bakverk - Åkersberga, Stockholm. Ronja Sjölander"
        }
        pathname={location}
      />
      <PageTransition>
        <AboutWrapper>
          <AboutContainer>
            <AboutContent>
              <AboutItems>
                <AboutImageWrapper>
                  <Link to="/om-mig">
                    <AboutImg className="about-img" fluid={data.bild.fluid} />
                    <p className="sr-only">Ronja Sjölander</p>
                  </Link>
                </AboutImageWrapper>
                <AboutText>
                  <span>
                    Välkommen till Cakes By Ronja. Här hittar du mina bakverk.{" "}
                    <StyledLink to="/kontakt">
                      Beställ ett specialanpassat bakverk.
                    </StyledLink>
                  </span>
                </AboutText>
              </AboutItems>
            </AboutContent>
          </AboutContainer>
        </AboutWrapper>

        <IndexContainer>
          <Pastries />
        </IndexContainer>
      </PageTransition>
    </Layout>
  );
};

export default Index;
