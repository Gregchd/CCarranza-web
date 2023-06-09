import React, { Component } from "react";
import Slider from "react-slick";
import "./CardCarousel.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      /* dotsClass: "custom-dots", */
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div>
            <div className="title">
              <b>
                ¿Preocupado por el impacto de su empresa en el medio ambiente?
              </b>
            </div>
            <div className="subtitle">Nostros podemos ayudarte</div>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
