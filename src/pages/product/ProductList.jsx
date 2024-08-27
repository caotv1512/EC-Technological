import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import banner from "../../../public/assets/imgs/banner/mercado_banner573x998.jpg";
import { Pagination } from "antd";
import { AOS } from "aos";
import { getProductApi } from "../../api/productApis";
import { Rating } from "@mui/material";
import './ProductList.scss'

function ProductList() {
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

  //aos
    useEffect(() => {
      AOS?.init({ duration: 2000 });
    }, []);
  // du lieu san pham
  const getProduct = async () => {
    const res = await getProductApi();
    setDataProduct(res.data);
  };
  useEffect(() => {
    getProduct();
  }, []);
  console.log(currentData, "currentData");

  return (
    <div className="product__container">
      <div className="product__body">
      <h2>Product</h2>
        <div className="product__body__hotSale">
          <div>
            <img src={banner} alt="" />
          </div>
          <div className="product__body__hotSale--right">
            <div className="product__body__hotSale--right__product">
              {currentData.map((product) => (
                <Link to={"/productDetail/" + product.id}>
                  <div
                    className="product__body__hotSale--right__product__item"
                    key={product.id}
                    data-aos="fade-up"
                  >
                    <div className="product__body__hotSale--right__product__item__img">
                      <img src={product.images[0]?.url} alt="" />
                    </div>
                    <div className="product__body__hotSale--right__product__item__hover">
                      <img src={product.images[0]?.url} alt="" />
                      <div className="product__body__hotSale--right__product__item__hover__allicon">
                        <div className="product__body__hotSale--right__product__item__hover__wishList divIcon">
                          <span className="material-symbols-outlined">
                            favorite
                          </span>
                        </div>
                        <div className="product__body__hotSale--right__product__item__hover__eye divIcon">
                          <span className="material-symbols-outlined">
                            visibility
                          </span>
                        </div>
                        <div className="product__body__hotSale--right__product__item__hover__compare divIcon">
                          <span className="material-symbols-outlined">
                            compare_arrows
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="product__body__hotSale--right__product__item__title">
                      {product.category}.
                    </p>
                    <p className="product__body__hotSale--right__product__item__description">
                      {product.name}
                    </p>
                    <div className="product__body__hotSale--right__product__item__rate">
                      <Rating name="read-only" value={5} readOnly />
                    </div>
                    <div className="product__body__hotSale--right__product__item__price">
                      <p className="product__body__hotSale--right__product__item__price__number">
                        $ {product.price}
                      </p>
                      <div className="product__body__hotSale--right__product__item__price__addcart">
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
          <div className="product__body__hotSale--rightResponsive">
            <div className="product__body__hotSale--rightResponsive__product">
              {currentData.map((product) => (
                <div
                  className="product__body__hotSale--rightResponsive__product__item"
                  key={product.id}
                  data-aos="fade-up"
                >
                  <div className="product__body__hotSale--rightResponsive__product__item__img">
                    <img src={product.images[0].url} alt="" />
                  </div>
                  <div className="product__body__hotSale--rightResponsive__product__item__hover">
                    <img src={product.imgHover} alt="" />
                  </div>
                  <p className="product__body__hotSale--rightResponsive__product__item__title">
                    {product.name}.
                  </p>
                  <p className="product__body__hotSale--rightResponsive__product__item__description">
                    {product.descreption}
                  </p>
                  <div className="product__body__hotSale--rightResponsive__product__item__rate">
                    <Rating name="read-only" value={3} readOnly />
                  </div>
                  <div className="product__body__hotSale--rightResponsive__product__item__price">
                    <p className="product__body__hotSale--rightResponsive__product__item__price__number">
                      $ {product.price}
                    </p>
                    <div className="product__body__hotSale--rightResponsive__product__item__price__addcart">
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
      </div>
    </div>
  );
}

export default ProductList;
