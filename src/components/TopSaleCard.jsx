import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './/card.css';
const TopSaleCard = () => {
  return (
    <>
  <div class="card9">


    <div className='view'>

    <Card >
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.jt9WOyl0JpoIVkxstQDwNQHaEV?w=286&h=180&c=7&r=0&o=5&pid=1.7" className='x'/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


    <Card >
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.HFPCG8N0Mpt6szV2nDKhTgAAAA?w=272&h=180&c=7&r=0&o=5&pid=1.7" className='x'/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    
    <Card >
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.QneDPeHzp6yZrKfKBwqynQHaEK?w=321&h=180&c=7&r=0&o=5&pid=1.7"className='x' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
<br />
</div>
</div>
    </>
  )
}

export default TopSaleCard;
