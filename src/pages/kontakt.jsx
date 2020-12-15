import React, { useState } from "react";
import Layout from "../components/Layout";
import tw, { styled } from "twin.macro";
import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../components/seo";

const ContactContainer = tw.div`
  container mx-auto mt-10
`;
const ContactWrapper = tw.div`
  flex justify-center
`;
const ContactContent = styled.div`
  ${tw`flex flex-col justify-center text-center lg:max-w-3xl max-w-xs`}
  p {
    ${tw`mb-5`}
  }
`;

const ContactForm = styled.div`
  ${tw`flex justify-center items-center `}
`;

const Form = tw.form`
flex flex-col w-full
`;

const Label = styled.label`
  ${tw`mb-3 font-light text-lg leading-relaxed md:text-xl tracking-normal`}
`;
const Input = styled.input`
  ${tw`mb-6 bg-transparent border border-black h-10 p-3 font-light text-lg leading-relaxed md:text-xl tracking-normal`}
  ::-webkit-input-placeholder {
    color: black;
    opacity: 0.35;
  }

  :-moz-placeholder {
    /* Firefox 18- */
    color: black;
    opacity: 0.35;
  }

  ::-moz-placeholder {
    /* Firefox 19+ */
    color: black;
    opacity: 0.35;
  }

  :-ms-input-placeholder {
    color: black;
    opacity: 0.35;
  }

  ::placeholder {
    color: black;
    opacity: 0.35;
  }
`;
const TextArea = styled.textarea`
  ${tw`mb-5 bg-transparent border border-black p-3 font-light text-lg leading-relaxed md:text-xl tracking-normal`}

  ::-webkit-input-placeholder {
    color: black;
    opacity: 0.35;
  }

  :-moz-placeholder {
    /* Firefox 18- */
    color: black;
    opacity: 0.35;
  }

  ::-moz-placeholder {
    /* Firefox 19+ */
    color: black;
    opacity: 0.35;
  }

  :-ms-input-placeholder {
    color: black;
    opacity: 0.35;
  }

  ::placeholder {
    color: black;
    opacity: 0.35;
  }
`;
const SubmitButton = styled.button`
  ${tw`mt-5 text-center text-white items-center justify-center bg-pink-400 flex transition duration-200 md:text-xl text-lg px-6 font-light py-3 focus:outline-none cursor-pointer transform`}
  ${tw`hocus:(text-white scale-105)`}
  ${tw`disabled:(opacity-50 pointer-events-none)`}
`;

const Kontakt = ({ location }) => {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  return (
    <Layout>
      <SEO
        title={"Kontakt"}
        description={
          "Bröllopstårtor, tårtor och unika bakverk - Åkersberga, Stockholm. Ronja Sjölander"
        }
        pathname={location}
      />
      <PageTransition>
        <ContactContainer>
          <ContactWrapper>
            <ContactContent>
              <ContactForm>
                <Form
                  name="Ronja Form"
                  method="POST"
                  data-netlify="true"
                  action="/tack"
                >
                  <Input type="hidden" name="form-name" value="Ronja Form" />
                  <Label htmlFor="email">Email</Label>
                  <Input
                    required
                    type="email"
                    name="email"
                    placeholder="Din email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Label htmlFor="message">Meddelande</Label>
                  <TextArea
                    required
                    rows="4"
                    cols="50"
                    type="text"
                    name="message"
                    placeholder="Skriv ett meddelande"
                    onChange={(e) => setText(e.target.value)}
                  />
                  <SubmitButton
                    disabled={email === "" || text === ""}
                    type="submit"
                  >
                    Skicka meddelande
                  </SubmitButton>
                </Form>
              </ContactForm>
            </ContactContent>
          </ContactWrapper>
        </ContactContainer>
      </PageTransition>
    </Layout>
  );
};

export default Kontakt;
