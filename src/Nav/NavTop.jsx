import Nav from 'react-bootstrap/Nav';
import './NavTop.css'

function NavTop() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
      <Nav.Item>
        <Nav className='navItem' href="./home">Home</Nav>
      </Nav.Item>
      <Nav.Item>
        <Nav className='navItem' href="./shop">Shop</Nav>
      </Nav.Item>
      <Nav.Item>
        <Nav className='navItem' href="./about">About US</Nav>
      </Nav.Item>
      <Nav.Item>
        <Nav className='navItem' href="./contact">Contact</Nav>
      </Nav.Item>
    </Nav>
  );
}

export default NavTop;