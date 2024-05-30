import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import LichKabinetFotograf from "../components/LichKabinetFotograf";
import LichKabinetPolzovat from "../components/LichKabinetPolzovat";

export default function Kabinet() {
  const [sessionId, setSessionId] = useState(null);
  const [user, setUser] = useState([]);
  const [message, setMessage] = useState(Cookies.get("session"));

  useEffect(() => {
    const session = Cookies.get("session");
    setSessionId(session);
    if (session) {
      axios
        .get("http://localhost:5000/checkSession", {
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

  return (
    <>
      {user ? (
        user.selectetForm == "polzovatel" ? (
          <LichKabinetPolzovat />
        ) : user.selectetForm == "fotograf" ? (
          <LichKabinetFotograf />
        ) : (
          "Польлзователь не найден!"
        )
      ) : (
        "Не авторизован!"
      )}
    </>
  );
}
