import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import "./ProductSection.scss";
import { getCategoryApi } from "../../api/categoryApi";

export default function ProductSection() {
  const [categories, setCategories] = useState([]);
  const [infinite, setInfinite] = useState(false);
  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategoryApi();
      setCategories(data.data);
      // Cập nhật giá trị infinite cho từng category
      data.data.forEach((category) => {
        if (category.products.length > 4) {
          setInfinite(true);
        } else {
          setInfinite(false);
        }
      });
    };
    fetchCategories();
  }, []);
  
  const data = []
  const newCatecoguData = categories.map((category)=>{
    if (category.products?.length > 0) {
      data.push(category)
    }
  })
  
  
  return (
    <div className="container-product-list">
      {data?.map((category) => {
        // Đặt giá trị cho infinite dựa trên độ dài của category.products
        const isCategoryInfinite = category.products.length > 4;

        const settings = {
          dots: true,
          infinite: isCategoryInfinite,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 2,
          nextArrow: <NextArrow />, // Nút chuyển tiếp qua phải
          prevArrow: <PrevArrow />, // Nút chuyển tiếp qua trái
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: category.products.length > 3 ? 3 : 1,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: category.products.length > 2 ? 2 : 1,
              },
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        };

        return (
          <React.Fragment key={category.id}>
            <div className="category-title-container">
              <h2 className="category-title">{category.name}</h2>
            </div>
            <div className="product-section">
              <div className="banner">
                <img
                  src={
                    category.image ||
                    "https://cdn.shopify.com/s/files/1/0603/7232/0427/files/mercado_banner425x580_1.jpg?v=1633528240"
                  }
                  alt={`${category.name} Banner`}
                />
              </div>
              <div className="product-slider">
                <Slider {...settings}>
                  {category.products.map((product) => (
                    <div key={product.id} className="product-item">
                      <img
                        src={product.image || "https://via.placeholder.com/150"}
                        alt={product.name}
                      />
                      <p>{product.name}</p>
                      <p>{product.price}</p>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}


function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow next-arrow`}
      style={{ ...style }}
      onClick={onClick}
    >
      &#9654; {/* Hoặc bạn có thể dùng icon khác */}
    </div>
  );
}

// Component cho nút Prev Arrow
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow prev-arrow`}
      style={{ ...style }}
      onClick={onClick}
    >
      &#9664; {/* Hoặc bạn có thể dùng icon khác */}
    </div>
  );
}
