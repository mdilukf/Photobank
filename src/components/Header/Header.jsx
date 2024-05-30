import { styled } from "styled-components";
// вот это взять с собой
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from "js-cookie";
import React, { useRef, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeaderComponent = styled.header`
  width: auto;
  border-bottom: 2px solid #4b4f92;
  box-shadow: 0 20px 20px -19px #4b4f92;
`;

export default function Header() {
  const [selectedForm, setForm] = useState("polzovatel");

  function StateVsRef() {
    const input = useRef();
    const [show, setShow] = useState(false);

    function hendleKey(event) {
      if (event.key == "Enter") {
        setShow(true);
      }
    }

    return (
      <div>
        <h3>Input value: {show && input.current.value}</h3>
        <input
          ref={input}
          type="text"
          className="control"
          onKeyDown={hendleKey}
        />
      </div>
    );
  }

  let [authMode, setAuthMode] = useState("signin");
  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };
  const [tab, setTab] = useState("main");

  const [modal, setModal] = useState(false);

  function openModal() {
    setModal(true);
  }

  const [user, setUser] = useState([]);

  const [message, setMessage] = useState(Cookies.get("session"));

  const test = () => {
    axios
      .get("http://localhost:5000/")
      .then((res) => {

        setUser(res.data.data);

        setMessage(Cookies.get("session"));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [sessionId, setSessionId] = useState(null);

  return (
    <HeaderComponent>
      <Navbar collapseOnSelect expand="lg" className="navbae">
        <Container>
          <Nav.Item>
            <Navbar.Brand href="#home">
              <Link to="/" className="font-link2">
                collection
              </Link>
            </Navbar.Brand>
          </Nav.Item>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="d-flex gap-3" activeKey="/home">
              <Nav.Item className="">
                <Nav.Link href="#">
                  <Link to="/gallery" className="font-link1">
                    галерея
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">
                  <Link to="/portfolio" className="font-link1">
                    портфолио
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2 " style={{width: '87px'}}>
                  <Link to="/about" className="font-link1">
                    о нас
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Button onClick={openModal} className="button1" style={{marginBottom: '20px'}}>
                  <Link to="/registration" className="font-link5">
                    войти
                  </Link>
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </HeaderComponent>
  );
}
