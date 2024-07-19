import React from "react";
import Slider from "react-slick";
import brand2 from "../../../../public/assets/imgs/brand/nordic.jpg";
import brand3 from "../../../../public/assets/imgs/brand/nyc.jpg";
import brand4 from "../../../../public/assets/imgs/brand/superior.jpg";
import brand5 from "../../../../public/assets/imgs/brand/stanford.jpg";
import brand6 from "../../../../public/assets/imgs/brand/staen.jpg";
import "./SliderBrand.scss";
export default function SliderBrand() {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };
  var settingsRespon = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  const brand = [
    {
      id: 2,
      img: brand2,
    },
    {
      id: 3,
      img: brand3,
    },
    {
      id: 4,
      img: brand4,
    },
    {
      id: 5,
      img: brand5,
    },
    {
      id: 6,
      img: brand6,
    },
    {
      id: 7,
      img: brand2,
    },
    {
      id: 8,
      img: brand3,
    },
    {
      id: 9,
      img: brand4,
    },
    {
      id: 10,
      img: brand5,
    },
    {
      id: 11,
      img: brand6,
    },
    {
      id: 12,
      img: brand2,
    },
    {
      id: 13,
      img: brand3,
    },
    {
      id: 14,
      img: brand4,
    },
    {
      id: 15,
      img: brand5,
    },
    {
      id: 16,
      img: brand6,
    },
  ];
  return (
    <>
      <Slider {...settings} className="sliderbrand">
        {brand.map((item) => (
          <div className="sliderbrand__item" key={item.id}>
            <img src={item.img} alt="" />
          </div>
        ))}
      </Slider>
      <Slider {...settingsRespon} className="sliderbrandResponsive">
        {brand.map((item) => (
            <div className="sliderbrand__item" key={item.id}>
            <img src={item.img} alt="" />
          </div>
        ))}
    </Slider>
    </>
  );
}
