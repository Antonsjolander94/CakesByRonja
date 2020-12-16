import { useStaticQuery, graphql } from "gatsby";

const UsePastry = () => {
  const { data } = useStaticQuery(
    graphql`
      query AllPastries {
        data: allContentfulAllaBakverk {
          edges {
            node {
              bilder {
                title
                fluid(maxWidth: 1240) {
                  ...GatsbyContentfulFluid_withWebp
                }
                contentful_id
                id
                node_locale
              }
            }
          }
        }
      }
    `
  );
  return data;
};

export default UsePastry;
