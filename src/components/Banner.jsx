import React from 'react'
import {Col, Container,Row} from 'react-bootstrap';   
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
  return (
   
            <Carousel data-bs-theme="dark" style={{width:'90%'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.91-cdn.com/hub/wp-content/uploads/2023/09/Intel-Flipkart-Feat-Image.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p className='d-none d-sm-block'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.gizbot.com/img/2020/03/best-ultra-hd-screen-laptops-to-buy-in-india-1585652594.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://storage.pixteller.com/designs/designs-images/2020-12-21/05/laptop-new-arrival-sales-banner-1-5fe0c47813869.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            
  )
}

export default Banner
               