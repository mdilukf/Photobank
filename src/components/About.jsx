import logo5 from "../img/rubachci.jpg";
import logo6 from "../img/pole.jpg";
import logo7 from "../img/3.jpg";
import logo8 from "../img/4.jpg";

export default function About() {
  document.title = "О Нас";
  return (
    <>
      <div className="o-nas">
        <div className="jumbotron3">
          <div className="container">
            <h1 className="display-4"> Фотобак collection </h1>
            <h4 className="display-5">
              Огромное количество стоковых фотографий по приемлимым ценам{" "}
            </h4>
          </div>
        </div>
      </div>

      <div className="row justify-content-center d-flex photos">
        <div className="col-lg-4  justify-content-center d-flex">
          <div className="content-o-nas photos">
            <h2>
              Площадка для поиска той самой фотографии, которая нужна именно
              вам. Имя фотографа что понравился вам больше всего
            </h2>
          </div>
        </div>

        <div className="col-lg-4  justify-content-center photos" >
          <div className="content-o-nas-1">
            <div class="gallery">
              <figure class="gallery__item gallery__item--1">
                <img src={logo5} class="gallery__img" alt="Image 1" />
              </figure>
              <figure class="gallery__item gallery__item--2">
                <img src={logo6} class="gallery__img" alt="Image 2" />
              </figure>
              <figure class="gallery__item gallery__item--3">
                <img src={logo7} class="gallery__img" alt="Image 3" />
              </figure>
              <figure class="gallery__item gallery__item--4">
                <img src={logo8} class="gallery__img" alt="Image 4" />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <h1 className="o-nas-h1">Цены на фотографии</h1>
      <div className="row justify-content-center d-flex photos">
        <div className="col-4  justify-content-center d-flex">
          <div className="content-prais">
            <h2>1 штука</h2>
            <h3>от 120 руб</h3>
          </div>
        </div>
        <div className="col-4 justify-content-center d-flex">
          <div className="content-prais">
            <h2>5 штука</h2>
            <h3>от 650 руб</h3>
          </div>
        </div>
        <div className="col-4 justify-content-center d-flex">
          <div className="content-prais">
            <h2>10 штук</h2>
            <h3>от 1000 руб</h3>
          </div>
        </div>
      </div>
    </>
  );
}
