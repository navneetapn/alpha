import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
// import Home from "../Pages/Home";
// import About from "../Pages/About";
// import Products from "../Pages/Products";
// import Contact from "../Pages/Contact";

function Header() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="products" element={<About />} />
    //     <Route path="/contact" element={<About />} />
    //   </Routes>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
              <Link href="/">
                Home <i className="fa fa-home"></i>
              </Link>
              <Link href="/about">About Us</Link>
              <Link href="/products">Products</Link>
              <Link href="/contact">Contacts</Link>
            </BrowserRouter> */}
            <Nav.Link href="/">
                Home <i className="fa fa-home"></i>
              </Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/products">Products</Nav.Link>
              <Nav.Link href="/contact">Contacts</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // </BrowserRouter>
  );
}

export default Header;
