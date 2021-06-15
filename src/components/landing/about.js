import React from "react";
import { Link, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { FaRegHeart } from "react-icons/fa";

import * as index from "./index.module.scss";
import * as styles from "./about.module.scss";

export default function About(props) {
  return (
    <BackgroundImage
      Tag="div"
      className={`${index.section}`}
      fluid={props.cover}
    >
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
              <FaRegHeart />
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
          to="/new-here/service-times"
        >
          learn more
        </Link>
        <div className={styles.overlay}></div>
      </div>
    </BackgroundImage>
  );
}
