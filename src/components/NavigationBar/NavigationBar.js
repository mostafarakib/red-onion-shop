import { React } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./NavigationBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const NavigationBar = () => {
  const { user, logOut } = useAuth();

  return (
    <div>
      <Navbar
        className="ps-4 pe-4"
        collapseOnSelect
        expand="md"
        bg="light"
        variant="light"
        fixed="top"
      >
        <Navbar.Brand as={Link} to="/">
          <img className="logo" src="images/logo.png" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="me-3" as={Link} to="/cart">
              <FontAwesomeIcon icon={faCartShopping} />
            </Nav.Link>

            {!user.email ? (
              <div className="d-flex align-items-center">
                <Nav.Link as={Link} to="/login" className="me-3">
                  Login
                </Nav.Link>
                <Link to="/register">
                  <button className="btn-regular">Sign up</button>
                </Link>
              </div>
            ) : (
              <NavDropdown
                title={
                  <img
                    className="thumbnail-image"
                    src={
                      !user.photoURL
                        ? "/public/images/sample-photo.jpeg"
                        : user.photoURL
                    }
                    alt=""
                  />
                }
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item>
                  <h6>{user.displayName}</h6>
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/cart">
                  My Wishlist
                </NavDropdown.Item>
                <hr />
                <NavDropdown.Item>Privacy Policy</NavDropdown.Item>
                <NavDropdown.Item>Terms & Conditions</NavDropdown.Item>
                <hr />
                <NavDropdown.Item onClick={logOut}>Sign Out</NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
