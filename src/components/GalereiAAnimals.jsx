import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Masonry from "react-responsive-masonry";
import logo3 from "../img/chivot (1).jpg";
import logo1 from "../img/div-container.jpg";
import logo2 from "../img/eda.jpg";
import logo6 from "../img/estetic.jpg";
import logo4 from "../img/ludi.jpg";
import logo5 from "../img/город.jpg";

const imagess = [logo1, logo2, logo3, logo6, logo5, logo6];
const images = [logo1, logo2, logo3];
const imager = [logo4, logo5, logo6];

export default function Portfolio(props) {

  const handleAdd = (id) => {
    console.log(props.user);
    axios
      .post("http://localhost:5000/add_to_cart", { user_id: props.user.userId, id })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(console.error());
      });
  };

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
  const [portvolio, setPortvolio] = useState([]);
  const [selectpoisk, setSelectpoisk] = useState([]);
  const [selectimagesbeauty, setSelectimagesbeauty] = useState([]);
  const [selectimageseat, setSelectimageseat] = useState([]);
  const [selectimagesanimals, setSelectimagesanimals] = useState([]);
  const [selectimagespipls, setSelectimagespipls] = useState([]);
  const [selectimagessity, setSelectimagessity] = useState([]);
  const [selectimagesaesthetics, setSelectimagesaesthetics] = useState([]);

  const [selectedForm, setForm] = useState(3);

  useEffect(() => {
    axios
      .get("http://localhost:5000/selectimg")
      .then((res) => {
        setPortvolio(
          res.data.data.map((item, i) => {
            return (
              <>
                <div className="galereifoto">
                  <img
                    src={`http://localhost:5000/uploadsimg/${item.img}`}
                    alt=""
                    className="portvolioimg"
                  />
                  <Card.Title className="titlefoto">{item.title}</Card.Title>
                  <Card.Text className="discriptionfoto">
                    {item.description}
                    <p>
                      {item.widthFoto}*{item.heightFoto}
                    </p>
                    Автор фотографии:
                    <p>
                       
                      {item.name} {item.fulname}
                    </p>
                    <p className="price">цена: 120р</p>
                    <button
                      className="button8"
                      onClick={() => handleAdd(item.id)}
                    >
                      купить
                    </button>
                  </Card.Text>
                </div>
              </>
            );
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
      axios
      .get("http://localhost:5000/selectimgbeauty")
      .then((res) => {
        setSelectimagesbeauty(
          res.data.data.map((item, i) => {
            return (
              <>
                <div className="galereifoto">
                  <img
                    src={`http://localhost:5000/uploadsimgbeauty/${item.img}`}
                    alt=""
                    className="portvolioimg"
                  />
                  <Card.Title className="titlefoto">{item.title}</Card.Title>
                  <Card.Text className="discriptionfoto">
                    {item.description}
                    <p>
                      {item.widthFoto}*{item.heightFoto}
                    </p>
                    Автор фотографии:
                    <p>
                       
                      {item.name} {item.fulname}
                    </p>
                    <p className="price">цена: 120р</p>
                    <button
                      className="button8"
                      onClick={() => handleAdd(item.id)}
                    >
                      купить
                    </button>
                  </Card.Text>
                </div>
              </>
            );
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
      axios
      .get("http://localhost:5000/selectimgeat")
      .then((res) => {
        setSelectimageseat(
          res.data.data.map((item, i) => {
            return (
              <>
                <div className="galereifoto">
                  <img
                    src={`http://localhost:5000/uploadsimgeat/${item.img}`}
                    alt=""
                    className="portvolioimg"
                  />
                  <Card.Title className="titlefoto">{item.title}</Card.Title>
                  <Card.Text className="discriptionfoto">
                    {item.description}
                    <p>
                      {item.widthFoto}*{item.heightFoto}
                    </p>
                    Автор фотографии:
                    <p>
                       
                      {item.name} {item.fulname}
                    </p>
                    <p className="price">цена: 120р</p>
                    <button
                      className="button8"
                      onClick={() => handleAdd(item.id)}
                    >
                      купить
                    </button>
                  </Card.Text>
                </div>
              </>
            );
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
      axios
      .get("http://localhost:5000/selectimganimals")
      .then((res) => {
        setSelectimagesanimals(
          res.data.data.map((item, i) => {
            return (
              <>
                <div className="galereifoto">
                  <img
                    src={`http://localhost:5000/uploadsimganimals/${item.img}`}
                    alt=""
                    className="portvolioimg"
                  />
                  <Card.Title className="titlefoto">{item.title}</Card.Title>
                  <Card.Text className="discriptionfoto">
                    {item.description}
                    <p>
                      {item.widthFoto}*{item.heightFoto}
                    </p>
                    Автор фотографии:
                    <p>
                       
                      {item.name} {item.fulname}
                    </p>
                    <p className="price">цена: 120р</p>
                    <button
                      className="button8"
                      onClick={() => handleAdd(item.id)}
                    >
                      купить
                    </button>
                  </Card.Text>
                </div>
              </>
            );
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
      axios
      .get("http://localhost:5000/selectimgpipls")
      .then((res) => {
        setSelectimagespipls(
          res.data.data.map((item, i) => {
            return (
              <>
                <div className="galereifoto">
                  <img
                    src={`http://localhost:5000/uploadsimgpipls/${item.img}`}
                    alt=""
                    className="portvolioimg"
                  />
                  <Card.Title className="titlefoto">{item.title}</Card.Title>
                  <Card.Text className="discriptionfoto">
                    {item.description}
                    <p>
                      {item.widthFoto}*{item.heightFoto}
                    </p>
                    Автор фотографии:
                    <p>
                       
                      {item.name} {item.fulname}
                    </p>
                    <p className="price">цена: 120р</p>
                    <button
                      className="button8"
                      onClick={() => handleAdd(item.id)}
                    >
                      купить
                    </button>
                  </Card.Text>
                </div>
              </>
            );
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:5000/selectimgsity")
      .then((res) => {
        setSelectimagessity(
          res.data.data.map((item, i) => {
            return (
              <>
                <div className="galereifoto">
                  <img
                    src={`http://localhost:5000/uploadsimgsity/${item.img}`}
                    alt=""
                    className="portvolioimg"
                  />
                  <Card.Title className="titlefoto">{item.title}</Card.Title>
                  <Card.Text className="discriptionfoto">
                    {item.description}
                    <p>
                      {item.widthFoto}*{item.heightFoto}
                    </p>
                    Автор фотографии:
                    <p>
                       
                      {item.name} {item.fulname}
                    </p>
                    <p className="price">цена: 120р</p>
                    <button
                      className="button8"
                      onClick={() => handleAdd(item.id)}
                    >
                      купить
                    </button>
                  </Card.Text>
                </div>
              </>
            );
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:5000/selectimgaesthetics")
      .then((res) => {
        setSelectimagesaesthetics(
          res.data.data.map((item, i) => {
            return (
              <>
                <div className="galereifoto">
                  <img
                    src={`http://localhost:5000/uploadsimgaesthetics/${item.img}`}
                    alt=""
                    className="portvolioimg"
                  />
                  <Card.Title className="titlefoto">{item.title}</Card.Title>
                  <Card.Text className="discriptionfoto">
                    {item.description}
                    <p>
                      {item.widthFoto}*{item.heightFoto}
                    </p>
                    Автор фотографии:
                    <p>
                       
                      {item.name} {item.fulname}
                    </p>
                    <p className="price">цена: 120р</p>
                    <button
                      className="button8"
                      onClick={() => handleAdd(item.id)}
                    >
                      купить
                    </button>
                  </Card.Text>
                </div>
              </>
            );
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  document.title = "Галерея";
  const test = () => {
    axios
      .get("http://localhost:5000/poiskimg", { params: { poist } })
      .then((res) => {
        setSelectpoisk(
          res.data.data.map((item, i) => {
            return (
              <>
                <div className="galereifoto">
                  <img
                    src={`http://localhost:5000/poiskimg/${item.img}`}
                    alt=""
                    className="portvolioimg"
                  />
                  <Card.Title className="titlefoto">{item.title}</Card.Title>
                  <Card.Text className="discriptionfoto">
                    {item.description}
                    <p>
                      {item.widthFoto}*{item.heightFoto}
                    </p>
                    <p className="price">цена: 120р</p>
                    <button
                      className="button8"
                      onClick={() => handleAdd(item.id)}
                    >
                      купить
                    </button>
                  </Card.Text>
                </div>
                <p className="poisk">Посмотрите и другие фотографии</p>
              </>
            );
          })
        );
      })
      .catch((err) => {
        console.error(err);
        console.log(err);
      });
  };
  const [poist, setPoist] = useState('')
  const zapros = (e)=>{
    setPoist(e.target.value)
    console.log(poist);
  }
  return (
    <>
      <div className="container">
        <div className="input-group galerei">
          <input
            type="search"
            className="form-control"
            placeholder="поиск изображения"
            aria-label="Search"
            aria-describedby="search-addon"
            onChange={zapros}
            value={poist}
          />
          <button
            type="submit"
            className="btn-galeri color-button"
            data-mdb-ripple-init
            onClick={test}
          >
            найти
          </button>
        </div>
      </div>
      <div className="Auth-form-galeri">
      <select
          id="reason"
          className="control-galerei"
          value={selectedForm}
          onChange={(e) => setForm(e.target.value)}
        >
          <option value="0">Выбрать категорию</option>
          <option value="1">Красота</option>
          <option value="2">Еда</option>
          <option value="3">Животные</option>
          <option value="4">Люди</option>
          <option value="5">Города</option>
          <option value="6">Эстетика</option>
        </select>
      </div>

      <>
      <Masonry columnsCount={3} gutter="20px" className="portvoliomasonry">
        {selectpoisk}
        </Masonry>
      {selectedForm == 0 ? (
        <Masonry columnsCount={3} gutter="20px" className="portvoliomasonry">
          {portvolio}
        </Masonry>
      ):selectedForm == 1 ? (
        <Masonry columnsCount={3} gutter="20px" className="portvoliomasonry">
        {selectimagesbeauty}
        </Masonry>
      ): selectedForm == 2 ? (
        <Masonry columnsCount={3} gutter="20px" className="portvoliomasonry">
        {selectimageseat}
        </Masonry>
      ): selectedForm == 3 ?(
        <Masonry columnsCount={3} gutter="20px" className="portvoliomasonry">
        {selectimagesanimals}
        </Masonry>
      ): selectedForm == 4 ? (
        <Masonry columnsCount={3} gutter="20px" className="portvoliomasonry">
        {selectimagespipls}
        </Masonry>
      ):selectedForm == 5 ? (
        <Masonry columnsCount={3} gutter="20px" className="portvoliomasonry">
        {selectimagessity}
        </Masonry>
      ): selectedForm == 6 ? (
        <Masonry columnsCount={3} gutter="20px" className="portvoliomasonry">
        {selectimagesaesthetics}
        </Masonry>
      ) : (<p></p>)
      }
        
        
      </>
    </>
  );
}
