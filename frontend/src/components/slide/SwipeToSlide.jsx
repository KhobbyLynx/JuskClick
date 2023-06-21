import React from "react";
import Slider from "react-slick";
import "./SwipeToSlide.scss";
import { cards } from "../../data";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function NextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        display: "flex",
        background: "#fff",
        position: "absolute",
        top: "40%",
        right: "-20px",
        padding: "8px",
        color: "gray",
        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        borderRadius: "50%",
        fontSize: "40px",
        zIndex: "99",
      }}
      onClick={onClick}
    >
      <BiChevronRight />
    </div>
  );
}

function PrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        ...style,
        display: "flex",
        position: "absolute",
        bottom: "40%",
        left: "-20px",
        padding: "8px",
        color: "gray",
        background: "#fff",
        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        borderRadius: "50%",
        fontSize: "40px",
        zIndex: "99",
      }}
    >
      <BiChevronLeft />
    </div>
  );
}

const SwipeToSlide = () => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 330,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cardComponent = cards.map((card) => (
    <div key={card.id} className="cards--container">
      <div className="cards" style={{ backgroundImage: `url(${card.img}})` }}>
        <p>{card.desc}</p>
        <h2>{card.title}</h2>
      </div>
    </div>
  ));

  return (
    <div className="slide--container">
      <h2 className="header--text">Popular Services</h2>
      <Slider {...settings} className="slider">
        {cardComponent}
      </Slider>
    </div>
  );
};

export default SwipeToSlide;
