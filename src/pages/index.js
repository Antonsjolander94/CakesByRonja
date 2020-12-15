import React from "react";
import Layout from "../components/Layout";
import Pastries from "../components/Pastries";
import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../components/seo";
import tw, { styled } from "twin.macro";
import Img from "gatsby-image";
import UseAbout from "../hooks/use-about";
import { Link } from "gatsby";

const IndexContainer = tw.div`
  container mx-auto 
`;
const AboutContainer = styled.div`
  ${tw`container mx-auto`}
`;
const AboutContent = styled.div`
  ${tw`flex justify-center items-center max-w-sm mx-auto lg:p-0 px-9`}
`;
const AboutImageWrapper = styled.div`
  ${tw`w-2/6 `}
`;
const AboutText = styled.h1`
  ${tw`text-sm flex justify-center`}
`;
const AboutImg = styled(Img)`
  ${tw`w-16 h-16 rounded-full mr-8 `}
`;
const AboutWrapper = styled.section`
  ${tw`flex flex-col relative py-4 overflow-hidden pt-6`}
  background-color: #F7DFC5;
`;

const Index = ({ location }) => {
  const data = UseAbout();

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
              <AboutImageWrapper>
                <Link to="/om-mig">
                  <AboutImg fluid={data.bild.fluid} />
                  <p className="sr-only">Ronja Sjölander</p>
                </Link>
              </AboutImageWrapper>
              <AboutText>
                Välkommen till Cakes By Ronja. Skrolla ned för att se mina
                bakverk 🧁
              </AboutText>
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
