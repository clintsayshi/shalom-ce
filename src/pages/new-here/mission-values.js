import React from "react";
import { Link } from "gatsby";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import { VscChevronRight } from "react-icons/vsc";
import { graphql } from "gatsby";

import * as styles from "./mission.module.scss";

const MissionPage = (props) => {
  // Set Data.
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter;

  return (
    <Layout>
      <SEO title="What we believe" />
      <div className="top">
        <div className="pageContainer topInner">
          <Link className="topLink" to="/">
            Home
          </Link>
          <VscChevronRight />
          <Link className="topLink">What we believe</Link>
        </div>
      </div>

      <section className={`pageContainer ${styles.row}`}>
        <h2 className="page__title">Vision Statement.</h2>
        <p className="page__banner">{data.vsnSttmnt}</p>

        <div className={styles.quoted}>
          <p>
            <q>{data.quotedVerse}</q>
          </p>
          <h5>{data.quotedVerseFrom}</h5>
        </div>
      </section>

      <section className={`pageContainer ${styles.row}`}>
        <h2 className={styles.row__title}>Our Mission.</h2>
        <p className="generalText">{data.mssnSttmnt}</p>
      </section>

      <section className={`pageContainer ${styles.row}`}>
        <h2 className={styles.row__title}>Our Values.</h2>
        <div className={`churchValues`}>
          {data.values.map((item, index) => (
            <div key={index}>
              <p className={styles.item__value}>{item.value}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default MissionPage;
// Data added via CMS

export const query = graphql`
  query {
    allFile(
      filter: {
        sourceInstanceName: { eq: "content" }
        name: { eq: "missionvision" }
      }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              vsnSttmnt
              quotedVerse
              quotedVerseFrom
              mssnSttmnt
              values {
                value
              }
            }
          }
        }
      }
    }
  }
`;
