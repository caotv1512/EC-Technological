import React from "react";
import "./Footer.scss";
import logo from "../../../public/assets/imgs/logo/mercado-suppermarket-store-logo-1633487728.jpg";
import fb from "../../../public/assets/imgs/internet/icons8-facebook-50.png";
import insta from "../../../public/assets/imgs/internet/icons8-instagram-50.png";
import pinteres from "../../../public/assets/imgs/internet/icons8-pinterest-50.png";
import threads from "../../../public/assets/imgs/internet/icons8-threads-48.png";
import ytb from "../../../public/assets/imgs/internet/icons8-youtube-50.png";
import payment from "../../../public/assets/imgs/logo/payment.png";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
export default function Footer() {
  return (
    <>
      <div className="footer__container">
        <div className="footer--top">
          <div className="footer--top__one">
            <div className="footer--top__one__img">
              <img src={logo} alt="" />
            </div>
            <div className="footer--top__one__hotline">
              <span className="material-symbols-outlined">support_agent</span>
              <div className="footer--top__one__hotline__text">
                <p className="footer--top__one__hotline__text__title">
                  Got questions? Call us 24/7
                </p>
                <p className="footer--top__one__hotline__text__number">
                  0123 456 789
                </p>
              </div>
            </div>
            <div className="footer--top__one__address">
              <div className="footer--top__one__address__top">
                <span class="material-symbols-outlined">location_on</span>
                <p>Contact infor</p>
              </div>
              <div className="footer--top__one__address__bot">
                <p>Toa Song Da, Pham Hung, Ha Noi</p>
              </div>
            </div>
            <div className="footer--top__one__contact">
              <img src={fb} alt="" />
              <img src={insta} alt="" />
              <img src={threads} alt="" />
              <img src={ytb} alt="" />
              <img src={pinteres} alt="" />
            </div>
          </div>
          <div className="footer--top__two">
            <h3>Find In Fast</h3>
            <ul>
              <li>Accessories</li>
              <li>Gaming</li>
              <li>Laptop&Computer</li>
              <li>Mac Computer</li>
              <li>PC Computer</li>
              <li>Ultrabooks</li>
            </ul>
          </div>
          <div className="footer--top__twoResponse">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <h3>Find In Fast</h3>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  <li>Accessories</li>
                  <li>Gaming</li>
                  <li>Laptop&Computer</li>
                  <li>Mac Computer</li>
                  <li>PC Computer</li>
                  <li>Ultrabooks</li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="footer--top__three">
            <h3>Information</h3>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Suppliers</li>
              <li>Address</li>
              <li>Notice</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div className="footer--top__threeResponse">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <h3>Information</h3>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Suppliers</li>
                  <li>Address</li>
                  <li>Notice</li>
                  <li>Sitemap</li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="footer--top__four">
            <h3>My Account</h3>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Suppliers</li>
              <li>Address</li>
              <li>Notice</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div className="footer--top__fourResponse">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <h3>My Account</h3>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Suppliers</li>
                  <li>Address</li>
                  <li>Notice</li>
                  <li>Sitemap</li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="footer--top__five">
            <h3>Service</h3>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Suppliers</li>
              <li>Address</li>
              <li>Notice</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div className="footer--top__fiveResponse">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <h3>Service</h3>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Suppliers</li>
                  <li>Address</li>
                  <li>Notice</li>
                  <li>Sitemap</li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className="footer--bottom">
          <p className="footer--bottom__text">
            © 2024 - Ecommerce software by PrestaShop™
          </p>
          <img src={payment} alt="" />
        </div>
      </div>
    </>
  );
}
