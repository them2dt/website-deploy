import { useState, useEffect } from "react";
import Image from "next/image";
//media
import logo from "./media/logo.png";

function App() {
  return (
    <div className="app">
      <div id="navbar" className="navbar">
        <div className="navbar-content">
          <div className="navbar-content-left">
            <div className="navbar-content-left-content">
              <div className="navbar-content-left-content-logo">
                <Image src={logo} alt="logo" width={50} height={50} />
              </div>
            </div>
          </div>
          <div className="navbar-content-right">
            <div className="navbar-content-right-content">
              <a
                className="navbar-content-right-content-anchor"
                href="#whitepaper"
              >
                <p>Whitepaper</p>
              </a>
              <a
                className="navbar-content-right-content-anchor"
                href="#roadmap"
              >
                <p>Roadmap</p>
              </a>
              <a
                className="navbar-content-right-content-anchor"
                href="#about-us"
              >
                <p>About us</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="header" className="header">
        <div className="header-content">
          <div className="header-content-text-panel">
            <div className="header-content-text-panel-title">SPORTING LABS</div>
            <div className="header-content-text-panel-subtext">
              <p>The fantasy league for racers.</p>
            </div>
          </div>
        </div>
      </div>
      <div id="about-us" className="team">
        <div className="team-content">
          <div className="team-title">The Team</div>
          <div className="team-grid">
            <div className="team-member">
              <div className="team-member-content">
                <div className="team-member-text">
                  <div className="team-member-title">Rustintern</div>
                  <div className="team-member-description">Founder & CEO</div>
                </div>

                <a
                  href="https://twitter.com"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <div className="team-member-link">{"->"}</div>
                </a>
              </div>
            </div>
            <div className="team-member">
              <div className="team-member-content">
                <div className="team-member-text">
                  <div className="team-member-title">Brandon</div>
                  <div className="team-member-description">Artist</div>
                </div>

                <a
                  href="https://twitter.com"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <div className="team-member-link">{"->"}</div>
                </a>
              </div>
            </div>
            <div className="team-member">
              <div className="team-member-content">
                <div className="team-member-text">
                  <div className="team-member-title">M2DT</div>
                  <div className="team-member-description">
                    Frontend Developer
                  </div>
                </div>

                <a
                  href="https://twitter.com"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <div className="team-member-link">{"->"}</div>
                </a>
              </div>
            </div>
            <div className="team-member">
              <div className="team-member-content">
                <div className="team-member-text">
                  <div className="team-member-title">Kulture</div>
                  <div className="team-member-description">
                    Backend Developer
                  </div>
                </div>

                <a
                  href="https://twitter.com"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <div className="team-member-link">{"->"}</div>
                </a>
              </div>
            </div>
            <div className="team-member">
              <div className="team-member-content">
                <div className="team-member-text">
                  <div className="team-member-title">Sonder</div>
                  <div className="team-member-description">
                    Community Manager
                  </div>
                </div>

                <a
                  href="https://twitter.com"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <div className="team-member-link">{"->"}</div>
                </a>
              </div>
            </div>
            <div className="team-member">
              <div className="team-member-content">
                <div className="team-member-text">
                  <div className="team-member-title">Dinesh</div>
                  <div className="team-member-description">Developer</div>
                </div>

                <a
                  href="https://twitter.com"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <div className="team-member-link">{"->"}</div>
                </a>
              </div>
            </div>
            <div className="team-member">
              <div className="team-member-content">
                <div className="team-member-text">
                  <div className="team-member-title">Reev</div>
                  <div className="team-member-description">UI Designer</div>
                </div>

                <a
                  href="https://twitter.com"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <div className="team-member-link">{"->"}</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact" id="contact">
        <a
          href="mailto:contact@sportinglabs.com"
          target={"_blank"}
          rel="noreferrer"
        >
          Contact us
        </a>
      </div>
      <div id="footer" className="footer">
        <div className="footer-content">
          <p>Sporting Labs.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
