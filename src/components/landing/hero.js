import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import BackgroundImage from "gatsby-background-image";

import * as styles from "./hero.module.scss";

export default function Hero() {
  const { heroImage, sundayServiceTime } = useStaticQuery(
    graphql`
      query {
        heroImage: file(
          sourceInstanceName: { eq: "content" }
          name: { eq: "about" }
        ) {
          childMarkdownRemark {
            frontmatter {
              heroImage {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              name
            }
          }
        }

        sundayServiceTime: file(
          sourceInstanceName: { eq: "content" }
          name: { eq: "servicetimes" }
        ) {
          childMarkdownRemark {
            frontmatter {
              sundayMainSrvc
            }
          }
        }
      }
    `
  );

  // Set ImageData.
  const imageData =
    heroImage.childMarkdownRemark.frontmatter.heroImage.childImageSharp.fluid;
  const name = heroImage.childMarkdownRemark.frontmatter.name;
  const sundayService =
    sundayServiceTime.childMarkdownRemark.frontmatter.sundayMainSrvc;

  return (
    <BackgroundImage Tag="div" className={`${styles.hero}`} fluid={imageData}>
      <div className={`${styles.hero__content} pageContainer`}>
        <h3>Welcome to</h3>
        <h1 id={styles.hero__text}>{name}</h1>
        <small>Regular Sunday Services at {sundayService}</small>
      </div>
      <div className={styles.hero__overlay}></div>
    </BackgroundImage>
  );
}
