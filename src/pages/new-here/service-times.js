import React from "react";
import BackgroundImage from "gatsby-background-image";
import { graphql } from "gatsby";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import * as styles from "./servicetimes.module.scss";

const ServiceTimesPage = (props) => {
  // Set Data.
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter;

  // Set ImageData.
  const imageData = props.data.desktop.childImageSharp.fluid;

  return (
    <Layout>
      <SEO title="Service Times" />

      <div className="pageContainer pageHeading">
        <h2 className="page__title">{data.pageTitle}</h2>
        <p className="page__banner">{data.pageBanner}</p>
      </div>

      <section className={`${styles.serviceTimes} pageContainer`}>
        <article
          className={`${styles.serviceTimesItem} ${styles.timesTable} ${styles.sundayServices}`}
        >
          <h3 className={styles.articleTitle}>Sunday Services</h3>
          <div className={styles.table}>
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>
                <h5>Sunday Main Service</h5>
              </div>
              <div className={styles.lines}></div>
              <div className={styles.tableCell}>{data.sundayMainSrvc}</div>
            </div>

            <div className={styles.tableRow}>
              <h5>Sunday Schools</h5>
            </div>

            {data.sundaySchools.map((item, index) => (
              <div className={styles.tableRow} key={index}>
                <div className={styles.tableCell}>{item.name}</div>
                <div className={styles.lines}></div>
                <div className={styles.tableCell}>{item.time}</div>
              </div>
            ))}
          </div>
        </article>

        <BackgroundImage
          Tag="section"
          className={`${styles.serviceTimesItem} ${styles.stockImg}`}
          fluid={imageData}
        ></BackgroundImage>
      </section>

      <section className={`${styles.serviceTimes} pageContainer`}>
        <BackgroundImage
          Tag="section"
          className={`${styles.serviceTimesItem} ${styles.stockImg}`}
          fluid={imageData}
        ></BackgroundImage>

        <article
          className={`${styles.serviceTimesItem} ${styles.timesTable} ${styles.weekdayServices}`}
        >
          <h3 className={styles.articleTitle}>Weekday Services</h3>
          <div className={styles.table}>
            {data.weekdayServices.map((item, index) => (
              <div key={index}>
                <div className={styles.tableRow}>
                  <h5>{item.weekday}</h5>
                </div>
                {item.serviceDetails.map((serviceItem, index) => (
                  <div className={styles.tableRow} key={index}>
                    <div className={styles.tableCell}>{serviceItem.name}</div>
                    <div className={styles.lines}></div>
                    <div className={styles.tableCell}>{serviceItem.time}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </article>
      </section>
    </Layout>
  );
};

export default ServiceTimesPage;
// Data added via CMS

export const query = graphql`
  query {
    allFile(
      filter: {
        sourceInstanceName: { eq: "content" }
        name: { eq: "servicetimes" }
      }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              pageTitle
              pageBanner
              sundayMainSrvc
              sundayServiceCvr {
                childImageSharp {
                  gatsbyImageData
                }
              }
              sundaySchools {
                name
                time
              }
              weekdayServiceCvr {
                childImageSharp {
                  gatsbyImageData
                }
              }
              weekdayServices {
                weekday
                serviceDetails {
                  name
                  time
                }
              }
            }
          }
        }
      }
    }

    desktop: file(relativePath: { eq: "home.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
