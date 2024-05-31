import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Author from "./components/Author";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import GalereiA from "./components/GalereiA";
import GalereiABeauty from "./components/GalereiABeauty";
import GalereiAEat from "./components/GalereiAEat";
import GalereiAAnimals from "./components/GalereiAAnimals";
import GalereiAPipls from "./components/GalereiAPipls";
import GalereiASity from "./components/GalereiASity";
import GalereiAAesthetics from "./components/GalereiAAesthetics";
import Header from "./components/Header/Header";
import HeaderUser from "./components/Header/HeaderUser";
import Home from "./components/Home";
import Kabinet from "./components/Kabinet";
import Korzina from "./components/Korzina";
import LichKabinetFotograf from "./components/LichKabinetFotograf";
import LichKabinetPolzovat from "./components/LichKabinetPolzovat";
import Portfolio from "./components/Portfolio";
import Reference from "./components/Reference";
import Registration from "./components/Registration";
import RegistrationUser from "./components/RegistrationUser";

import axios from "axios";
import Cookies from "js-cookie";

function App() {
  const [tab, setTab] = useState("effect");

  const [user, setUser] = useState(null);
  const [sessionId, setSessionId] = useState(null);

  const [cartItems, setCartItems] = useState([]);

  const fetchedCart = (sessionId) => {
    axios
      .get("https://collection.cleverapps.io/cart", { params: { sessionId: sessionId } })
      .then((response) => {
        if (response.data.success) {
          setCartItems(response.data.data);
          console.log(response.data.data);
        } else setCartItems(cartItems);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
          fetchedCart(session);
        })
        .catch((err) => {
          console.log(err);
          setUser(null);
        });
    } else {
      setUser(null);
    }
  }, []);

  return (
    <>
      <div>{user ? <HeaderUser /> : <Header />}</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GalereiA  user={user}/>} />
        <Route path="/gallery/красота" element={<GalereiABeauty  user={user}/>} />
        <Route path="/gallery/еда" element={<GalereiAEat  user={user}/>} />
        <Route path="/gallery/животные" element={<GalereiAAnimals  user={user}/>} />
        <Route path="/gallery/люди" element={<GalereiAPipls  user={user}/>} />
        <Route path="/gallery/город" element={<GalereiASity  user={user}/>} />
        <Route path="/gallery/эстетика" element={<GalereiAAesthetics  user={user}/>} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/reference" element={<Reference />} />
        <Route path="/author" element={<Author />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/registrationuser" element={<RegistrationUser />} />
        <Route path="/personal_account" element={<LichKabinetPolzovat />} />
        <Route
          path="/personal_account_fotograf"
          element={<LichKabinetFotograf />}
        />
        <Route path="/kabinet" element={<Kabinet />} />
        <Route
          path="/korzina"
          element={
            <Korzina
              cartItems={cartItems}
              user={user}
              fetchedCart={fetchedCart}
            />
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
