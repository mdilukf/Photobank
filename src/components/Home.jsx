import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import logo3 from "../img/chivot (1).jpg";
import logo1 from "../img/div-container.jpg";
import logo2 from "../img/eda.jpg";
import logo6 from "../img/estetic.jpg";
import logo7 from "../img/fotograf.jpg";
import logo4 from "../img/ludi.jpg";
import logo5 from "../img/город.jpg";
import Card from "react-bootstrap/Card";
import Masonry from "react-responsive-masonry";

import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from "js-cookie";

const HeaderComponent = styled.header`
  width: auto;
  background: #000000;
`;

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailreg, setEmailreg] = useState("");
  const [passwordreg, setPasswordreg] = useState("");
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [fulname, setFulname] = useState("");
  const [sity, setSity] = useState("");
  const [print, setPrint] = useState("");



  const [selectedForm, setForm] = useState(1);

  

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

  const [data, setData] = useState(null);

  let dataTest = {
    id: 1,
    name: 2,
  };

  const [message, setMessage] = useState("null");
  const [user, setUser] = useState([]);

  const test = () => {
    axios
      .get("https://collection.cleverapps.io/")
      .then((res) => {
        //console.log(res.data.data);
        // console.log(res.data.data[0].email);
        setUser(res.data.data);
        console.log(email);
        Cookies.set("name", name, { expires: 7 });
        Cookies.set("fulname", fulname, { expires: 7 });
        Cookies.set("numder", number, { expires: 7 });
        Cookies.set("sity", sity, { expires: 7 });
        Cookies.set("print", print, { expires: 7 });
    
        setMessage(Cookies.get("session"));
        
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("https://collection.cleverapps.io/user", {
        params: {
          name,
          fulname,
          number,
          emailreg,
          passwordreg,
          selectedForm,
          sity,
          print,
        },
      })
      .then((res) => {
        setMessage(res.data.message);
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
        setMessage(Cookies.get("session"));
        console.log(err.response.data.message);
      });
    axios
      .get("https://collection.cleverapps.io/login", { params: { email, password } })
      .then((res) => {
        setMessage(res.data.message);
        console.log(res);
        Cookies.set("name", name, { expires: 7 });
        Cookies.set("fulname", fulname, { expires: 7 });
        Cookies.set("numder", number, { expires: 7 });
        Cookies.set("sity", sity, { expires: 7 });
        Cookies.set("print", print, { expires: 7 });
      })
      .catch((err) => {
        console.error(err);
        setMessage(Cookies.get("session"));
        console.log(err.response.data.message);
      });
  };
  const [portvolio, setPortvolio] = useState([]);
  useEffect(()=> {
    axios
    .get("https://collection.cleverapps.io/homeportvolio")
    .then((res) => {
      setPortvolio(
        res.data.data.map((item, i) => {
          return (
            <>
              <div className="galereifoto">
                <img
                  src={`https://collection.cleverapps.io/homeportvolio/${item.img}`}
                  alt=""
                  className="portvolioimg"
                />
                <Card.Title className="titlefoto" style={{textAlign: 'center'}}>
                  {item.name} {item.fulname}
                </Card.Title>
                
              </div>
            </>
          );
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
  },[])
  
  document.title = "Главная";
  return (
    <>
      <div className="jumbotron1">
        <div className="container">
          <h1 className="display-3">
            {" "}
            Коллекция фотографий и портфолий мастров{" "}
          </h1>
          
        </div>
      </div>
      

      <div className="gallerea">
        <div className="gallerea-div">
          <h2>Галерея</h2>
          <div className="div-columns">
            <div className="row justify-content-sm-center ">
              <div className="col-sm-auto custom">
                <div className="container-div-1">
                <Link to="/gallery/красота" className="font-link2">
                  <img
                    src={logo1}
                    alt="картинка"
                    className="container-div img-fluid"
                  />
                  <p>
                      красота
                  </p>
                  </Link>
                </div>
              </div>
              <div className="col-sm-auto custom">
                <div className="margin-div">
                  <div className="container-div-1">
                  <Link to="/gallery/еда" className="font-link2">
                    <img
                      src={logo2}
                      alt="картинка"
                      className="container-div img-fluid"
                    />
                    <p>
                        еда
                    </p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-auto custom">
                <div className="container-div-1">
                <Link to="/gallery/животные" className="font-link2">
                  <img
                    src={logo3}
                    alt="картинка"
                    className="container-div img-fluid"
                  />
                  <p>
                    животные
                  </p>
                  </Link>
                </div>
              </div>
              <div className="col-sm-auto custom">
                <div className="container-div-1">
                <Link to="/gallery/люди" className="font-link2">
                  <img
                    src={logo4}
                    alt="картинка"
                    className="container-div img-fluid"
                  />
                  <p>
                   люди
                  </p>
                  </Link>
                </div>
              </div>
              <div className="col-sm-auto custom">
                <div className="margin-div">
                  <div className="container-div-1">
                  <Link to="/gallery/город" className="font-link2">
                    <img
                      src={logo5}
                      alt="картинка"
                      className="container-div img-fluid"
                    />
                    <p>
                      города
                    </p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-auto custom">
                <div className="container-div-1">
                <Link to="/gallery/эстетика" className="font-link2">
                  <img
                    src={logo6}
                    alt="картинка"
                    className="container-div img-fluid"
                  />
                  <p>
                    эстетика
                  </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="o-nas">
        <div className="jumbotron2">
          <div className="container">
            <h1 className="display-4"> Фотобак collection </h1>
            <h4 className="display-5">
              Огромное количество стоковых фотографий по приемлимым ценам{" "}
            </h4>
            <div className="input-group">
              <Button className="button-1">
                <Link to="/about" className="font-link2">
                  о фотобанке
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center d-flex photos">
        <div className="col-4  justify-content-center d-flex ">
          <div className="container-img">
            <img src={logo7} alt="картинка" className="img-fotograf" />
            <h1>выплаты авторам регулярно</h1>
          </div>
        </div>
        <div className="col-4 justify-content-center d-flex regishome">
          <div className="container-div-2">
            <p>Получай доход со своих работ с нами</p>
            <Button onClick={openModal} className="button1" style={{marginTop: '10px'}}>
              <Link to="/registration" className="font-link2">присоединиться</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="fotograf">
        <div className="fotograf-div">
          <h2>Фотографы которые вам понравятся </h2>
          <Masonry columnsCount={3} gutter="20px" style={{ marginLeft: "20px" }}>
          {portvolio}
          
        </Masonry>
          
        </div>
      </div>
    </>
  );
}
