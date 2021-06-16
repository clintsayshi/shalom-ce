import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { VscChevronRight } from "react-icons/vsc";
import * as styles from "./donations.module.scss";

const DonationsPage = (props) => {
  // Set Data.
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter;

  return (
    <Layout>
      <SEO title="Give" />

      <div className={`pageContainer pageHeading`}>
        <h2 className="page__title">{data.pageTitle}</h2>
        <p className="page__banner">{data.pageBanner}</p>
      </div>

      {/* <section className={styles.donationsCover}></section> */}

      <div className={`pageContainer ${styles.bankDetails}`}>
        <p className={styles.bankDetailsLabel}>Bank:</p>
        <p>{data.bank}</p>
      </div>
      <div className={`pageContainer ${styles.bankDetails}`}>
        <p className={styles.bankDetailsLabel}>Account Number:</p>
        <p> {data.AccNumber}</p>
      </div>
      <div className={`pageContainer ${styles.bankDetails}`}>
        <p className={styles.bankDetailsLabel}>Branch code:</p>
        <p>{data.branchCode}</p>
      </div>
    </Layout>
  );
};

export default DonationsPage;

// Data added via CMS

export const query = graphql`
  query {
    allFile(
      filter: {
        sourceInstanceName: { eq: "content" }
        name: { eq: "donations" }
      }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              pageTitle
              pageBanner
              bank
              AccNumber
              branchCode
            }
          }
        }
      }
    }
  }
`;
