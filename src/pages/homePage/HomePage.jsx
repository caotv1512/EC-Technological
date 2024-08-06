import React, { useEffect, useState } from "react";
import "./HomePage.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { Pagination } from "antd";
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
import SimpleSlider from "../../components/slider/SimpleSlider";
import banner from "../../../public/assets/imgs/banner/mercado_banner573x998.jpg";
import product from "../../../public/assets/imgs/product/brown-bear-printed-sweater.jpg";
import productHover from "../../../public/assets/imgs/product/hummingbird-printed-t-shirt.jpg";
import superSale1 from "../../../public/assets/imgs/superSale/mercado_banner573x320_2.jpg";
import superSale2 from "../../../public/assets/imgs/superSale/mercado_banner573x320_3.jpg";
import superSale3 from "../../../public/assets/imgs/superSale/mercado_banner573x320.jpg";
import SliderBrand from "../../components/slider/sliderBrand/SliderBrand";
import SliderComment from "../../components/slider/slideComment/SliderComment";
import bannerComment from "../../../public/assets/imgs/comment/mercado_banner870x280_43b1f575-35df-43a3-b23c-0c3aafe636a6.jpg";
import deal from "../../../public/assets/imgs/deal/mercado_banner1760x320.jpg";
import about1 from "../../../public/assets/imgs/about/mercado_support1.png";
import about2 from "../../../public/assets/imgs/about/mercado_support2.png";
import about3 from "../../../public/assets/imgs/about/mercado_support3.png";
import about4 from "../../../public/assets/imgs/about/mercado_support4.png";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { getProductApi } from "../../api/productApis";
export default function HomePage() {
  const [dataProduct, setDataProduct] = useState([]);
  // phan trang
  const pageSize = 6;
  const [current, setCurrent] = useState(1);
  const handlePageChange = (page) => {
    setCurrent(page);
  };
  const currentData = dataProduct.slice(
    (current - 1) * pageSize,
    current * pageSize
  );
  // slider
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  //het slider
  //aos
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  // du lieu san pham
  const getProduct = async () => {
    const res = await getProductApi();
    setDataProduct(res.data);
  };
  useEffect(() => {
    getProduct();
  }, []);

  // const dataProduct = [
  //   {
  //     id: 1,
  //     img: product,
  //     imgHover: productHover,
  //     descreption: "Samsung Galaxy S21 Dual-SIM 128GB 5G Smartphone",
  //     useFor: "Studio Design",
  //     price: "100",
  //   },
  //   {
  //     id: 2,
  //     imgHover: productHover,
  //     img: product,
  //     descreption: "Samsung Galaxy S21 Dual-SIM 128GB 5G Smartphone",
  //     useFor: "Graphic Corner",
  //     price: "200",
  //   },
  //   {
  //     id: 3,
  //     imgHover: productHover,
  //     img: product,
  //     useFor: "Studio Design",
  //     descreption: "Samsung Galaxy S21 Dual-SIM 128GB 5G Smartphone",
  //     price: "100",
  //   },
  //   {
  //     id: 4,
  //     imgHover: productHover,
  //     img: product,
  //     useFor: "Graphic Corner",
  //     descreption: "Samsung Galaxy S21 Dual-SIM 128GB 5G Smartphone",
  //     price: "200",
  //   },
  //   {
  //     id: 5,
  //     imgHover: productHover,
  //     img: product,
  //     useFor: "Studio Design",
  //     descreption: "Samsung Galaxy S21 Dual-SIM 128GB 5G Smartphone",
  //     price: "100",
  //   },
  //   {
  //     id: 6,
  //     imgHover: productHover,
  //     img: product,
  //     useFor: "Graphic Corner",
  //     descreption: "Samsung Galaxy S21 Dual-SIM 128GB 5G Smartphone",
  //     price: "200",
  //   },
  // ];
  const dataProductRespon = [
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
  ];
  const bestSeller = [
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
  ];
  const dataAbout = [
    {
      id: 1,
      img: about1,
      title: "Free Delivery",
      content: "from $100",
    },
    {
      id: 2,
      img: about2,
      title: "365 days",
      content: "for free return",
    },
    {
      id: 3,
      img: about3,
      title: "Payment",
      content: "secure system",
    },
    {
      id: 4,
      img: about4,
      title: "Only Best",
      content: "brands",
    },
  ];
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
      title: "Photography",
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
      <div className="homePage__container">
        <div className="homePage__body">
          <div className="homePage__body__banner">
            <div className="homePage__body__banner--right">
              <SimpleSlider></SimpleSlider>
            </div>
          </div>
          {/* <div className="homePage__body__brand" data-aos="fade-up">
            <SliderBrand></SliderBrand>
          </div> */}
          <div className="homePage__body__hotSale" data-aos="fade-up">
            <div className="homePage__body__hotSale--left">
              <img src={banner} alt="" />
            </div>
            <div className="homePage__body__hotSale--right">
              <div className="homePage__body__hotSale--right__nav">
                <ul>
                  <li>Featured</li>
                  <li>On Sale</li>
                  <li>Top Rated</li>
                </ul>
                <p className="homePage__body__hotSale--right__nav__view">
                  View all
                </p>
              </div>
              <div className="homePage__body__hotSale--right__product">
                {currentData.map((product) => (
                  <Link to={"/productDetail/" + product.id}>
                    <div
                      className="homePage__body__hotSale--right__product__item"
                      key={product.id}
                      data-aos="fade-up"
                    >
                      <div className="homePage__body__hotSale--right__product__item__img">
                        <img src={product.images[0]?.url} alt="" />
                      </div>
                      <div className="homePage__body__hotSale--right__product__item__hover">
                        <img src={product.images[0]?.url} alt="" />
                        <div className="homePage__body__hotSale--right__product__item__hover__allicon">
                          <div className="homePage__body__hotSale--right__product__item__hover__wishList divIcon">
                            <span className="material-symbols-outlined">
                              favorite
                            </span>
                          </div>
                          <div className="homePage__body__hotSale--right__product__item__hover__eye divIcon">
                            <span className="material-symbols-outlined">
                              visibility
                            </span>
                          </div>
                          <div className="homePage__body__hotSale--right__product__item__hover__compare divIcon">
                            <span className="material-symbols-outlined">
                              compare_arrows
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="homePage__body__hotSale--right__product__item__title">
                        {product.category}.
                      </p>
                      <p className="homePage__body__hotSale--right__product__item__description">
                        {product.name}
                      </p>
                      <div className="homePage__body__hotSale--right__product__item__rate">
                        <Rating name="read-only" value={5} readOnly />
                      </div>
                      <div className="homePage__body__hotSale--right__product__item__price">
                        <p className="homePage__body__hotSale--right__product__item__price__number">
                          $ {product.price}
                        </p>
                        <div className="homePage__body__hotSale--right__product__item__price__addcart">
                          <span className="material-symbols-outlined">
                            add_shopping_cart
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <Pagination
                current={current}
                pageSize={pageSize}
                total={dataProduct.length}
                onChange={handlePageChange}
                align="center"
                style={{ marginTop: "20px" }}
              />
            </div>
            <div className="homePage__body__hotSale--rightResponsive">
              <div className="homePage__body__hotSale--rightResponsive__product">
                {dataProductRespon.map((product) => (
                  <div
                    className="homePage__body__hotSale--rightResponsive__product__item"
                    key={product.id}
                    data-aos="fade-up"
                  >
                    <div className="homePage__body__hotSale--rightResponsive__product__item__img">
                      <img src={product.img} alt="" />
                    </div>
                    <div className="homePage__body__hotSale--rightResponsive__product__item__hover">
                      <img src={product.imgHover} alt="" />
                      <div className="homePage__body__hotSale--rightResponsive__product__item__hover__allicon">
                        <div className="homePage__body__hotSale--rightResponsive__product__item__hover__wishList divIcon">
                          <span className="material-symbols-outlined">
                            favorite
                          </span>
                        </div>
                        <div className="homePage__body__hotSale--rightResponsive__product__item__hover__eye divIcon">
                          <span className="material-symbols-outlined">
                            visibility
                          </span>
                        </div>
                        <div className="homePage__body__hotSale--rightResponsive__product__item__hover__compare divIcon">
                          <span className="material-symbols-outlined">
                            compare_arrows
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="homePage__body__hotSale--rightResponsive__product__item__title">
                      {product.useFor}.
                    </p>
                    <p className="homePage__body__hotSale--rightResponsive__product__item__description">
                      {product.descreption}
                    </p>
                    <div className="homePage__body__hotSale--rightResponsive__product__item__rate">
                      <Rating name="read-only" value={3} readOnly />
                    </div>
                    <div className="homePage__body__hotSale--rightResponsive__product__item__price">
                      <p className="homePage__body__hotSale--rightResponsive__product__item__price__number">
                        $ {product.price}
                      </p>
                      <div className="homePage__body__hotSale--rightResponsive__product__item__price__addcart">
                        <span className="material-symbols-outlined">
                          add_shopping_cart
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="homePage__body__superSale" data-aos="fade-up">
            <div className="homePage__body__superSale--img">
              <img src={superSale1} alt="" />
            </div>
            <div className="homePage__body__superSale--img">
              <img src={superSale2} alt="" />
            </div>
            <div className="homePage__body__superSale--img">
              <img src={superSale3} alt="" />
            </div>
          </div>
          <div className="homePage__body__BNT" data-aos="fade-up">
            <div className="homePage__body__BNT__Bestsellerr BTN">
              <div className="BTN__header">
                <p className="BTN__header__bestsellerr">Bestsellerr</p>
                <p className="BTN__header__viewall">View all</p>
              </div>
              <div className="BTN__product">
                {bestSeller.map((product) => (
                  <div
                    className="BTN__product__item"
                    key={product.id}
                    data-aos="fade-up"
                  >
                    <img src={product.img} alt="" />
                    <div className="BTN__product__item--right">
                      <p className="BTN__product__item--right__title">
                        {product.useFor}
                      </p>
                      <p className="BTN__product__item--right__description">
                        {product.descreption}
                      </p>
                      <div className="BTN__product__item--right__rate">
                        <Rating name="read-only" value={3} readOnly />
                      </div>
                      <div className="BTN__product__item--right__priceCart">
                        <p className="BTN__product__item--right__priceCart__price">
                          $ {product.price}
                        </p>
                        <div className="BTN__product__item--right__priceCart__cart">
                          <span className="material-symbols-outlined">
                            add_shopping_cart
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="homePage__body__BNT__New BTN">
              <div className="BTN__header">
                <p className="BTN__header__bestsellerr">New arrivals</p>
                <p className="BTN__header__viewall">View all</p>
              </div>
              <div className="BTN__product">
                {bestSeller.map((product) => (
                  <div
                    className="BTN__product__item"
                    key={product.id}
                    data-aos="fade-up"
                  >
                    <img src={product.img} alt="" />
                    <div className="BTN__product__item--right">
                      <p className="BTN__product__item--right__title">
                        {product.useFor}
                      </p>
                      <p className="BTN__product__item--right__description">
                        {product.descreption}
                      </p>
                      <div>
                        <Rating name="read-only" value={3} readOnly />
                      </div>
                      <div className="BTN__product__item--right__priceCart">
                        <p className="BTN__product__item--right__priceCart__price">
                          $ {product.price}
                        </p>
                        <div className="BTN__product__item--right__priceCart__cart">
                          <span class="material-symbols-outlined">
                            add_shopping_cart
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="homePage__body__BNT__Trending BTN">
              <div className="BTN__header">
                <p className="BTN__header__bestsellerr">Trending Products</p>
                <p className="BTN__header__viewall">View all</p>
              </div>
              <div className="BTN__product">
                {bestSeller.map((product) => (
                  <div
                    className="BTN__product__item"
                    key={product.id}
                    data-aos="fade-up"
                  >
                    <img src={product.img} alt="" />
                    <div className="BTN__product__item--right">
                      <p className="BTN__product__item--right__title">
                        {product.useFor}
                      </p>
                      <p className="BTN__product__item--right__description">
                        {product.descreption}
                      </p>
                      <div>
                        <Rating name="read-only" value={3} readOnly />
                      </div>
                      <div className="BTN__product__item--right__priceCart">
                        <p className="BTN__product__item--right__priceCart__price">
                          $ {product.price}
                        </p>
                        <div className="BTN__product__item--right__priceCart__cart">
                          <span class="material-symbols-outlined">
                            add_shopping_cart
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="homePage__body__comment" data-aos="fade-up">
            <SliderComment></SliderComment>
            <div className="homePage__body__comment__img">
              <img src={bannerComment} alt="" />
            </div>
          </div>
          <div className="homePage__body__deal">
            <div className="homePage__body__deal__top" data-aos="fade-up">
              <div className="homePage__body__deal__top__title">
                <p>Deal Of The Day</p>
              </div>
            </div>
            <div className="homePage__body__deal__bottom" data-aos="fade-up">
              <img src={deal} alt="" />
            </div>
          </div>
          <div className="homePage__body__about" data-aos="fade-up">
            {dataAbout.map((item) => (
              <div className="homePage__body__about__item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="homePage__body__about__item__right">
                  <p className="homePage__body__about__item__right__title">
                    {item.title}
                  </p>
                  <p className="homePage__body__about__item__right__content">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="homePage__body__contact" data-aos="fade-up">
            <p className="homePage__body__contact--left">
              Đăng nhập để gửi hỗ trợ
            </p>
            <p className="homePage__body__contact--middle">
              {" "}
              đăng ký để nhận thông tin mới nhất
            </p>
            <div className="homePage__body__contact--right">
              <input type="text" placeholder="Your email address" />
              <button>Đăng ký</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
