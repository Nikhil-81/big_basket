import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { getProducts } from "../../Redux/products/actions";
import { ProductCard } from "../ProductCard";
const responsiveSettings = [
  {
    breakpoint: 900,
    settings: {
      slidesToShow: 6,
      slidesToScroll: 6,
    },
  },
  {
    breakpoint: 700,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
    },
  },
];
const ProductSlider = () => {
  const dispatch = useDispatch();
  let product = useSelector((store) => store.products.products);

  useEffect(() => {
    dispatch(getProducts("?sort=price&order=asc"));
  }, [product.length, dispatch]);
  return (
    <div style={{width:"83%",margin:"auto"}}>
      <Slide
        slidesToScroll={2}
        slidesToShow={2}
        indicators={false}
        responsive={responsiveSettings}
      >
        {product &&
          product.map((el, index) => {
            if (index < 24)
              return (
                <div
                  key={index}
                  style={{
                    height: "auto",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {" "}
                  <ProductCard item={el} />
                </div>
              );
          })}
      </Slide>
    </div>
  );
};

export default ProductSlider;
