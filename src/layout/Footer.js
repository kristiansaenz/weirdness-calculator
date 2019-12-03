import React from "react";
import GitIcon from "../images/git.svg";
import ReactIcon from "../images/react.svg";
import BulmaIcon from "../images/bulma.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <div className="columns is-centered">
          <div className="column is-one-quarter">
            <div className="columns is-mobile">
              <div className="column">
                <img
                  src={ReactIcon}
                  className="footer-icon"
                  alt="Made with React"
                ></img>
              </div>
              <div className="column">
                <a href="https://github.com/kristiansaenz">
                  <img
                    src={GitIcon}
                    className="footer-icon"
                    alt="Go to Kristian's github"
                  ></img>
                </a>
              </div>
              <div className="column bulma-badge">
                <a href="https://bulma.io">
                  <img src={BulmaIcon} alt="Made with Bulma"></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
