import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { VscChevronRight } from "react-icons/vsc";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

//import Img from "gatsby-image"

import * as styles from "./leadership.module.scss";

const LeadershipPage = (props) => {
  // Set Data.
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter;

  return (
    <Layout>
      <SEO title="What we believe" />
      <div className="top">
        <div className="pageContainer topInner">
          <Link className="topLink" to="/">
            Home
          </Link>
          <VscChevronRight />
          <Link className="topLink">Our leadership</Link>
        </div>
      </div>

      <div className="pageContainer pageHeading">
        <h2 className="page__title">Our Leadership.</h2>
      </div>

      <section className={`pageContainer ${styles.leaders}`}>
        {data.leaders.map((item, index) => {
          const image = getImage(item.potrait);

          return (
            <div key={index} className={styles.leader}>
              <div className={styles.leaderDetails}>
                <small className={styles.leaderRole}>Senior Pastor</small>
                <h3 className={styles.leaderName}>Apostle Sithole MZ</h3>
              </div>
              <GatsbyImage
                className={styles.leaderCover}
                image={image}
                alt={item.name}
              />
            </div>
          );
        })}
      </section>
    </Layout>
  );
};

export default LeadershipPage;

export const query = graphql`
  query {
    allFile(
      filter: {
        sourceInstanceName: { eq: "content" }
        name: { eq: "leadership" }
      }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              pageTitle
              pageBanner
              leaders {
                name
                role
                bio
                potrait {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
      }
    }

    picture: file(relativePath: { eq: "pastor-sithole.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "pastor-sifundza.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    image3: file(relativePath: { eq: "home.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
