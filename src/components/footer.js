import React from "react"

import { VscTwitter } from "react-icons/vsc"
import { FaInstagram, FaFacebook } from "react-icons/fa"
import "./layout.scss"

const Footer = () => (
  <footer>
    <div className="topFooter pageContainer">
      <a className="backToTop" href="#topNav">
        {/* <VscChevronUp /> */}
        <p>Back to top</p>
      </a>
    </div>

    <div className="bottomFooter">
      <div className="pageContainer">
        <h5>&copy; {new Date().getFullYear()} Shalom Christian Embassy</h5>
        <div className="socialIcons">
          <a
            className="socialIcon"
            target="_blank"
            rel="noreferrer"
            href="https:/www.twitter.com/mcclintsayshi"
          >
            <VscTwitter />
          </a>
          <a
            className="socialIcon"
            rel="noreferrer"
            target="_blank"
            href="https:/facebook.com/"
          >
            <FaFacebook />
          </a>
          <a
            className="socialIcon"
            target="_blank"
            rel="noreferrer"
            href="https:/instagram.com/"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer

/* 

<div className="footerTop">
      <div className="pageContainer">
        <a className="backToTop" href="#topNav">
          <VscChevronUp />
          <p>Back to top</p>
        </a>
      </div>
    </div>

    <div className="footerBottom">
      <div className="pageContainer">
        <h5>&copy; {new Date().getFullYear()} Shalom Christian Embassy</h5>

        <div className="socialIcons">
          <a
            className="socialIcon"
            target="_blank"
            href="https:/www.twitter.com/mcclintsayshi"
          >
            <VscTwitter />
          </a>
          <a className="socialIcon" target="_blank" href="https:/facebook.com/">
            <FaFacebook />
          </a>
          <a
            className="socialIcon"
            target="_blank"
            href="https:/instagram.com/"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>

*/
