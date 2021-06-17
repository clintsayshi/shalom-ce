import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Hero from "../components/landing/hero";
import {
  Ministries,
  Services,
} from "../components/landing/ministries-and-services";
import About from "../components/landing/about";
import Events from "../components/landing/events";
import SEO from "../components/seo";

import * as styles from "../components/landing/index.module.scss";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />

      <Hero />

      {/* What We Believes */}
      <section className={styles.section}>
        <div className="pageContainer">
          <header>
            <h3 className={`${styles.section__title}`}>Our Believes</h3>
          </header>
          <p className={`${styles.large__paragraph}`}>
            We are a church that believes Man was saved through repentance and
            faith in the finished work of Christ.
          </p>
        </div>
      </section>

      <Ministries />

      <About />

      <Services />

      {/* <section className={`${styles.section} pageContainer`}>
        <header>
          <h3 className={`${styles.section__title}`}>Gallery</h3>
        </header>

        <div></div>
      </section> */}
    </Layout>
  );
};

export default IndexPage;

// Data added via CMS

export const query = graphql`
  query {
    home: file(sourceInstanceName: { eq: "content" }, name: { eq: "about" }) {
      childMarkdownRemark {
        frontmatter {
          name
          slogan
          heroImage {
            childImageSharp {
              gatsbyImageData
            }
          }
          socials {
            username
            url
            platform
          }
        }
      }
    }
  }
`;
