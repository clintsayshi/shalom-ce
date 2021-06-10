import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import * as styles from "./ministries.module.scss";

const MinistriesPage = (props) => {
  // Set Data.
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter;

  return (
    <Layout>
      <SEO title="Ministries" />

      <div className="pageContainer pageHeading">
        <h2 className="page__title">{data.pageTitle}</h2>
      </div>

      <section className={`pageContainer ${styles.ministries}`}>
        {data.ministries.map((ministry, index) => (
          <div className={styles.ministry} key={index}>
            <h3 className={styles.ministryTitle}>{ministry.name}</h3>

            <p className={`${styles.ministryDesc}`}>{ministry.desc}</p>
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default MinistriesPage;

// Data added via CMS

export const query = graphql`
  query {
    allFile(
      filter: {
        sourceInstanceName: { eq: "content" }
        name: { eq: "ministries" }
      }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              pageTitle
              pageBanner
              ministries {
                name
                desc
              }
            }
          }
        }
      }
    }
  }
`;
