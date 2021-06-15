import React from "react";
import { Link } from "gatsby";

import { IoLocationOutline, IoTimeOutline } from "react-icons/io5";

import * as index from "./index.module.scss";
import * as styles from "./events.module.scss";

export default function Events() {
  return (
    <section className={`${styles.events} ${index.section}`}>
      <header>
        <h3 className={index.section__title}>upcoming events</h3>
      </header>

      <div className={styles.events__}>
        <Link to="/" className={`${styles.event} pageContainer`}>
          <div className={styles.event__date}>
            <h1 className={styles.event__day}>25</h1>
            <small className={styles.event__mnthyr}>Dec 21</small>
          </div>

          <h3 className={styles.event__name}>Holy Living in an Unholy World</h3>

          <div className={styles.event__time}>
            <IoTimeOutline />
            <div className={styles.event_timeday}>
              <small>Saturday, 10:00 AM</small>
              <small>Saturday, 10:00 AM</small>
            </div>
          </div>

          <div className={styles.event__location}>
            <IoLocationOutline />
            <small>Local Church 233 Main St. New York, United States</small>
          </div>
        </Link>

        <Link to="/" className={`${styles.event} pageContainer`}>
          <div className={styles.event__date}>
            <h1 className={styles.event__day}>25</h1>
            <small className={styles.event__mnthyr}>Dec 21</small>
          </div>

          <h3 className={styles.event__name}>Holy Living in an Unholy World</h3>

          <div className={styles.event__time}>
            <IoTimeOutline />
            <div className={styles.event_timeday}>
              <small>Saturday, 10:00 AM</small>
              <small>Saturday, 10:00 AM</small>
            </div>
          </div>

          <div className={styles.event__location}>
            <IoLocationOutline />
            <small>Local Church 233 Main St. New York, United States</small>
          </div>
        </Link>
      </div>
    </section>
  );
}
