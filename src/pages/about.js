import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { VscChevronRight } from "react-icons/vsc";

import  * as styles from "./about.module.scss";

import { graphql } from "gatsby";

const AboutPage = ({ data }) => {
  //const imageData = data.image1.childImageSharp.fluid

  return (
    <Layout>
      <SEO title="About us" />
      <div className="top">
        <div className="pageContainer topInner">
          <Link className="topLink" to="/">
            Home
          </Link>
          <VscChevronRight />
          <Link className="topLink">About us</Link>
        </div>
      </div>

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

export const query = graphql`
  query {
    logos: file(relativePath: { eq: "logo-2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
