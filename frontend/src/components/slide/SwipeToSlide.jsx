import React, { Component } from "react";
import Slider from "react-slick";
import './SwipeToSlide.scss';
import { cards } from '../../data';
// import {BiChevronRightCircle} from 'react-icons/bi'

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     />
//   );
// }
console.log( {cards})
export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      // nextArrow: <BiChevronRightCircle  style={{backgroundColor: 'red'}}/>,
      // prevArrow: <SamplePrevArrow />
    };
    return (
      <div className="slider">
        <h2> Single Item</h2>
        <Slider {...settings}>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
        </Slider>
      </div>
    );
  }
}