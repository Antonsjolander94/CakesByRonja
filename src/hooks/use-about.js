import { useStaticQuery, graphql } from "gatsby";

const UseAbout = () => {
  const { data } = useStaticQuery(
    graphql`
      query About {
        data: contentfulSidaOmMig(
          contentful_id: { eq: "ruiLAtpOeIfu3kNpbVnyN" }
        ) {
          namn
          childContentfulSidaOmMigBiografiTextNode {
            childMarkdownRemark {
              html
            }
          }
          bild {
            title
            fixed(width: 250, height: 250, quality: 100) {
              ...GatsbyContentfulFixed_withWebp
            }
          }
        }
      }
    `
  );
  return data;
};

export default UseAbout;
