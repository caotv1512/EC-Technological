import React, { useEffect, useState } from "react";
import "./HomePage.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { Pagination } from "antd";
import SimpleSlider from "../../components/slider/SimpleSlider";
import banner from "../../../public/assets/imgs/banner/mercado_banner573x998.jpg";
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
import { Rating } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { getProductApi } from "../../api/productApis";
export default function HomePage() {
  const navigate = useNavigate();
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

  const bestSeller = dataProduct
    ? dataProduct.map((product) => {
        return {
          ...product,
          imgHover: product.images[1]?.url,
        };
      })
    : [];

  const groupedProducts = bestSeller?.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});
  const categoriesToDisplay = Object.keys(groupedProducts).slice(0, 3);
  const dataAbout = [
    {
      id: 1,
      img: about1,
      title: "Miễn phí ship",
      content: "Nội thành HN",
    },
    {
      id: 2,
      img: about2,
      title: "3 - 5 năm",
      content: "Bảo hành",
    },
    {
      id: 3,
      img: about3,
      title: "Thanh toán",
      content: "Nhận- Kiểm hàng - Thanh toán",
    },
  ];

  return (
    <>
      <div className="homePage__container">
        <div className="homePage__body">
          <div className="">
            <div className="">
              <SimpleSlider></SimpleSlider>
            </div>
          </div>
          <div className="homePage__body__brand" data-aos="fade-up">
            <SliderBrand></SliderBrand>
          </div>
          <div className="homePage__body__hotSale" data-aos="fade-up">
            <div className="homePage__body__hotSale--left">
              <img src={banner} alt="" />
            </div>
            <div className="homePage__body__hotSale--right">
              <div className="homePage__body__hotSale--right__nav">
                <ul>
                  <li>Danh sách sản phẩm</li>
                </ul>
                <Link to={"/product-list"}>
                <p className="homePage__body__hotSale--right__nav__view">
                  View all
                </p>
                 </Link>
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
                {currentData.map((product) => (
                  <div
                    className="homePage__body__hotSale--rightResponsive__product__item"
                    key={product.id}
                    data-aos="fade-up"
                  >
                    <div className="homePage__body__hotSale--rightResponsive__product__item__img">
                      <img src={product.images[0].url} alt="" />
                    </div>
                    <div className="homePage__body__hotSale--rightResponsive__product__item__hover">
                      <img src={product.imgHover} alt="" />
                    </div>
                    <p className="homePage__body__hotSale--rightResponsive__product__item__title">
                      {product.name}.
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
            {categoriesToDisplay.map((category) => (
              <div className="homePage__body__BNT__category BTN" key={category}>
                <div className="BTN__header">
                  <p className="BTN__header__bestsellerr">{category}</p>
                  <Link to={"/product-list"}><p className="BTN__header__viewall"> View all</p> </Link>
                  
                </div>
                <div className="BTN__product">
                  {groupedProducts[category].slice(0, 3).map((product) => (
                    <div
                      className="BTN__product__item"
                      key={product.id}
                      data-aos="fade-up"
                      onClick={() => navigate(`/productDetail/${product.id}`)}
                      style={{ cursor: "pointer" }} // Hiển thị con trỏ khi di chuột qua
                    >
                      <img src={product.images[0].url} alt="" />
                      <div className="BTN__product__item--right">
                        <p className="BTN__product__item--right__title">
                          {product.name}
                        </p>
                        <p className="BTN__product__item--right__description">
                          {product.description}
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
            ))}
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
              Để lại SĐT của bạn để được liên hệ tư vấn
            </p>
            <div className="homePage__body__contact--right">
              <input type="text" placeholder="Nhập SĐT của bạn" />
              <button>Đăng ký</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
