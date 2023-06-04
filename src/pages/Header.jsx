import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../elements/logos/casanoilog.png"

function Header() {
  return (
    <Navbar expand="lg" className='d-flex justify-content-end fixed-top shadow-lg rounded-bottom' style={{background: 'rgba(181, 165, 134, 0.80)'}}>
      <Container>
        <img src={logo} alt="logo" width={250} />
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/Almohadones">Almohadones</Nav.Link>
            <Nav.Link href='/Almohadonesxl'>Almohadones XL</Nav.Link>
            <Nav.Link href="/Alfombras">Alfombras</Nav.Link>
            <Nav.Link href="/Bags">Bags</Nav.Link>
            <Nav.Link href="/Otros">Otros</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;