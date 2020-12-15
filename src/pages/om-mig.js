import React from "react";
import Layout from "../components/Layout";
import tw, { styled } from "twin.macro";
import UseAbout from "../hooks/use-about";
import Img from "gatsby-image";
import PageTransition from "gatsby-plugin-page-transitions";
import { Heading1, Paragraph } from "../components/Shared/Types";

const AboutContainer = tw.section`
  container mx-auto mt-10 
`;
const AboutWrapper = tw.div`
  flex justify-center
`;
const AboutContent = styled.div`
  ${tw`flex flex-col justify-center text-center lg:max-w-3xl max-w-xs`}
  p {
    ${tw`mb-5`}
  }
`;
const StyledImage = styled(Img)`
  ${tw`rounded-full mb-10 mx-auto`}
`;
const omMig = () => {
  const data = UseAbout();

  console.log({ about: data });
  return (
    <Layout>
      <PageTransition>
        <AboutContainer>
          <AboutWrapper>
            <AboutContent>
              <StyledImage fixed={data.bild.fixed} />
              <Heading1>{data.namn}</Heading1>
              <Paragraph
                dangerouslySetInnerHTML={{
                  __html:
                    data.childContentfulSidaOmMigBiografiTextNode
                      .childMarkdownRemark.html,
                }}
              ></Paragraph>
            </AboutContent>
          </AboutWrapper>
        </AboutContainer>
      </PageTransition>
    </Layout>
  );
};

export default omMig;
