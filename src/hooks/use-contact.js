import { useStaticQuery, graphql } from "gatsby";

const UseContact = () => {
  const { data } = useStaticQuery(
    graphql`
      query ContactPage {
        contentfulSidaKontakt(contentful_id: { eq: "e172i9onFXnDARDgLI6Xp" }) {
          rubrik
        }
      }
    `
  );
  return data;
};

export default UseContact;
