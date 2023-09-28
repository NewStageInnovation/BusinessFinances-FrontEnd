import React, { useState, useEffect } from "react";
import { getUser, getGastos, addGasto } from "../services/user";

// Contexto
import { ContextoMainProvider } from "../Pages/FormPage";

function MainProvider({ children }) {
  const [user, setUser] = useState();
  const [gastos, setGastos] = useState([]);

  const getUserData = async () => {
    const user = await getUser();
    setUser(user);
  };

  const fetchGastos = async () => {
    const gastos = await getGastos(user.correo);
    gastos.forEach((gasto) => {
      gasto.fecha = new Date(gasto.fecha).toLocaleDateString();
    });
    setGastos(gastos);
  };

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    if (user) {
      fetchGastos();
    }
  }, [user]);

  const addNewGasto = (gasto) => {
    addGasto(gasto, user.correo);
    gasto.fecha = new Date(gasto.fecha).toLocaleDateString();
    setGastos([...gastos, gasto]);
  };

  return (
    <ContextoMainProvider.Provider
      value={{ user: user, gastos: gastos, addNewGasto: addNewGasto }}
    >
      {children}
    </ContextoMainProvider.Provider>
  );
}

export default MainProvider;
