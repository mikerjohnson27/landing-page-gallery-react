import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product() {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://dummyimage.com/180x100/737373/ffffff.jpg&text=Place+Holder" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Product;