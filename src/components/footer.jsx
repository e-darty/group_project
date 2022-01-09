import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.css";

function Footer() {
  return (
    <section className="footer">
      <hr className="footer-seperator" />
      <section className="footer-social-media">
        <a href="/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </section>
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">E-darty</section>
          <section className="footer-info__returns">
            601 Sherwood Ave. San Bernandino
            <br />
            Online Services
          </section>
        </section>
        <section className="footer-info-center">
          <section className="footer-info__email">
            Edarty.info@gmail.com
          </section>
          <section className="footer-info__terms">
            Terms and Conditions
            <br />
            Copyright
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__number">251 546 9442</section>
          <section className="footer-info__contact">
            For better experience
            <br />
            Contact Us
          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
    </section>
  );
}

export default Footer;
