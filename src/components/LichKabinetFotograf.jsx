import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useRef, useState } from "react";
import Masonry from "react-responsive-masonry";
import logo3 from "../img/chivot (1).jpg";
import logo1 from "../img/div-container.jpg";
import logo2 from "../img/eda.jpg";
import logo6 from "../img/pole.jpg";
import logo5 from "../img/rubachci.jpg";
import Modal from "./Modal/Modal";
var FormData = require("form-data");
// import { response } from 'express'

const imagess = [logo1, logo2, logo3, logo6, logo5, logo6];

export default function LichKabinetPolzovat() {
  const [portvolio, setPortvolio] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [heightFoto, setHeightFoto] = useState("");
  const [widthFoto, setWidthFoto] = useState("");
  const [tagThree, setTagThree] = useState("");
  const [tagTwo, setTagTwo] = useState("");
  const [tagOne, setTagOne] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileAvatar, setSelectedFileAvatar] = useState(null);
  const [updateFileAvatar, setUpdateFileAvatar] = useState(null);
  const [selectedFileLink, setSelectedFileLink] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [uploaded, setUploaded] = useState();

  const [portvolioDirty, setPortvolioDirty] = useState(false);
  const [titleDirty, setTitleDirty] = useState(false);
  const [descriptionDirty, setDescriptionDirty] = useState(false);
  const [widthFotoDirty, setWidthFotoDirty] = useState(false);
  const [tagThreeDirty, setTagThreeDirty] = useState(false);
  const [heightFotoDirty, setHeightFotoDirty] = useState(false);
  const [tagTwoDirty, setTagTwoDirty] = useState(false);
  const [tagOneDirty, setTagOneDirty] = useState(false);
  const [inputfotoDirty, setInputfotoDirty] = useState(false);

  const [portvolioError, setPortvolioError] = useState(
    "Поле не должно быть пустым"
  );
  const [widthFotoError, setWidthFotoError] = useState(
    "Поле не должен быть пустым"
  );
  const [descriptionError, setDescriptionError] = useState(
    "Пароль не должен быть пустым"
  );
  const [titleError, setTitleError] = useState("Поле не должено быть пустым");
  const [tagThreeError, setTagThreeError] = useState(
    "Поле не должен быть пустым"
  );
  const [heightFotoError, setHeightFotoError] = useState(
    "Поле не должен быть пустым"
  );
  const [tagTwoError, setTagTwoError] = useState("Поле не должен быть пустым");
  const [tagOneError, setTagOneError] = useState("Поле не должен быть пустым");
  const [inputfotoError, setInputfotoError] = useState("Выберите файл");
  const [formValid, setFoemValid] = useState(false);
  const [formValidAvatar, setFoemValidAvatar] = useState(false);

  const [selectedForm, setForm] = useState(0);

  useEffect(() => {
    if (
      titleError ||
      descriptionError ||
      heightFotoError ||
      widthFotoError ||
      tagOneError ||
      tagThreeError ||
      inputfotoError
    ) {
      setFoemValid(false);
    } else {
      setFoemValid(true);
    }
  }, [
    titleError,
    descriptionError,
    heightFotoError,
    widthFotoError,
    tagOneError,
    tagThreeError,
    inputfotoError,
  ]);

  useEffect(() => {
    if (portvolioError) {
      setFoemValidAvatar(false);
    } else {
      setFoemValidAvatar(true);
    }
  }, [portvolioError]);

  const blurHandle = (e) => {
    switch (e.target.name) {
      case "portvolio":
        setPortvolioDirty(true);
        break;
      case "title":
        setTitleDirty(true);
        break;
      case "input-foto":
        setInputfotoDirty(true);
        break;
      case "description":
        setDescriptionDirty(true);
        break;
      case "heightFoto":
        setHeightFotoDirty(true);
        break;
      case "widthFoto":
        setWidthFotoDirty(true);
        break;
      case "tagThree":
        setTagThreeDirty(true);
        break;

      case "tagTwo":
        setTagTwoDirty(true);
        break;
      case "tagOne":
        setTagOneDirty(true);
        break;
    }
  };

  const potvolioHendel = (e) => {
    setPortvolio(e.target.value);
    if (e.target.value.length < 3) {
      setPortvolioError("Недопустимое количество символов");
      if (!e.target.value) {
        setPortvolioError("Поле не должено быть пустым");
      }
    } else {
      setPortvolioError("");
    }
  };
  const titleHendler = (e) => {
    setTitle(e.target.value);
    if (e.target.value.length < 3) {
      setTitleError("Недопустимое количество символов");
      if (!e.target.value) {
        setTitleError("Поле не должено быть пустым");
      }
    } else {
      setTitleError("");
    }
  };

  const descriptionHendler = (e) => {
    setDescription(e.target.value);
    if (e.target.value.length < 8) {
      setDescriptionError("Недопустимое количество символов");
      if (!e.target.value) {
        setDescriptionError("Пароль не должен быть пустым");
      }
    } else {
      setDescriptionError("");
    }
  };
  const heightFotoHendler = (e) => {
    setHeightFoto(e.target.value);
    if (e.target.value.length < 2) {
      setHeightFotoError("Введите правильные размеры");
      if (!e.target.value) {
        setHeightFotoError("Пароль не должен быть пустым");
      }
    } else {
      setHeightFotoError("");
    }
  };
  const widthFotoHendler = (e) => {
    setWidthFoto(e.target.value);
    if (e.target.value.length < 2) {
      setWidthFotoError("Введите правильные размеры");
      if (!e.target.value) {
        setWidthFotoError("Пароль не должен быть пустым");
      }
    } else {
      setWidthFotoError("");
    }
  };
  const tagOneHendler = (e) => {
    setTagOne(e.target.value);
    if (e.target.value.length < 3) {
      setTagOneError("Недопустимое количество символов");
      if (!e.target.value) {
        setTagOneError("Пароль не должен быть пустым");
      }
    } else {
      setTagOneError("");
    }
  };
  const tagThreeHendler = (e) => {
    setTagThree(e.target.value);
    if (e.target.value.length < 3) {
      setTagThreeError("Недопустимое количество символов");
      if (!e.target.value) {
        setTagThreeError("Пароль не должен быть пустым");
      }
    } else {
      setTagThreeError("");
    }
  };

  const tagTwoHendler = (e) => {
    setTagTwo(e.target.value);
    if (e.target.value.length < 3) {
      setTagTwoError("Недопустимое количество символов");
      if (!e.target.value) {
        setTagTwoError("Пароль не должен быть пустым");
      }
    } else {
      setTagTwoError("");
    }
  };
  const [file, setFile] = useState(null);
  const [svgVisible, setSvgVisible] = useState(true);

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
  const [user, setUser] = useState([]);
  const [selectfoto, setSelectfoto] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [photosavatar, setPhotosavatar] = useState([]);

  const [message, setMessage] = useState(Cookies.get("session"));
  const [mesag, setMesag] = useState("");

  const [tab, setTab] = useState("main");

  const [data, setData] = useState({ img: "", i: 0 });

  const viewImage = (img, i) => {
    setData({ img, i });
  };
  const imgAction = (action) => {
    let i = data.i;
    if (!action) {
      setData({ img: "", i: 0 });
    }
  };
  const [cardOpen, setCardOpen] = useState(false);

  const [modal, setModal] = useState(false);

  function openModal() {
    setModal(true);
  }

  const [sessionId, setSessionId] = useState(null);

  useEffect(() => {
    const session = Cookies.get("session");
    setSessionId(session);
    if (session) {
      axios
        .get("https://collection.cleverapps.io/checkSession", {
          params: { sessionId: session },
        })
        .then((res) => {
          setUser(res.data.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setUser(null);
    }
  }, []);
  const userId = user.userId;
  const name = user.name;
  const fulname = user.fulname;
  const number = user.number;
  const sity = user.sity;
  const print = user.print;

  // useEffect(()=> {
  axios
    .get("https://collection.cleverapps.io/selectfoto", { params: { userId } })
    .then((res) => {
      setPhotos(
        res.data.data.map((item, i) => {
          return (
            <img
              src={`https://collection.cleverapps.io/uploads/${item.img}`}
              alt=""
              className="fotowith"
            />
          );
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
  axios
    .get("https://collection.cleverapps.io/selectfotoavatar", { params: { userId } })
    .then((res) => {
      setPhotosavatar(
        res.data.data.map((item, i) => {
          return (
            <img
              src={`https://collection.cleverapps.io/uploadsAvatar/${item.img}`}
              alt=""
              className="imgavatar"
            />
          );
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
  // }, []);

  const handleChange = (e) => {
    setSelectedFile(e.target.files[0]);
    const file = e.target.files[0];
    if (!file) {
      setInputfotoError("Файл не выбран");
    } else {
      setInputfotoError("");
    }
  };
  const handelSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      setMesag("Пожалуйста, выберите файл для загрузки");
      return;
    }
    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("userId", userId);
    formData.append("title", title);
    formData.append("widthFoto", widthFoto);
    formData.append("description", description);
    formData.append("heightFoto", heightFoto);
    formData.append("tagOne", tagOne);
    formData.append("tagTwo", tagTwo);
    formData.append("tagThree", tagThree);

    try {
      const response = await axios
        .post("https://collection.cleverapps.io/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => setAvatar(response.data.path));
      setMesag(`Файл успешно загружен: ${response.data.path}`);
    } catch (error) {
      setMesag("Ошибка при загрузке файла.");
      console.error(error);
    }
  };
  const handleChangeAvatar = (e) => {
    setSelectedFileAvatar(e.target.files[0]);
    setUpdateFileAvatar(e.target.files[0])
  };
  const handelSubmitAvatar = async (event) => {
    event.preventDefault();
    if (!selectedFileAvatar) {
      setMesag("Пожалуйста, выберите файл для загрузки");
      return;
    }
    const formData = new FormData();
    formData.append("image", selectedFileAvatar);
    formData.append("userId", userId);

    try {
      const response = await axios
        .post("https://collection.cleverapps.io/uploadAvatar", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => setAvatar(response.data.path));
      setMesag(`Файл успешно загружен: ${response.data.path}`);
    } catch (error) {
      setMesag("Ошибка при загрузке файла.");
      console.error(error);
    }
  };
  const handelUpdataAvatar = async (event) => {
    event.preventDefault();
    if (!updateFileAvatar) {
      setMesag("Пожалуйста, выберите файл для загрузки");
      return;
    }
    const formData = new FormData();
    formData.append("image", updateFileAvatar);
    formData.append("userId", userId);

    try {
      const response = await axios
        .post("https://collection.cleverapps.io/uploadUpdateAvatar", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => setAvatar(response.data.path));
      setMesag(`Файл успешно загружен: ${response.data.path}`);
    } catch (error) {
      setMesag("Ошибка при загрузке файла.");
      console.error(error);
    }
  };

  const testfoto = () => {
    axios
      .get("https://collection.cleverapps.io/inputfoto", {
        params: { userId, name, fulname, number, sity, print, portvolio },
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
  };
  const imagess = [logo1, logo2, logo3, logo6, logo5, logo6];

  return (
    <>
      <div className="osnova-kabinet">
        <div className="lichkabinet">
          {photosavatar ? photosavatar : logo5}

          <h1 className="lich-polzovat">{user ? user.name : null}</h1>
          <span className="minispan">{user ? user.fulname : null}</span>
          <span>
            <input
              onChange={(e) => potvolioHendel(e)}
              value={portvolio}
              name="portvolio"
              id="portvolio"
              type="text"
              onBlur={(e) => blurHandle(e)}
              placeholder="ссылка на ваше портфолио"
              className="ssalka"
            />
          </span>
          <span>
            <button
              className="button7"
              type="submit"
              disabled={!formValidAvatar}
              onClick={testfoto}
            >
              загрузить
            </button>
          </span>
          
          {/* </form> */}
          <ul className="ulfotograf">
            <li className="">
              <h1 className="lich-polzovat-h1">{user ? user.number : null}</h1>
            </li>
            <li>
              <h2 className="lich-polzovat-h1">{user ? user.sity : null}</h2>
            </li>
            <li>
              <h2 className="lich-polzovat-h1">{user ? user.print : null}</h2>
            </li>
          </ul>
        <div className="avatardiv">
          <form onSubmit={handelSubmitAvatar}>
            <input
              type="file"
              className="form-control input-foto"
              id="input-foto"
              name="input-foto"
              accept="image/*, .phg, .jpg, .jpeg"
              onChange={handleChangeAvatar}
            />
            <button type="submit" className="button6 float">
              добавить аватарку
            </button>
          </form>
          <form onSubmit={handelUpdataAvatar}>
            <button type="submit" className="button6 float">обновить аватарку</button>
          </form>
          </div>
          <div className="lich-button">
            <button className="button2" onClick={openModal}>
              загрузить фотографию
            </button>
            <Modal open={modal}>
              <a
                href="#close"
                className="btn-close"
                aria-hidden="true"
                onClick={() => setModal(false)}
              >
                ×
              </a>

              <div className="foto-imort">
                <form
                  action=""
                  className="form-foro-import"
                  onSubmit={handelSubmit}
                >
                  <label className="form-label input-foto" forHTML="customFile">
                    Загрузите фотографию
                  </label>
                  <div className="price_range">
                    <div className="form-group mt-3">
                      {titleDirty && titleError && (
                        <div style={{ color: "red", background: "none" }}>
                          {titleError}
                        </div>
                      )}
                      <input
                        onChange={(e) => titleHendler(e)}
                        value={title}
                        type="text"
                        className="form-control mt-1 input-foto"
                        name="title"
                        id="title"
                        placeholder="название"
                        onBlur={(e) => blurHandle(e)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      {widthFotoDirty && widthFotoError && (
                        <div style={{ color: "red", background: "none" }}>
                          {widthFotoError}
                        </div>
                      )}
                      <input
                        onChange={(e) => widthFotoHendler(e)}
                        value={widthFoto}
                        type="number"
                        className="form-control mt-1 input-foto2"
                        name="widthFoto"
                        id="widthFoto"
                        placeholder="ширина фота см"
                        onBlur={(e) => blurHandle(e)}
                      />
                    </div>
                  </div>
                  <div className="price_range">
                    <div className="form-group mt-3">
                      {descriptionDirty && descriptionError && (
                        <div style={{ color: "red", background: "none" }}>
                          {descriptionError}
                        </div>
                      )}
                      <input
                        onChange={(e) => descriptionHendler(e)}
                        value={description}
                        type="text"
                        className="form-control mt-1 input-foto1"
                        name="description"
                        id="description"
                        placeholder="краткое описание"
                        onBlur={(e) => blurHandle(e)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      {heightFotoDirty && heightFotoError && (
                        <div style={{ color: "red", background: "none" }}>
                          {heightFotoError}
                        </div>
                      )}
                      <input
                        onChange={(e) => heightFotoHendler(e)}
                        value={heightFoto}
                        type="number"
                        className="form-control mt-1 input-foto2"
                        name="heightFoto"
                        id="heightFoto"
                        placeholder="высота фота см"
                        onBlur={(e) => blurHandle(e)}
                      />
                    </div>
                  </div>
                  <div className="price_range">
                    <div className="form-group mt-3">
                      {tagOneDirty && tagOneError && (
                        <div style={{ color: "red", background: "none" }}>
                          {tagOneError}
                        </div>
                      )}
                      <input
                        onChange={(e) => tagOneHendler(e)}
                        value={tagOne}
                        type="text"
                        className="form-control mt-1 input-foto3"
                        name="tagOne"
                        id="tagOne"
                        placeholder="теги"
                        onBlur={(e) => blurHandle(e)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      {tagTwoDirty && tagTwoError && (
                        <div style={{ color: "red", background: "none" }}>
                          {tagTwoError}
                        </div>
                      )}
                      <input
                        onChange={(e) => tagTwoHendler(e)}
                        value={tagTwo}
                        type="text"
                        className="form-control mt-1 input-foto3"
                        name="tagTwo"
                        id="tagTwo"
                        placeholder="теги"
                        onBlur={(e) => blurHandle(e)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      {tagThreeDirty && tagThreeError && (
                        <div style={{ color: "red", background: "none" }}>
                          {tagThreeError}
                        </div>
                      )}
                      <input
                        onChange={(e) => tagThreeHendler(e)}
                        value={tagThree}
                        type="text"
                        className="form-control mt-1 input-foto3"
                        name="tagThree"
                        id="tagThree"
                        placeholder="теги"
                        onBlur={(e) => blurHandle(e)}
                      />
                    </div>
                  </div>

                  <label htmlFor="reason" className="dop-info">
                    Дополнительные соглашения
                  </label>
                  <select
                    style={{
                      background: "rgba(0, 0, 0, 0.505)",
                      marginTop: "10px",
                      marginLeft: "20px",
                    }}
                    id="reason"
                    className="control"
                    value={selectedForm}
                    onChange={(e) => setForm(e.target.value)}
                  >
                    <option value="0">Объекты на фото</option>
                    <option value="1">Модель</option>
                    <option value="2">Частная собственности</option>
                    <option value="3">Оба перечисленные</option>
                  </select>
                  {selectedForm == 1 ? (
                    <>
                      <label
                        className="form-label input-foto"
                        forHTML="customFile"
                      >
                        Присутствует модель
                      </label>
                      <label forHTML="customFile1" style={{background: 'none', color: 'black', marginLeft: '10px'}}>
                        правила загрузки фотографий с моделями можно прочитать в
                        разделе для автора
                      </label>
                      <input
                        type="checkbox"
                        className=" input-foto"
                        id="customFile1"
                      />
                    </>
                  ) : selectedForm == 2 ? (
                    <>
                      <label
                        className="form-label input-foto"
                        forHTML="customFile"
                      >
                        Присутствует модель
                      </label>
                      <label forHTML="customFile2" style={{background: 'none', color: 'black', marginLeft: '10px'}}>
                        правила загрузки фотографий с частной собственностью
                        можно прочитать в разделе для автора
                      </label>
                      <input
                        type="checkbox"
                        className=" input-foto"
                        id="customFile2"
                      />
                    </>
                  ) : selectedForm == 3 ? (
                    <>
                      <label
                        className="form-label input-foto"
                        forHTML="customFile"
                      >
                        Присутствует модель
                      </label>
                      <label forHTML="customFile1" style={{background: 'none', color: 'black', marginLeft: '10px'}}>
                        правила загрузки фотографий с моделями можно прочитать в
                        разделе для автора
                      </label>
                      <input
                        type="checkbox"
                        className=" input-foto"
                        id="customFile1"
                      />
                      <label
                        className="form-label input-foto"
                        forHTML="customFile"
                      >
                        Присутствует модель
                      </label>
                      <label forHTML="customFile2" style={{background: 'none', color: 'black', marginLeft: '10px'}}>
                        правила загрузки фотографий с моделями можно прочитать в
                        разделе для автора
                      </label>
                      <input
                        type="checkbox"
                        className=" input-foto"
                        id="customFile2"
                      />
                    </>
                  ) : (
                    <p></p>
                  )}

                  {inputfotoDirty && inputfotoError && (
                    <div style={{ color: "red", background: "none" }}>
                      {inputfotoError}
                    </div>
                  )}
                  <input
                    type="file"
                    className="form-control input-foto"
                    id="input-foto"
                    name="input-foto"
                    accept="image/*, .phg, .jpg, .jpeg"
                    onChange={handleChange}
                  />
                  <button
                    disabled={!formValid}
                    type="submit"
                    className="button4"
                  >
                    Загрузить фотографию
                  </button>
                </form>
              </div>
            </Modal>

            {cardOpen && <div className="shop-car"></div>}
          </div>
        </div>
      </div>
      <Masonry columnsCount={3} gutter="20px" className="masonry">
        {photos}
      </Masonry>
    </>
  );
}
