import React from "react";
import { graphql } from "gatsby";
import { VscTwitter } from "react-icons/vsc";
import { FaInstagram, FaFacebook } from "react-icons/fa";

import Layout from "../components/layout";
import Hero from "../components/landing/hero";
import {
  Ministries,
  Services,
} from "../components/landing/ministries-and-services";
import Events from "../components/landing/events";
import About from "../components/landing/about";
import SEO from "../components/seo";

import * as styles from "../components/landing/index.module.scss";

const IndexPage = (props) => {
  // Set Data.
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter;
  const imageData = props.data.coverImg.childImageSharp.fluid;

  const SocialApp = (props) => {
    if (props.app === "twitter") return <VscTwitter />;
    if (props.app === "facebook") return <FaFacebook />;
    if (props.app === "instagram") return <FaInstagram />;
    else return null;
  };

  return (
    <Layout>
      <SEO title="Home" />

      <Hero cover={imageData} />

      {/* What We Believes */}
      <section className={`${styles.section}`}>
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

      <About cover={imageData} />

      <Services />

      <Events />

      <section className={`${styles.section} pageContainer`}>
        <h3 className={styles.section__title}>Follow us on social media</h3>
        <div className={`sectionContent`}>
          {data.socials.map((social, index) => {
            return (
              <a
                key={index}
                target="_blank"
                rel="noreferrer"
                href={social.url + social.username}
              >
                <SocialApp app={social.platform} />
                <h5>{social.username}</h5>
              </a>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

// Data added via CMS

export const query = graphql`
  query {
    allFile(
      filter: { sourceInstanceName: { eq: "content" }, name: { eq: "about" } }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              name
              caption
              socials {
                username
                url
              }
            }
          }
        }
      }
    }

    coverImg: file(relativePath: { eq: "home.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
