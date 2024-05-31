import axios from "axios";
import JSZip from "jszip";
import { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";

export default function Korzina(props) {
  useEffect(() => {
    if (props.user) props.fetchedCart(props.user.sessionId);
  }, []);

  const handlePay = async () => {
    const zip = new JSZip();
    const promises = props.cartItems.map((element) =>
      axios
        .get(`https://collection.cleverapps.io/uploadsimg/${element.img}`, {
          responseType: "arraybuffer",
        })
        .then((response) => {
          zip.file(`${element.title}.jpg`, response.data, {
            binary: true,
          });
        })
        .catch((err) => {
          console.log(err);
        })
    );
    await Promise.all(promises);
    zip
      .generateAsync({ type: "blob" })
      .then((content) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(content);
        link.download = "images.zip";
        link.click();
        axios
          .put("https://collection.cleverapps.io/cart_pay", {
            user_id: props.user.userId,
          })
          .then((res) => {
            if (res.data.success) {
              props.fetchedCart(props.user.sessionId);
            }
            console.log(res);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete("https://collection.cleverapps.io/delete_cart", { params: { id } })
      .then((response) => {
        if (response.data.success) {
          props.fetchedCart(props.user.sessionId);
          console.log(response);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {props.user !== null ? (
        props.cartItems.length > 0 ? (
          <>
            <h1>Добавленные изображения:</h1>
            <Row className="gap-3 p-5 d-flex h-100" style={{background: 'none', marginLeft: '10px', marginRight: '0px'}}>
              {props.cartItems.map((element, index) => (
                <Col
                  style={{ maxHeight: "600px", border: '1px solid white', background: '#111230'}}
                  className="d-flex p-4 justify-content-center align-items-center flex-column"
                  id={element.id}
                >
                  <img
                    src={"https://collection.cleverapps.io/uploadsimg/" + element.img}
                    className="img-fluid w-100 h-100 object-fit-cover "
                  />
                  <span style={{background: 'none', marginTop: '10px'}}>{element.title}</span>
                  <span style={{background: 'none'}}>{element.description}</span>
                  <div>
                    <Button onClick={() => handleDelete(element.id)} style={{marginTop: '10px'}}>
                      Удалить
                    </Button>
                  </div>
                </Col>
              ))}
              <button className="button9" onClick={handlePay}>
                Оплатить
              </button>
            </Row>
          </>
        ) : (
          <h1>Коризна пустая!</h1>
        )
      ) : (
        <h1>Для просмотра корзины необоходимо авторизоваться!</h1>
      )}
    </>
  );
}
