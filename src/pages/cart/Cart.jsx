import React, { useState } from "react";
import "./Cart.scss";
import product from "../../../public/assets/imgs/product/brown-bear-printed-sweater.jpg";
import card1 from "../../../public/assets/imgs/card/amex.svg";
import card2 from "../../../public/assets/imgs/card/mastercard.svg";
import card3 from "../../../public/assets/imgs/card/paypal.png";
import card4 from "../../../public/assets/imgs/card/visa.svg";
import { Link } from "react-router-dom";
export default function Cart() {
  const [isExpanded, setIsExpanded] = useState(true);

  const dataProduct = [
    {
      id: 1,
      img: product,
      descreption: "Samsung Galaxy S21 Dual-SIM 128GB 5G Smartphone",
      useFor: "Studio Design",
      price: "100",
    },
    {
      id: 2,
      img: product,
      descreption: "Samsung Galaxy S21 Dual-SIM 128GB 5G Smartphone",
      useFor: "Graphic Corner",
      price: "200",
    },
    {
      id: 3,
      img: product,
      useFor: "Studio Design",
      descreption: "Samsung Galaxy S21 Dual-SIM 128GB 5G Smartphone",
      price: "100",
    },
    {
      id: 4,
      img: product,
      useFor: "Graphic Corner",
      descreption: "Samsung Galaxy S21 Dual-SIM 128GB 5G Smartphone",
      price: "200",
    },
    {
      id: 5,
      img: product,
      useFor: "Studio Design",
      descreption: "Samsung Galaxy S21 Dual-SIM 128GB 5G Smartphone",
      price: "100",
    },
    {
      id: 6,
      img: product,
      useFor: "Graphic Corner",
      descreption: "Samsung Galaxy S21 Dual-SIM 128GB 5G Smartphone",
      price: "200",
    },
  ];
  const dataCard = [
    {
      id: 1,
      img: card1,
    },
    {
      id: 2,
      img: card2,
    },
    {
      id: 3,
      img: card3,
    },
    {
      id: 4,
      img: card4,
    },
  ];
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <div className="cart__container">
        <div className="cart__left">
          <Link to={"/"}>
            <div className="cart__left__rollback">
              <span class="material-symbols-outlined">arrow_left_alt</span>
              <p>Quay lại mua hàng</p>
            </div>
          </Link>
          <div className="cart__left__header">
            <div className="cart__left__header__title">
              <p>Giỏ hàng của bạn</p>
              <p>Bạn có 4 sản phẩm trong giỏ hàng</p>
            </div>
            <div className="cart__left__header__select">
              <p>Lọc theo:</p>
              <select name="" id="">
                <option value="">Giá</option>
                <option value="">Số lượng</option>
                <option value="">Tên</option>
              </select>
            </div>
          </div>
          <div
            className={`cart__left__product ${
              isExpanded ? "expanded" : "collapsed"
            }`}
          >
            {dataProduct.map((item) => (
              <div className="cart__left__product__item">
                <div className="cart__left__product__item__left">
                  <div>
                    <input type="checkbox" />
                  </div>
                  <img src={item.img} alt="" />
                  <div className="cart__left__product__item__left__descreption">
                    <p>
                      <strong>{item.descreption}</strong>
                    </p>
                    <p>{item.useFor}</p>
                  </div>
                </div>
                <div className="cart__left__product__item__right">
                  <span>
                    <strong>2</strong>
                  </span>
                  <p>$ {item.price}</p>
                  <span class="material-symbols-outlined">delete</span>
                </div>
              </div>
            ))}
          </div>
          <div className="cart__left__btnShow" onClick={toggleDescription}>
            <p>{isExpanded ? "Show Less" : "Show More"}</p>
            {isExpanded ? (
              <span class="material-symbols-outlined">keyboard_arrow_up</span>
            ) : (
              <span class="material-symbols-outlined">keyboard_arrow_down</span>
            )}
          </div>
        </div>
        <div className="cart__right">
          <div className="cart__right__header">
            <p>Thông tin thanh toán</p>
          </div>
          <div className="cart__right__pay">
            <p>Các thẻ đã liên kết</p>
            <div className="cart__right__pay__allItem">
              {dataCard.map((item) => (
                <div className="cart__right__pay__allItem__item">
                  <img src={item.img} alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className="cart__right__input">
            <input
              type="text"
              className="cart__right__input__top"
              placeholder="Nhập tên của bạn..."
            />
            <input
              type="text"
              className="cart__right__input__middle"
              placeholder="Số tài khoản..."
            />
            <div className="cart__right__input__bottom">
              <input type="text" placeholder="Địa chỉ...." />
              <input type="text" placeholder="Chi tiết..." />
            </div>
          </div>
          <div className="cart__right__total">
            <div className="cart__right__total__item">
              <p>Tổng số sản phẩm</p>
              <p>9</p>
            </div>
            <div className="cart__right__total__item">
              <p>Tổng tiền sản phẩm</p>
              <p>$9999</p>
            </div>
            <div className="cart__right__total__item">
              <p>Phí vận chuyển</p>
              <p>$9</p>
            </div>
            <div className="cart__right__total__item">
              <p>Tổng thanh toán</p>
              <p>$ 9999</p>
            </div>
          </div>
          <div className="cart__right__button">
            <p>$99898</p>
            <p>Thanh toán</p>
          </div>
        </div>
      </div>
    </>
  );
}
