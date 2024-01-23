import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed:5
    };
    return (
     <center> <div>
        <h2> Recent Browse</h2>
        <Slider {...settings}>
          <div>
          <img src="https://m.media-amazon.com/images/I/518BYF8LHRL._AC_UY218_.jpg" className='sss'></img>
          </div>
          <div>
          <img src="https://m.media-amazon.com/images/I/518BYF8LHRL._AC_UY218_.jpg" className='sss'></img>
          </div>
          <div>
          <img src="https://m.media-amazon.com/images/I/518BYF8LHRL._AC_UY218_.jpg" className='sss'></img>
          </div>
          <div>
          <img src="https://m.media-amazon.com/images/I/518BYF8LHRL._AC_UY218_.jpg" className='sss'></img>
          </div>
          <div>
          <img src="https://m.media-amazon.com/images/I/518BYF8LHRL._AC_UY218_.jpg" className='sss'></img>
          </div>
          <div>
          <img src="https://m.media-amazon.com/images/I/518BYF8LHRL._AC_UY218_.jpg" className='sss'></img>
          </div>
        </Slider>
      </div>

      </center>
    );
  }
}