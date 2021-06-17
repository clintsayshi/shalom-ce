import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import { FaRegHeart, FaRegLightbulb } from "react-icons/fa";

import * as index from "./index.module.scss";
import * as styles from "./about.module.scss";

export default function About() {
  const { cover } = useStaticQuery(
    graphql`
      query {
        cover: file(
          sourceInstanceName: { eq: "content" }
          name: { eq: "missionvision" }
        ) {
          childMarkdownRemark {
            frontmatter {
              coverImage {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  // Set ImageData.
  console.log(cover);
  let imageData =
    cover.childMarkdownRemark.frontmatter.coverImage.childImageSharp.fluid;

  return (
    <BackgroundImage Tag="div" className={`${index.section}`} fluid={imageData}>
      <div className={`${styles.about} pageContainer`}>
        <div className={styles.about__}>
          <article className={styles.about__item}>
            <header className={styles.item__header}>
              <FaRegHeart />
              <h2 className={`${styles.item__title}`}>Church Mission</h2>
            </header>
            <p className={styles.item__desc}>
              To ensure that the peace of our Lord Jesus Christ is received by
              many through the preaching of the message of the Cross across all
              Nations, through deeds of mercy, church planting, home cells,
              crusades...
            </p>
          </article>

          <article className={styles.about__item}>
            <header className={styles.item__header}>
              <FaRegLightbulb />
              <h2 className={`${styles.item__title}`}>Vision Statement.</h2>
            </header>
            <p className={styles.item__desc}>
              To receive and maintain the peace of the Successor Jesus Christ
              and preach the good news of the Kingdom of God to the whole world.
            </p>
          </article>
        </div>
        <Link
          className={`${index.btn__more} ${styles.btn__more}`}
          to="/new-here/mission-values"
        >
          learn more
        </Link>
        <div className={styles.overlay}></div>
      </div>
    </BackgroundImage>
  );
}
