import React from "react";
import "./Computer.scss";
import product from "../../../../public/assets/imgs/product/brown-bear-printed-sweater.jpg";
import productHover from "../../../../public/assets/imgs/product/hummingbird-printed-t-shirt.jpg";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
export default function Computer() {
  const dataProduct = [
    {
      id: 1,
      img: product,
      imgHover: productHover,
      descreption: "Samsung Galaxy S21 Dual-SIM 128GB 5G Smartphone",
      useFor: "Studio Design",
      price: "100",
    },
    {
      id: 2,
      imgHover: productHover,
      img: product,
      descreption: "Samsung Galaxy S21 Dual-SIM 128GB 5G Smartphone",
      useFor: "Graphic Corner",
      price: "200",
    },
    {
      id: 3,
      imgHover: productHover,
      img: product,
      useFor: "Studio Design",
      descreption: "Samsung Galaxy S21 Dual-SIM 128GB 5G Smartphone",
      price: "100",
    },
    {
      id: 4,
      imgHover: productHover,
      img: product,
      useFor: "Graphic Corner",
      descreption: "Samsung Galaxy S21 Dual-SIM 128GB 5G Smartphone",
      price: "200",
    },
    {
      id: 5,
      imgHover: productHover,
      img: product,
      useFor: "Studio Design",
      descreption: "Samsung Galaxy S21 Dual-SIM 128GB 5G Smartphone",
      price: "100",
    },
    {
      id: 6,
      imgHover: productHover,
      img: product,
      useFor: "Graphic Corner",
      descreption: "Samsung Galaxy S21 Dual-SIM 128GB 5G Smartphone",
      price: "200",
    },
  ];
  return (
    <>
      <div className="computer__container">
        <div className="computer__top" data-aos="fade-up">
          <div className="computer__top__title">
            <p>Computer</p>
          </div>
        </div>
        <div className="computer__list">
          {dataProduct.map((product) => (
            <Link to={"/productDetail/" + product.id}>
              <div
                className="computer__list__item"
                key={product.id}
                data-aos="fade-up"
              >
                <div className="computer__list__item__img">
                  <img src={product.img} alt="" />
                </div>
                <div className="computer__list__item__hover">
                  <img src={product.imgHover} alt="" />
                  <div className="computer__list__item__hover__allicon">
                    <div className="computer__list__item__hover__wishList divIcon">
                      <span className="material-symbols-outlined">
                        favorite
                      </span>
                    </div>
                    <div className="computer__list__item__hover__eye divIcon">
                      <span className="material-symbols-outlined">
                        visibility
                      </span>
                    </div>
                    <div className="computer__list__item__hover__compare divIcon">
                      <span className="material-symbols-outlined">
                        compare_arrows
                      </span>
                    </div>
                  </div>
                </div>
                <p className="computer__list__item__title">{product.useFor}.</p>
                <p className="computer__list__item__description">
                  {product.descreption}
                </p>
                <div className="computer__list__item__rate">
                  <Rating name="read-only" value={3} readOnly />
                </div>
                <div className="computer__list__item__price">
                  <p className="computer__list__item__price__number">
                    $ {product.price}
                  </p>
                  <div className="computer__list__item__price__addcart">
                    <span className="material-symbols-outlined">
                      add_shopping_cart
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
