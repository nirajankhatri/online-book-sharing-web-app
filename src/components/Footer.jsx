import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h3 className="footer__section-heading">
            Save money and reduce waste by shopping second-hand books.
          </h3>
          <div className="footer__social-icons">
            <Link to="https://twitter.com">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link to="https://facebook.com">
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link href="https://instagram.com">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </div>
        </div>

        <div className="footer__section">
          <div className="footer__section-page-links">
          <Link to="#">Terms of use</Link>
          <Link to="#">Privacy policy</Link>
          <Link to="#">Contact us</Link>
          </div>

        </div>

        <div className="footer__section">
          <h5 className="footer__section-copyright">Copyright &copy; Aurora Books</h5>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
