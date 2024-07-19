import React from "react";
import Slider from "react-slick";
import "./SliderComment.scss";
import avatar from "../../../../public/assets/imgs/comment/mercado_Ellipse_1.png";
export default function SliderComment() {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const comment = [
    {
      id: 1,
      img: avatar,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      id: 2,
      img: avatar,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
    },
    {
      id: 3,
      img: avatar,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
    },
  ];
  return (
    <Slider {...settings} className="slidercomment">
      {comment.map((item) => (
        <div
          className="slidercomment__item"
          key={item.id}
        >
            <div className="slidercomment__item__img">
            <img src={item.img} alt="" />

            </div>
          <div className="slidercomment__item__title">
            <p>{item.title}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
}
