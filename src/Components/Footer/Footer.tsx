import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <footer className="bg-gray-200">
      <div className="container">
        <div className="grid">
          <div className="column">
            <h4 className="footer-heading">Support</h4>
            <ul>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Cancellation options</a>
              </li>
              <li>
                <a href="#">Neighborhood support</a>
              </li>
              <li>
                <a href="#">Anti-discrimination</a>
              </li>
              <li>
                <a href="#">Disability support</a>
              </li>
            </ul>
          </div>
          <div className="column">
            <h4 className="footer-heading">Hosting</h4>
            <ul>
              <li>
                <a href="#">Airbnb your home</a>
              </li>
              <li>
                <a href="#">Hosting responsibility</a>
              </li>
              <li>
                <a href="#">Aircover for hosts</a>
              </li>
              <li>
                <a href="#">Hosting resources</a>
              </li>
              <li>
                <a href="#">Community forum</a>
              </li>
            </ul>
          </div>
          <div className="column">
            <h4 className="footer-heading">Airbnb</h4>
            <ul>
              <li>
                <a href="#">Newsroom</a>
              </li>
              <li>
                <a href="#">New features</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Investors</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr />

      <div className="second-footer-section">
        <div className="container">
          <div className="footer-left">
            <span>© 2023 Airbnb, Inc.</span>
            <span className="footer-space">·</span>
            <span>Privacy</span>
            <span className="footer-space">·</span>
            <span>Terms</span>
            <span className="footer-space">·</span>
            <span>Sitemap</span>
            <span className="footer-space">·</span>
            <span>Company details</span>
          </div>
          <div className="footer-right">
            <span>🌐</span>
            <span className="footer-space"></span>
            <span>English (IN)</span>
            <span className="footer-space"></span>
            <span>₹ INR</span>
            <span className="footer-space"></span>
            <FacebookIcon />
            <span className="footer-space"></span>
            <InstagramIcon />
            <span className="footer-space"></span>
            <TwitterIcon />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;