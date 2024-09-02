import React from "react";
import "./Footer.scss";
import logo from "../../../public/assets/imgs/logo/2.png";
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
                  Mọi thắc mắc xin liên hệ, chúng tôi tư vấn 24/7
                </p>
                <p className="footer--top__one__hotline__text__number">
                  0962 386 350
                </p>
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
          <div className="footer--top__one">
            <div className="footer--top__one__address">
              <div className="footer--top__one__address__top">
                <span class="material-symbols-outlined">location_on</span>
                <p>Địa chỉ</p>
              </div>
              <div className="footer--top__one__address__bot">
                <p>T248 Nhật Tảo, P.8, Q. 10, TP. Hồ Chí Minh.</p>
              </div>
            </div>
          </div>
          <div className="footer--top__one">

            <div className="footer--top__one__address">
              <div className="footer--top__one__address__top">
                <span class="material-symbols-outlined">location_on</span>
                <p>Địa chỉ</p>
              </div>
              <div className="footer--top__one__address__bot">
                <p>T248 Nhật Tảo, P.8, Q. 10, TP. Hồ Chí Minh.</p>
              </div>
            </div>
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
