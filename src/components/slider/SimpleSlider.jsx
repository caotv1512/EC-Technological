import React from "react";
import Slider from "react-slick";
import banner1 from "../../../public/assets/imgs/banner/mercado_slide1018x580_1.jpg";
import banner2 from "../../../public/assets/imgs/banner/mercado_slide1018x580_2.jpg";
import "./Slider.scss";
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="slider">
      <div>
        <img src={banner1} alt="" />
      </div>
      <div>
        <img src={banner2} alt="" />
      </div>
    </Slider>
  );
}
