import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import ContactForm from "../components/contact-form";

import * as styles from "./contact.module.scss";

const ContactPage = (props) => {
  // Set Data.
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter;

  return (
    <Layout>
      <SEO title="Contact" />

      {/* 25.49554443359375,31.317039489746094 */}
      <div className="pageContainer pageHeading">
        <h2 className="page__title">Contact Us</h2>
      </div>

      <div className={`pageContainer ${styles.contacts}`}>
        <section className={styles.contactus}>
          <ContactForm />
          <script
            type="text/javascript"
            src="https://embedmaps.com/google-maps-authorization/script.js?id=438e36a59a8c37cde7b2a0f935ef7a29f88fd0b6"
          ></script>

          <div className={styles.contact__details}>
            <article className={styles.contact__detail}>
              <h3 className={styles.section__title}>Physical Address</h3>
              <address className={styles.detail__text}>
                {data.physclAddrss.map((item, index) => (
                  <p key={index}>{item.line}</p>
                ))}
                <p>{data.zipCode}</p>
              </address>
            </article>

            <article className={styles.contact__detail}>
              <h3 className={styles.section__title}>Postal Address</h3>

              <address className={styles.detail__text}>
                {data.pstlAddrss.map((item, index) => (
                  <p key={index}>{item.line}</p>
                ))}
                <p>{data.zipCode}</p>
              </address>
            </article>

            <article className={styles.contact__detail}>
              <h3 className={styles.section__title}>Email</h3>
              <p className={styles.detail__text}>{data.email}</p>
            </article>

            <article className={styles.contact__detail}>
              <h3 className={styles.section__title}>Tel Number</h3>
              {data.telNumbers.map((item, index) => (
                <p key={index} className={styles.detail__text}>
                  {item.number}
                </p>
              ))}
            </article>
          </div>
        </section>

        <div id={styles.locationMap}>
          <iframe
            width="100%"
            height="250px"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            title="locationMap"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Matsulu%20b%20Nelspruit+(Shalom%20Christian%20Embassy)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;

// Data added via CMS

export const query = graphql`
  query {
    allFile(
      filter: { sourceInstanceName: { eq: "content" }, name: { eq: "contact" } }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              pagetitle
              pageBanner
              physclAddrss {
                line
              }
              pstlAddrss {
                line
              }
              zipCode
              email
              telNumbers {
                number
              }
            }
          }
        }
      }
    }
  }
`;
