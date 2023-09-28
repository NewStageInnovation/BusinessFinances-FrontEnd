import React, { useState, useEffect } from "react";
import { getUser, getGastos, addGasto, getIngresos, addIngreso } from "../services/user";

// Contexto
import { ContextoMainProvider } from "../Pages/FormPage";

function MainProvider({ children }) {
  const [user, setUser] = useState();
  const [gastos, setGastos] = useState([]);
  const [ingresos, setIngresos] = useState([]);

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

  const fetchIngresos = async () => {
    const ingresos = await getIngresos(user.correo);
    ingresos.forEach((ingreso) => {
      ingreso.fecha = new Date(ingreso.fecha).toLocaleDateString();
    });
    setIngresos(ingresos);
  };

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    if (user) {
      fetchGastos();
      fetchIngresos();
    }
  }, [user]);

  const addNewGasto = (gasto) => {
    addGasto(gasto, user.correo);
    gasto.fecha = new Date(gasto.fecha).toLocaleDateString();
    setGastos([...gastos, gasto]);
  };

  const addNewIngreso = (ingreso) => {
    addIngreso(ingreso, user.correo);
    ingreso.fecha = new Date(ingreso.fecha).toLocaleDateString();
    setIngresos([...ingresos, ingreso]);
  }

  return (
    <ContextoMainProvider.Provider
      value={{ user: user, gastos: gastos, addNewGasto: addNewGasto, ingresos: ingresos, addNewIngreso: addNewIngreso}}
    >
      {children}
    </ContextoMainProvider.Provider>
  );
}

export default MainProvider;
