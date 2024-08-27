import React from "react";
import Slider from "react-slick";
import banner1 from "../../../public/assets/imgs/banner/mercado_slide1018x580_1.jpg";
import banner2 from "../../../public/assets/imgs/banner/mercado_slide1018x580_2.jpg";
import "./Slider.scss";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Thêm thuộc tính autoplay
    autoplaySpeed: 3000, // Đặt thời gian chuyển ảnh (đơn vị là ms, ở đây là 3000ms = 3s)
  };

  return (
    <div className="slider-container">
      <div className="slider-section">
        <Slider {...settings} className="slider">
          <div  className="slick-slide">
            <img src={banner1} alt="Banner 1" />
          </div>
          <div  className="slick-slide">
            <img src={banner2} alt="Banner 2" />
          </div>
        </Slider>
      </div>
      <div className="banner-section">
        <img
          src="https://cdn.shopify.com/s/files/1/0603/7232/0427/files/mercado_banner425x580_1.jpg?v=1633528240"
          alt="Other Banner"
        />
      </div>
    </div>
  );
}
