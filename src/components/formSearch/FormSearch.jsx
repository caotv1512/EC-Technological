import React from "react";
import "./FormSearch.scss";
import arrivals from "../../../public/assets/imgs/categories/products.png";
import computer from "../../../public/assets/imgs/categories/computer.png";
import photography from "../../../public/assets/imgs/categories/smartphone.png";
import mobile from "../../../public/assets/imgs/categories/products.png";
import tables from "../../../public/assets/imgs/categories/graphic-tablet.png";
import television from "../../../public/assets/imgs/categories/television.png";
import entertaiment from "../../../public/assets/imgs/categories/gamepad.png";
import watch from "../../../public/assets/imgs/categories/smartwatch.png";
import lighting from "../../../public/assets/imgs/categories/desk-lamp.png";
import drones from "../../../public/assets/imgs/categories/drone.png";
import logo from "../../../public/assets/imgs/logo/mercado-suppermarket-store-logo-1633487728.jpg";
import { Link, useNavigate } from "react-router-dom";
export default function FormSearch() {
  const navigate = useNavigate();
  const dataCategory = [
    {
      id: 1,
      img: arrivals,
      title: "Smart",
    },
    {
      id: 2,
      img: computer,
      title: "Computer",
    },
    {
      id: 3,
      img: photography,
      title: "Watch",
    },
    {
      id: 4,
      img: mobile,
      title: "Mobile",
    },
    {
      id: 5,
      img: tables,
      title: "Tables",
    },
    {
      id: 6,
      img: television,
      title: "Television",
    },
    {
      id: 7,
      img: entertaiment,
      title: "Entertaiment",
    },
    {
      id: 8,
      img: watch,
      title: "Smart Watch",
    },
    {
      id: 8,
      img: lighting,
      title: "Lighting",
    },
    {
      id: 9,
      img: drones,
      title: "Drones",
    },
  ];
  const dataFashion = [
    {
      id: 1,
      title: "Poly",
      span: "polyline",
    },
    {
      id: 2,
      title: "Cisco",
      span: "diamond",
    },
    {
      id: 3,
      title: "Aver",
      span: "android",
    },
    {
      id: 4,
      title: "Jabra",
      span: "logo_dev",
    },
    {
      id: 5,
      title: "Maxhub",
      span: "token",
    },
    ,
    {
      id: 6,
      title: "Logitech",
      span: "settings_heart",
    },
    ,
    {
      id: 7,
      title: "North Bayou",
      span: "cruelty_free",
    },
  ];
  const dataProductNav = [
    {
      id: 1,
      title: "Hội nghị trực tuyến",
      span: "groups_2",
    },
    {
      id: 2,
      title: "Camera hội nghị USB",
      span: "usb",
    },
    {
      id: 3,
      title: "Loa mic hội nghị",
      span: "mic",
    },
    {
      id: 4,
      title: "Điện thoại hội nghị",
      span: "phone_iphone",
    },
    {
      id: 5,
      title: "Giá treo thiết bị hội nghị",
      span: "qr_code_2_add",
    },
  ];
  const dataService = [
    {
      id: 1,
      title: "Dịch vụ cho thuê thiết bị",
      span: "dynamic_form",
    },
    {
      id: 2,
      title: "Dịch vụ sửa chữa thiết bị",
      span: "swipe_vertical",
    },
    {
      id: 3,
      title: "Dịch vụ bảo hành, bảo trì",
      span: "construction",
    },
  ];
  return (
    <>
      <div className="formSearch__container">
        <div className="formSearch--left">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="formSearch__middle">
          <span className="material-symbols-outlined">search</span>
          <input type="text" placeholder="Tìm kiếm ngay" />
          <button className="btnSearch">Tìm kiếm</button>
        </div>
        <div className="formSearch__right">
          <div className="formSearch--right__account">
            <div className="formSearch--right__account__img">
              <span className="material-symbols-outlined">person</span>
            </div>
            <Link to={"auth/dangnhap"}>
              <div className="formSearch--right__account__text">
                <p className="text__account">Tài khoản</p>
                <p className="text__signin">Đăng nhập</p>
              </div>
            </Link>
          </div>
          <Link to={"/cart"}>
            <div className="formSearch--right__cart">
              <div className="formSearch--right__account__img">
                <span className="material-symbols-outlined">shopping_cart</span>
                <div className="formSearch--right__account__img__number">0</div>
              </div>
              <div className="formSearch--right__account__text">
                <p className="text__account">Giỏ hàng</p>
                <p className="text__signin">$0.01</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="homePage__nav">
        <div className="homePage__nav__category" onClick={() => navigate("/")}>
          <span className="material-symbols-outlined">home</span>
          <p>Trang chủ</p>
          {/* <div className="homePage__nav__category__hover">
            <ul>
              {dataCategory.map((item) => (
                <Link to={`/${item.title}`}>
                  <li key={item.id}>
                    <img src={item.img} alt="" />
                    <p>{item.title}</p>
                  </li>
                </Link>
              ))}
            </ul>
          </div> */}
        </div>

        <div className="homePage__nav__item">
          <ul>
            <li className="homePage__nav__item__fashion">
              <p>Thương hiệu</p>
              <div className="homePage__nav__item__fashion__hover">
                <ul>
                  {dataFashion.map((item) => (
                    <li key={item.id}>
                      <span className="material-symbols-outlined">
                        {item.span}
                      </span>
                      <p>{item.title}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="homePage__nav__item__product">
              <p>Sản phẩm</p>
              <div className="homePage__nav__item__product__hover">
                <ul>
                  {dataProductNav.map((item) => (
                    <li key={item.id}>
                      <span className="material-symbols-outlined">
                        {item.span}
                      </span>
                      <p>{item.title}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="homePage__nav__item__service">
              <p>Dịch vụ</p>
              <div className="homePage__nav__item__service__hover">
                <ul>
                  {dataService.map((item) => (
                    <li key={item.id}>
                      <span className="material-symbols-outlined">
                        {item.span}
                      </span>
                      <p>{item.title}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="homePage__nav__content">
          <span className="material-symbols-outlined">confirmation_number</span>
          <p>Săn ngay voucher giảm tới 30%</p>
        </div>
      </div>
    </>
  );
}
