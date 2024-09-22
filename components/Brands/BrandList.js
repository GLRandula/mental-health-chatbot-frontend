"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

import brandImg1 from "../../public/images/brand/cloud2.png";
import brandImg2 from "../../public/images/brand/chatgpt.png";
import brandImg3 from "../../public/images/brand/langchain.png";
import brandImg4 from "../../public/images/brand/postgre.png";
import brandImg5 from "../../public/images/brand/redis.png";
import brandImg6 from "../../public/images/brand/crewai.png";

const BrandList = () => {
  var settings = {
    centerMode: true,
    draggable: false,
    centerPadding: "100px",
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider
        {...settings}
        className="brand-list brand-style-2 slider-brand slider-brand-activation" 
      >
        <li className="slide-single-layout">
          <Link href="#" style={{ marginLeft: '20px' }}>
            <Image
              src={brandImg1}
              width={180}
              height="auto"
              alt="Brand Image"
            />
          </Link>
        </li>
        <li className="slide-single-layout">
          <Link href="#" style={{ marginLeft: '20px' }}>
            <Image
              src={brandImg2}
              width={300}
              height="auto"
              alt="Brand Image"
            />
          </Link>
        </li>
        <li className="slide-single-layout">
          <Link href="#" style={{ marginLeft: '20px' }}>
            <Image
              src={brandImg3}
              width={300}
              height="auto"
              alt="Brand Image"
            />
          </Link>
        </li>
        <li className="slide-single-layout">
          <Link href="#" style={{ marginLeft: '20px' }}>
            <Image
              src={brandImg4}
              width={300}
              height="auto"
              alt="Brand Image"
            />
          </Link>
        </li>
        {/* <li className="slide-single-layout">
          <Link href="#" style={{ marginLeft: '20px' }}>
            <Image
              src={brandImg5}
              width={200}
              height="auto"
              alt="Brand Image"
            />
          </Link>
        </li> */}
        <li className="slide-single-layout">
          <Link href="#" style={{ marginLeft: '20px' }}>
            <Image
              src={brandImg6}
              width={200}
              height="auto"
              alt="Brand Image"
            />
          </Link>
        </li>
      </Slider>
    </>
  );
};

export default BrandList;
