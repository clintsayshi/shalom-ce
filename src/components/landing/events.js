import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";

import { IoLocationOutline, IoTimeOutline } from "react-icons/io5";

import * as index from "./index.module.scss";
import * as styles from "./events.module.scss";

export default function Events() {
  return (
    <section className={`${styles.events} ${index.section}`}>
      <header>
        <h3 className={index.section__title}>upcoming events</h3>
      </header>

      <StaticQuery
        query={graphql`
          query events {
            file(
              sourceInstanceName: { eq: "content" }
              name: { eq: "events" }
            ) {
              childMarkdownRemark {
                frontmatter {
                  events {
                    name
                  }
                }
              }
            }
          }
        `}
        render={(data) => {
          let events = data.file.childMarkdownRemark.frontmatter.events;
          if (events.length > 2) {
            events = events.slice(0, 2);
          }
          return (
            <div className={styles.events__}>
              {React.Children.toArray(
                events.map((event) => (
                  <Link to="/" className={`${styles.event} pageContainer`}>
                    <div className={styles.event__date}>
                      <h1 className={styles.event__day}>25</h1>
                      <small className={styles.event__mnthyr}>Dec 21</small>
                    </div>

                    <h3 className={styles.event__name}>{event.name}</h3>

                    <div className={styles.event__time}>
                      <IoTimeOutline />
                      <div className={styles.event_timeday}>
                        <small>Saturday, 10:00 AM</small>
                        <small>Saturday, 10:00 AM</small>
                      </div>
                    </div>

                    <div className={styles.event__location}>
                      <IoLocationOutline />
                      <small>
                        Local Church 233 Main St. New York, United States
                      </small>
                    </div>
                  </Link>
                ))
              )}
            </div>
          );
        }}
      />
    </section>
  );
}
