import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import TabButtonUser from "../components/TabButtonUser";

export default function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailreg, setEmailreg] = useState("");
  const [passwordreg, setPasswordreg] = useState("");
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [fulname, setFulname] = useState("");
  const [sity, setSity] = useState("");
  const [print, setPrint] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailregDirty, setEmailregDirty] = useState(false);
  const [passwordregDirty, setPasswordregDirty] = useState(false);
  const [nameDirty, setNameDirty] = useState(false);
  const [fulnameDirty, setFullnameDirty] = useState(false);
  const [numberDirty, setNumberDirty] = useState(false);
  const [sityDirty, setSityDirty] = useState(false);
  const [printDirty, setPrintDirty] = useState(false);
  const [nameError, setNameError] = useState("Поле не должен быть пустым");
  const [passwordError, setPasswordError] = useState(
    "Пароль не должен быть пустым"
  );
  const [emaeiError, setEmailError] = useState("Email не должен быть пустым");
  const [passwordregError, setPasswordregError] = useState(
    "Пароль не должен быть пустым"
  );
  const [emaeiregError, setEmailregError] = useState(
    "Email не должен быть пустым"
  );
  const [fulnameError, setFulnameError] = useState(
    "Поле не должен быть пустым"
  );
  const [numberError, setNumberError] = useState("Поле не должен быть пустым");
  const [sityError, setSityError] = useState("Поле не должен быть пустым");
  const [printError, setPrintError] = useState("Поле не должен быть пустым");
  const [formValidOne, setFoemValidOne] = useState(false);
  const [formValidTwo, setFoemValidTwo] = useState(false);

  const [selectedForm, setForm] = useState("polzovatel");

  useEffect(() => {
    if (emaeiError || passwordError) {
      setFoemValidOne(false);
    } else {
      setFoemValidOne(true);
    }
  }, [emaeiError, passwordError]);

  useEffect(() => {
    if (
      emaeiregError ||
      passwordregError ||
      nameError ||
      fulnameError ||
      numberError
    ) {
      setFoemValidTwo(false);
    } else {
      setFoemValidTwo(true);
    }
  }, [emaeiregError, passwordregError, nameError, fulnameError, numberError]);

  const blurHandle = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      case "emailreg":
        setEmailregDirty(true);
        break;
      case "passwordreg":
        setPasswordregDirty(true);
        break;
      case "name":
        setNameDirty(true);
        break;
      case "fulname":
        setFullnameDirty(true);
        break;
      case "number":
        setNumberDirty(true);
        break;
      case "sity":
        setSityDirty(true);
        break;
      case "print":
        setPrintDirty(true);
        break;
    }
  };
  const emailHendler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некоректный email");
    } else {
      setEmailError("");
    }
  };
  const paswordHendler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setPasswordError("Недопустимое количество символов");
      if (!e.target.value) {
        setPasswordError("Пароль не должен быть пустым");
      }
    } else {
      setPasswordError("");
    }
  };
  const emailregHendler = (e) => {
    setEmailreg(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailregError("Некоректный email");
    } else {
      setEmailregError("");
    }
  };
  const paswordregHendler = (e) => {
    setPasswordreg(e.target.value);
    if (e.target.value.length < 8) {
      setPasswordregError("Недопустимое количество символов");
      if (!e.target.value) {
        setPasswordregError("Пароль не должен быть пустым");
      }
    } else {
      setPasswordregError("");
    }
  };
  const sityHendler = (e) => {
    setSity(e.target.value);
    if (e.target.value.length < 2) {
      setSityError("Введите полное название города");
      if (!e.target.value) {
        setSityError("Пароль не должен быть пустым");
      }
    } else {
      setSityError("");
    }
  };
  const printHendler = (e) => {
    setPrint(e.target.value);
    if (e.target.value.length < 10) {
      setPrintError("Минимальное количество символов 10");
      if (!e.target.value) {
        setPrintError("Пароль не должен быть пустым");
      }
    } else {
      setPrintError("");
    }
  };
  const nameHendler = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 3) {
      setNameError("Введите полное имя");
      if (!e.target.value) {
        setNameError("Пароль не должен быть пустым");
      }
    } else {
      setNameError("");
    }
  };
  const fulnameHendler = (e) => {
    setFulname(e.target.value);
    if (e.target.value.length < 3) {
      setFulnameError("Введите полную фамилию");
      if (!e.target.value) {
        setFulnameError("Пароль не должен быть пустым");
      }
    } else {
      setFulnameError("");
    }
  };
  const numberHendler = (e) => {
    setNumber(e.target.value);
    const re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    if (!re.test(e.target.value)) {
      setNumberError("Неверный телефон");
    } else {
      setNumberError("");
    }
  };

  function StateVsRef() {
    const input = useRef();
    const [show, setShow] = useState(false);

    function hendleKey(event) {
      if (event.key == "Enter") {
        setShow(true);
      }
    }
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
      .get("http://localhost:5000/user", {
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
      .get("http://localhost:5000/login", { params: { email, password } })
      .then((res) => {
        setMessage(res.data.message);
        console.log(res);
        Cookies.set("session", res.data.sessionId, { expires: 7 });
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

  const [sessionId, setSessionId] = useState(null);

  useEffect(() => {
    const session = Cookies.get("session");
    setSessionId(session);
    if (session) {
      axios
        .get("http://localhost:5000/checkSession", {
          params: { sessionId: session },
        })
        .then((res) => {
          console.log(res);
          setUser(res.data.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setUser(null);
    }
  }, []);

  return (
    <>
      <TabButtonUser
        active={tab}
        onChenge={(current) => setTab(current)}
        className="justify-content: center mt-5"
      />
      {tab == "main" && (
        <>
          <section>
            <div className="Auth-form-container">
              <form className="Auth-form">
                <div className="Auth-form-content dispion">
                  <h3 className="Auth-form-title">
                    Пользователь зарегистрирован Пройтите авторизацию
                  </h3>
                  <div className="form-group mt-3">
                    {emailDirty && emaeiError && (
                      <div style={{ color: "red", background: "none" }}>
                        {emaeiError}
                      </div>
                    )}
                    <label>Ваш email</label>
                    <input
                      onChange={(e) => emailHendler(e)}
                      value={email}
                      onBlur={(e) => blurHandle(e)}
                      type="email"
                      className="form-control mt-1"
                      name="email"
                      id="email"
                    />
                  </div>
                  <div className="form-group mt-3">
                    {passwordDirty && passwordError && (
                      <div style={{ color: "red", background: "none" }}>
                        {passwordError}
                      </div>
                    )}
                    <label>Пароль</label>
                    <input
                      onChange={(e) => paswordHendler(e)}
                      value={password}
                      onBlur={(e) => blurHandle(e)}
                      type="password"
                      className="form-control mt-1"
                      name="password"
                      id="password"
                    />
                  </div>
                  <div className="d-grid gap-2 mt-3 position">
                    <button
                      disabled={!formValidOne}
                      type="button"
                      className="btn btn-primary vchod"
                      onClick={test}
                    >
                      <Link
                        to="/kabinet"
                        className="font-link2"
                        onClick={() => setModal(false)}
                      >
                        войти
                      </Link> 
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </section>
          {/* авторизация */}
        </>
      )}
    </>
  );
}
