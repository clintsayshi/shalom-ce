import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import * as styles from "./about.module.scss";

const AboutPage = ({ data }) => {
  //const imageData = data.image1.childImageSharp.fluid

  return (
    <Layout>
      <SEO title="About us" />

      <div className={`pageContainer  ${styles.pageHeader}`}></div>

      <section className={`pageContainer`}>
        <div>
          <h4 className={styles.ourStoryTitle}>Our story</h4>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
            maiores mollitia laborum animi tempore dicta, quas velit numquam
            architecto adipisci commodi veniam esse assumenda quisquam!
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
