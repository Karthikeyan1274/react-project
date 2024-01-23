import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 100,
    centerMode: true,

  };

  return (
    <div className='wholecontactimg' style={{display:"flex"}}>
      <Slider {...settings}>
        <div className='contactimg'>
          <img src="https://dt-woofly.myshopify.com/cdn/shop/files/AdobeStock_580532667_2x_931cf135-b453-4acd-83d6-5768dd4ecaa5.jpg?v=1687237318&width=1500" />
        </div>
        {/* Add more image elements here */}
      </Slider>
    </div>
  );
}