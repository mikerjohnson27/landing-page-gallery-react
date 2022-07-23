
import Card from 'react-bootstrap/Card';
import TooltipButton from './tooltip/tooltip-buttons'

import './product.css'

function Product() {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://dummyimage.com/180x100/737373/ffffff.jpg&text=Place+Holder" />
        <Card.Body align="center">
          <Card.Title align="center">Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <TooltipButton className="center" variant="primary"></TooltipButton>
        </Card.Body>
      </Card>
    </>
  );
}

export default Product;