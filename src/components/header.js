import React, { useState } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { FiChevronDown, FiChevronUp, FiMenu, FiX } from "react-icons/fi";

import * as styles from "./header.module.scss";
import Logo from "../images/logo-2x.png";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <header className={styles.header}>
      <nav id="topNav" className={`${styles.navbar} `}>
        <div className={`${styles.top} container`}>
          <Link to="/" className={styles.brand__logo}>
            <img src={Logo} alt="Shalom Christian Embassy Logo" />
            <div>
              <h3 className={styles.logo__name}>Shalom</h3>
              <h5 className={styles.logo__name2}>Christian Embassy</h5>
            </div>
          </Link>

          <button
            aria-label="Mobile menu toggle button"
            onClick={() => {
              setMobileNav((prev) => !prev);
            }}
            className={styles.navbarMobileToggle}
          >
            {mobileNav ? <FiX /> : <FiMenu />}
          </button>

          <h3 id={styles.slogan}>Church of all Nations</h3>
        </div>

        <div className={styles.bottom}>
          <div className={`container`}>
            <ul
              className={
                mobileNav
                  ? `${styles.navbarLinks} ${styles.display__flex}`
                  : styles.navbarLinks
              }
            >
              <li className={styles.navbarLink}>
                <Link to="/">Home</Link>
              </li>

              <li
                role="button"
                onMouseEnter={() => {
                  setDropdown(true);
                }}
                onMouseLeave={() => {
                  setDropdown(false);
                }}
                className={`${styles.navbarLink}`}
              >
                <button
                  id={styles.navlink_with_dropdown}
                  onClick={() => setDropdown(!dropdown)}
                >
                  <span>New Here</span>
                  {dropdown ? <FiChevronUp /> : <FiChevronDown />}
                </button>

                <ul
                  id={styles.dropdown__menu}
                  className={
                    dropdown
                      ? `${styles.dropdownMenu} ${styles.display__flex}`
                      : `${styles.dropdownMenu}`
                  }
                >
                  <li className={styles.navbarLink}>
                    <Link to="/new-here/service-times">Service times</Link>
                  </li>
                  <li className={styles.navbarLink}>
                    <Link to="/new-here/what-we-believe">What we believe</Link>
                  </li>
                  <li className={styles.navbarLink}>
                    <Link to="/new-here/leadership">Our leadership</Link>
                  </li>
                  <li className={styles.navbarLink}>
                    <Link to="/new-here/mission-values">
                      Mission, Values...
                    </Link>
                  </li>
                </ul>
              </li>

              <li className={styles.navbarLink}>
                <Link to="/ministries">Ministries</Link>
              </li>

              <li className={styles.navbarLink}>
                <Link to="/contact">Contact</Link>
              </li>

              {/* <li className={styles.navbarLink}>
                <Link to="/events">Events</Link>
              </li>

              <li className={styles.navbarLink}>
                <Link to="/gallery">Gallery</Link>
              </li> */}

              <li className={styles.navbarLink}>
                <Link to="/donations">Give</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {mobileNav && <div className={styles.overlay}></div>}
    </header>
  );
};

export default Header;

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};
