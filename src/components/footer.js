import React from "react";
import { graphql, StaticQuery } from "gatsby";

import { VscTwitter } from "react-icons/vsc";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import "./layout.scss";
import * as styles from "./footer.module.scss";

const Footer = () => (
  <footer id={styles.footer}>
    <div className={`${styles.top__footer} pageContainer`}>
      <a className="backToTop" href="#topNav">
        Back to top
      </a>
    </div>

    <div className={styles.bottom__footer}>
      <div className={`${styles.pageContainer} pageContainer`}>
        <h5>&copy; {new Date().getFullYear()} Shalom Christian Embassy</h5>

        <StaticQuery
          query={graphql`
            query socials {
              file(
                sourceInstanceName: { eq: "content" }
                name: { eq: "about" }
              ) {
                childMarkdownRemark {
                  frontmatter {
                    socials {
                      username
                      platform
                      url
                    }
                  }
                }
              }
            }
          `}
          render={(data) => {
            const socials = data.file.childMarkdownRemark.frontmatter.socials;
            return (
              <div className={styles.social__icons}>
                {React.Children.toArray(
                  socials.map((s) => (
                    <a
                      className={styles.social__icon}
                      target="_blank"
                      rel="noreferrer"
                      href={s.url + s.username}
                    >
                      {s.platform === "twitter" ? <VscTwitter /> : ""}
                      {s.platform === "facebook" ? <FaFacebook /> : ""}
                      {s.platform === "instagram" ? <FaInstagram /> : ""}
                    </a>
                  ))
                )}
              </div>
            );
          }}
        />
      </div>
    </div>
  </footer>
);

export default Footer;
