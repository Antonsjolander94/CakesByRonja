import React from "react";
import tw, { styled } from "twin.macro";
import Layout from "../components/Layout";
import { Heading1, Paragraph } from "../components/Shared/Types";

const TackContainer = tw.section`
  container mx-auto mt-10 
`;
const TackWrapper = tw.div`
  flex justify-center
`;
const TackContent = styled.div`
  ${tw`flex flex-col justify-center text-center lg:max-w-3xl max-w-xs`}
  p {
    ${tw`mb-5`}
  }
`;

const Tack = () => {
  return (
    <Layout>
      <TackContainer>
        <TackWrapper>
          <TackContent>
            <Heading1>Tack för ditt mejl</Heading1>
            <Paragraph>Jag återkommer så snart som möjligt</Paragraph>
          </TackContent>
        </TackWrapper>
      </TackContainer>
    </Layout>
  );
};

export default Tack;
