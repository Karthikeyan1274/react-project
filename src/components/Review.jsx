import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {Col, Container,Row} from 'react-bootstrap';
import'.//Review.css'
const Review = () => {
  return (
    <>
    <div className="co"> 
    <div className='text-center'>
      <h3 className='text-primary my-3 py-5'>What Our Clients Say</h3>
      </div>
      <Container>
        <Row className="justify-content-center align-item-center">
            <Col lg={12}>
            <Carousel data-bs-theme="dark">
            <Carousel.Item interval={100}>
<div className='view2'>
 <div class="card2">
  <div class="img"></div>
  <span>About Me</span>
  <p class="info">I’m Walter, a multidisciplinary designer who focuses on telling my clients’ stories visually, through enjoyable and meaningful experiences. I specialize in responsive websites and functional user interfaces.</p>
  
 
</div>



</div>
</Carousel.Item>
<Carousel.Item interval={100}>
<div className='view2'>
 <div class="card2">
  <div class="img"></div>
  <span>KARTHI</span>
  <p class="info">I’m Walter, a multidisciplinary designer who focuses on telling my clients’ stories visually, through enjoyable and meaningful experiences. I specialize in responsive websites and functional user interfaces.</p>
  
 
</div>



</div>
</Carousel.Item>

<Carousel.Item interval={100}>
<div className='view2'>
 <div class="card2">
  <div class="img"></div>
  <span>About Me</span>
  <p class="info">I’m Walter, a multidisciplinary designer who focuses on telling my clients’ stories visually, through enjoyable and meaningful experiences. I specialize in responsive websites and functional user interfaces.</p>
  
  
</div>




</div>
</Carousel.Item>



</Carousel>
            </Col>
        </Row>
    </Container>

    </div>

</>
  )
}

export default Review
