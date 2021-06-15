import React from "react";
import BackgroundImage from "gatsby-background-image";

import * as styles from "./hero.module.scss";

export default function Hero(props) {
  // Set Data.
  //const imageData = props.data.coverImg.childImageSharp.fluid;

  return (
    <BackgroundImage Tag="div" className={`${styles.hero}`} fluid={props.cover}>
      <div className={`${styles.hero__content} pageContainer`}>
        <h3>Welcome to</h3>
        <h1 id={styles.hero__text}>Shalom Christian Embassy Church</h1>
        <small>Regular Sunday Services at 10:30AM - 13:00PM</small>
      </div>
      <div className={styles.hero__overlay}></div>
    </BackgroundImage>
  );
}
