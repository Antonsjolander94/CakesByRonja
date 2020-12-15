import { useStaticQuery, graphql } from "gatsby";

const UsePastries = () => {
  const { data } = useStaticQuery(
    graphql`
      query Pastries {
        data: allContentfulBakverk {
          edges {
            node {
              rubrik
              contentful_id
              omslagsbild {
                title
                fluid(maxWidth: 1240) {
                  ...GatsbyContentfulFluid_withWebp
                }
              }
            }
          }
        }
      }
    `
  );
  return data;
};

export default UsePastries;
