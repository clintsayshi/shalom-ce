import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import { VscChevronRight } from "react-icons/vsc"

import * as styles from "./whatwebelieve.module.scss"

const WhatWeBelievePage = props => {
  // Set Data.
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter

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

      <div className="pageContainer pageHeading">
        <h2 className="page__title">{data.pageTitle}</h2>

        <p className="page__banner">{data.pageBanner}</p>
      </div>

      <section className={`${styles.table} pageContainer`}>
        {data.ourBeliefs.map((item, index) => (
          <li className={styles.tableCell} key={index}>
            {item.belief}
          </li>
        ))}
      </section>
    </Layout>
  )
}

export default WhatWeBelievePage

// Data added via CMS
export const query = graphql`
  query {
    allFile(
      filter: {
        sourceInstanceName: { eq: "content" }
        name: { eq: "statement-of-faith" }
      }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              pageTitle
              pageBanner
              ourBeliefs {
                belief
              }
            }
          }
        }
      }
    }
  }
`
