import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";
import { Container } from "react-bootstrap";
import "../style/ultimate.css";

const Header = ({ t1, t2, t3 }) => {
  return (
    <div>
      <Navbar expand="lg" className="bg-white border-bottom border-2 head">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <div className="ms-auto my-2 my-lg-0 d-flex ">
              <div className="mt-3 me-3 ">
                <Nav
                  className="m-auto my-2 my-lg-0 justify-content-between gap-3"
                  navbarScroll
                >
                  <Link
                    to="/allstories"
                    className="text-decoration-none text-dark fw-bold tag me-2"
                  >
                    Stories
                  </Link>

                  <Link
                    to="/error"
                    className="text-decoration-none text-dark fw-bold tag"
                  >
                    Contact
                  </Link>
                  <Link
                    to="/login"
                    className="text-decoration-none text-dark fw-bold tag"
                  >
                    {t1}
                  </Link>
                  {t2 && (
                    <Link
                      to="/register"
                      className="text-decoration-none text-dark fw-bold tag me-2 getbtn"
                    >
                      <button className="btn text-light">{t2}</button>
                    </Link>
                  )}
                  <Link
                    to="/"
                    className="text-decoration-none text-dark fw-bold tag me-2"
                  >
                    {t3}
                  </Link>
                </Nav>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
