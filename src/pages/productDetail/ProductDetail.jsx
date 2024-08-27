import React, { useEffect, useState } from "react";
import "./ProductDetail.scss";
import arrivals from "../../../public/assets/imgs/categories/products.png";
import computer from "../../../public/assets/imgs/categories/computer.png";
import photography from "../../../public/assets/imgs/categories/smartphone.png";
import mobile from "../../../public/assets/imgs/categories/products.png";
import tables from "../../../public/assets/imgs/categories/graphic-tablet.png";
import television from "../../../public/assets/imgs/categories/television.png";
import entertaiment from "../../../public/assets/imgs/categories/gamepad.png";
import watch from "../../../public/assets/imgs/categories/smartwatch.png";
import audio from "../../../public/assets/imgs/categories/speaker.png";
import lighting from "../../../public/assets/imgs/categories/desk-lamp.png";
import drones from "../../../public/assets/imgs/categories/drone.png";
import product1 from "../../../public/assets/imgs/product/brown-bear-printed-sweater.jpg";
import product2 from "../../../public/assets/imgs/product/hummingbird-printed-t-shirt.jpg";
import security1 from "../../../public/assets/imgs/security/carrier.svg";
import security2 from "../../../public/assets/imgs/security/hotline.svg";
import security3 from "../../../public/assets/imgs/security/security.svg";
import productDetail1 from "../../../public/assets/imgs/productDetail/market_detail_1.jpg";
import productDetail2 from "../../../public/assets/imgs/productDetail/market_detail_2.png";
import productDetail3 from "../../../public/assets/imgs/productDetail/market_detail_3.png";
import productDetail4 from "../../../public/assets/imgs/productDetail/market_detail_4.png";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { InputNumber, Space } from "antd";
import { useParams } from "react-router-dom";
import { getProductByIdApi } from "../../api/productApis";

export default function ProductDetail() {
  const { id } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isExpanded, setIsExpanded] = useState(true);
  const [product, setProduct] = useState([]);


  console.log(id);
  
  const getProduct = async () => {
    const res = await getProductByIdApi(id);
    console.log(res, 'getProductByIdApi');
    setProduct(res.data);
  };
  useEffect(() => {
    getProduct();
  }, []);
  
  const images = [
    {
      id: 1,
      img: product1,
    },
    {
      id: 2,
      img: product2,
    },
    {
      id: 3,
      img: product1,
    },
    {
      id: 4,
      img: product1,
    },
  ];

  const security = [
    {
      id: 1,
      title: "Security policy(edit with the Customer Reassurance module)",
      img: security3,
    },
    {
      id: 2,
      title: "Security policy(edit with the Customer Reassurance module)",
      img: security1,
    },
    {
      id: 3,
      title: "Security policy(edit with the Customer Reassurance module)",
      img: security2,
    },
  ];
  const dataNavDescription = [
    {
      id: 1,
      title: "Description",
    },
    {
      id: 2,
      title: "Products Details",
    },
    {
      id: 3,
      title: "Reviews",
    },
  ];

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };
  const onChange = (value) => {
    console.log("changed", value);
  };
  return (
    <>
      <div className="productDetail__container">
        <div className="productDetail__body">
          <div className="productDetail__body__linkto">
            <p>Home</p>
            <span class="material-symbols-outlined">chevron_right</span>
            <p>Sản phẩm</p>
            <span class="material-symbols-outlined">chevron_right</span>
            <p>Chi tiết sản phẩm</p>
            <span class="material-symbols-outlined">chevron_right</span>
            <p>{product.name}</p>
          </div>
          <div className="productDetail__body__main">
            <div className="productDetail__body__main--left">
              <div className="productDetail__body__main--left__imgTop">
                <Swiper
                  style={{
                    background: "white",
                  }}
                  loop={true}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                >
                  {product.images?.map((image) => (
                    <SwiperSlide key={image.id} className="mySwiper__Slide">
                      <img src={image.url} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="productDetail__body__main--left__imgBot">
                <Swiper
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  spaceBetween={5}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  {product.images?.map((image) => (
                    <SwiperSlide key={image.id}>
                      <img src={image.url} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className="productDetail__body__main--middle">
              <div className="productDetail__body__main--middle--top">
                <p className="productDetail__body__main--middle--top__name">
                 {product.name}
                </p>
                <p className="productDetail__body__main--middle--top__price">
                {product.price}
                </p>
                <div className="productDetail__body__main--middle--top__brand flex">
                  <p>
                    <strong>Thể loại:</strong>
                  </p>
                  <p>{product.category?.name}</p>
                </div>
                {/* <div className="productDetail__body__main--middle--top__reference flex">
                  <p>
                    <strong>Reference:</strong>
                  </p>
                  <p>demo_1</p>
                </div> */}
                <div className="productDetail__body__main--middle--top__stock flex">
                  <p>
                    <strong>Số lượng:</strong>
                  </p>
                  <p>{product.stock}</p>
                </div>
                <p className="productDetail__body__main--middle--top__description">
                {product.description}
                </p>

              </div>
              <div className="productDetail__body__main--middle--middle">
                <div className="productDetail__body__main--middle--middle__quantity">
                  <InputNumber
                    size="large"
                    min={1}
                    max={100000}
                    defaultValue={1}
                    onChange={onChange}
                  />
                </div>
                <div
                  className="productDetail__body__main--middle--middle__addToCart"
                  onClick={() => {
                    console.log("CMMMMMM");
                    alert("Bạn có muốn gọi đến số này không?");
                    window.open = "tel:+1234567890";
                    window.location.href = "tel:+0327627261";
                  }}
                  style={{ cursor: "pointer" }} // Giúp hiển thị con trỏ khi di chuột qua
                >
                  <span className="material-symbols-outlined">phone</span>
                  <p>Liên hệ</p>
                </div>
                <div className="productDetail__body__main--middle--middle__wishList">
                  <span className="material-symbols-outlined">favorite</span>
                </div>
              </div>

              <div className="productDetail__body__main--middle--bottom">
                <div className="productDetail__body__main--middle--bottom__share flex">
                  <span className="material-symbols-outlined">share</span>
                  <p>Share this</p>
                </div>
                <div className="productDetail__body__main--middle--bottom__print flex">
                  <span className="material-symbols-outlined">print</span>
                  <p>Print</p>
                </div>
                <div className="productDetail__body__main--middle--bottom__categories flex">
                  <span className="material-symbols-outlined">edit</span>
                  <p>Categories: Shop, Computer& Laptop, Desktop</p>
                </div>
                <div className="productDetail__body__main--middle--bottom__tag flex">
                  <span className="material-symbols-outlined">bookmark</span>
                  <p>Tags</p>
                </div>
              </div>
            </div>
            <div className="productDetail__body__main--right">
              {security.map((item) => (
                <div
                  className="productDetail__body__main--right__item"
                  key={item.id}
                >
                  <img src={item.img} alt="" />
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`productDetail__body__description ${
              isExpanded ? "expanded" : "collapsed"
            }`}
          >
            <div className="productDetail__body__description__nav">
              {dataNavDescription.map((item) => (
                <div
                  className="productDetail__body__description__nav--item"
                  key={item.id}
                >
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
            <div className="productDetail__body__description__content">
              <p className="productDetail__body__description__content__text">
                Designed by Hans J. Wegner in 1949 as one of the first models
                created especially for Carl Hansen & Son, and produced since
                1950. The last of a series of chairs wegner designed based on
                inspiration from antique Chinese armchairs. The gently rounded
                top together with the back and seat offers a variety of
                comfortable seating positions,ideal for both long visits to the
                dining table and relaxed lounging. The standard passage, used
                since the 1500s. A light chair, easy to move around the dining
                table and about the room. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit
                amet conse ctetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
              <div className="productDetail__body__description__content__img">
                <img src={productDetail1} alt="" />
                <p className="productDetail__body__description__content__img__h3">
                  <strong>
                    Get 30% Daily Cash <br /> Back with Membership Card.
                  </strong>
                </p>
                <p className="productDetail__body__description__content__img__text">
                  A new collection of lounge furniture, occasional tables and a
                  stool by Edward Barber & Jay Osgerby offers a relaxed,
                  contemporary attitude toward interior design. The lounge
                  furniture includes four individualized sized sofas, and three
                  complementary ottomans. Available in a range of upholstery
                  fabrics and leathers, the lounge furniture is distinguished by
                  stitched seams that reinforce its architectural profile,
                  softened by the curvature of cushions on each face.
                </p>
                <div className="productDetail__body__description__content__img__img">
                  <img src={productDetail2} alt="" />
                </div>
                <img src={productDetail3} alt="" />
                <img
                  className="productDetail__body__description__content__img__imgLine"
                  src={productDetail4}
                  alt=""
                />
                <p className="productDetail__body__description__content__text">
                  Designed by Puik in 1949 as one of the first models created
                  especially for Carl Hansen & Son, and produced since 1950. The
                  last of a series of chairs wegner designed based on
                  inspiration from antique chinese armchairs. The gently rounded
                  top together with the back and seat offers a variety of
                  comfortable seating positions,ideal for both long visits to
                  the dining table and relaxed lounging. A light chair easy to
                  move around the dining table and about the room. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla. Section 1.10.32 of "de Finibus Bonorum
                  et Malorum", written by Cicero in 45 BC. Sound of Marshall,
                  unplugs the chords, and takes the show on the road. Weighing
                  in under 7 pounds, the Kilburn is a lightweight piece of
                  vintage styled engineering. Setting the bar as one of the
                  loudest speakers in its class, the Kilburn is a compact,
                  stout-hearted hero with a well-balanced audio which boasts a
                  clear midrange and extended highs for a sound that is both
                  articulate and pronounced. The analogue knobs allow you to
                  fine tune the controls to your personal preferences while the
                  guitar-influenced leather strap enables easy and stylish
                  travel.
                </p>
              </div>
            </div>
          </div>
          <div
            className="productDetail__body__btnShow"
            onClick={toggleDescription}
          >
            <p>{isExpanded ? "Show Less" : "Show More"}</p>
            {isExpanded ? (
              <span class="material-symbols-outlined">keyboard_arrow_up</span>
            ) : (
              <span class="material-symbols-outlined">keyboard_arrow_down</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
