import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import * as styles from "./index.module.scss";
import BackgroundImage from "gatsby-background-image";
import { Link, graphql } from "gatsby";
import { VscTwitter } from "react-icons/vsc";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const IndexPage = (props) => {
  // Set Data.
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter;
  const imageData = props.data.coverImg.childImageSharp.fluid;

  const SocialApp = (props) => {
    if (props.app === "twitter") return <VscTwitter />;
    if (props.app === "facebook") return <FaFacebook />;
    if (props.app === "instagram") return <FaInstagram />;
  };

  return (
    <Layout>
      <SEO title="Home" />

      <div className={`${styles.hero} container`}>
        <p className={styles.heroSmallText}>Welcome to</p>
        <h4 className={styles.heroBigText}>{data.name}</h4>
        <h5 className={styles.heroMediumText}>{data.caption}</h5>
      </div>

      <BackgroundImage
        Tag="section"
        className={styles.backgroundImage}
        fluid={imageData}
      >
        <h2 className={styles.sectionTitle}>Join our next service</h2>
        <p>Main Sunday Service</p>
        <p>14:00 PM</p>
        <Link className={styles.actionBtn} to="/new-here/service-times">
          See more
        </Link>
      </BackgroundImage>

      <div className="divider"></div>

      <div className="divider"></div>

      <section className="pageContainer">
        <h4 className={styles.sectionTitle}>Follow us</h4>
        <p className={styles.sectionBanner}>On social platforms for updates:</p>
        <div className={`sectionContent`}>
          {data.socials.map((social, index) => {
            return (
              <a
                key={index}
                className={styles.outsideLink}
                target="_blank"
                rel="noreferrer"
                href={social.url}
              >
                {/*  <SocialApp app={social.platform} /> */}
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
