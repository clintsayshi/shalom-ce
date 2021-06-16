import React from "react";
import { Link } from "gatsby";

import * as index from "./index.module.scss";
import * as styles from "./mnstries-srvces.module.scss";

export const Ministries = () => {
  return (
    <section className={`${index.section}`}>
      <div className={`${styles.mnstries} pageContainer`}>
        <div className={styles.mnstries__}>
          <article className={styles.mnstry}>
            <h3 className={styles.mnstry__name}>
              Couples and Parents Ministry
            </h3>
            <p className={styles.mnstry__desc}>
              This church wing aims to encourage family unity. It achieves its
              aims through seminars, workshops and conferences.
            </p>
          </article>
          <article className={styles.mnstry}>
            <h3 className={styles.mnstry__name}>Youth Ministry</h3>
            <p className={styles.mnstry__desc}>
              Aims to mobilize the youths and motivate them to live a Godly life
              with all humility and help them realize their purpose in life as
              well as help them serve their purpose in life.
            </p>
          </article>
          <article className={styles.mnstry}>
            <h3 className={styles.mnstry__name}>Children Ministry</h3>
            <p className={styles.mnstry__desc}>
              Aims to mobilize and train the young minds to fear God, grow up
              being responsible citizens of the country and seek to explore
              their skills and talents and help them use their talents to grow
              making a mark in the lives of people.
            </p>
          </article>
        </div>
        <Link className={index.btn__more} to="/ministries">
          Our Ministries
        </Link>
      </div>
    </section>
  );
};

export const Services = () => {
  return (
    <section className={`${index.section}`}>
      <div className={`${styles.chrch__services} pageContainer`}>
        <header>
          <h3 className={index.section__title}>Church Services</h3>
        </header>

        <div className={styles.chrch_services__}>
          <article className={styles.chrch__service}>
            <h3 className={styles.srvc__day}>Sundays</h3>
            <p className={styles.chrch__desc}>We have a service every Sunday</p>
            <small>10:00 AM</small>
          </article>
          <article className={styles.chrch__service}>
            <h3 className={styles.srvc__day}>Saturdays</h3>
            <p className={styles.chrch__desc}>
              We have a service on every Sunday
            </p>
            <small>10:00 AM</small>
          </article>
          <article className={styles.chrch__service}>
            <h3 className={styles.srvc__day}>Weekdays</h3>
            <p className={styles.chrch__desc}>
              Join us on weekdays for "Fasting &amp; Prayer days", "Miracle
              services" and more.
            </p>
            <small>From 17:00 PM</small>
          </article>
        </div>

        <Link className={index.btn__more} to="/new-here/service-times">
          See More
        </Link>
      </div>
    </section>
  );
};
