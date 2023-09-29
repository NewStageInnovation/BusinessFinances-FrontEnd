import React, { useState, useEffect } from "react";
import {
  getUser,
  getGastos,
  addGasto,
  getIngresos,
  addIngreso,
  addDeuda,
  getDeudas,
  getGastosActivos,
  getGastosPasivos,
} from "../services/user";

// Contexto
import { ContextoMainProvider } from "../Pages/FormPage";

function MainProvider({ children }) {
  const [user, setUser] = useState();
  const [gastos, setGastos] = useState([]);
  const [ingresos, setIngresos] = useState([]);
  const [deudas, setDeudas] = useState([]);
  const [gastosActivos, setGastosActivos] = useState([]);
  const [gastosPasivos, setGastosPasivos] = useState([]);

  const getUserData = async () => {
    const email = "test_01@google.com";
    const user = await getUser(email);
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

  const fetchDeudas = async () => {
    const deudas = await getDeudas(user.correo);
    deudas.forEach((deuda) => {
      deuda.fechaInicio = new Date(deuda.fechaInicio).toLocaleDateString();
    });
    setDeudas(deudas);
  };

  const fetchGastosActivos = async () => {
    const gastosActivos = await getGastosActivos(user.correo);
    const newGastos = [];
    gastosActivos.forEach((gasto) => {
      newGastos.push({concepto: gasto.concepto, cantidad: gasto.cantidad});
    });
    setGastosActivos(newGastos);
  }

  const fetchGastosPasivos = async () => {
    const gastosPasivos = await getGastosPasivos(user.correo);
    const newGastos = [];
    gastosPasivos.forEach((gasto) => {
      newGastos.push({concepto: gasto.concepto, cantidad: gasto.cantidad});
    });
    setGastosPasivos(newGastos);
  }

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    if (user) {
      fetchGastos();
      fetchIngresos();
      fetchDeudas();
      fetchGastosActivos();
      fetchGastosPasivos();
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
  };

  const addNewDeuda = (deuda) => {
    addDeuda(deuda, user.correo);
    deuda.fechaInicio = new Date(deuda.fechaInicio).toLocaleDateString();
    setDeudas([...deudas, deuda]);
  };

  return (
    <ContextoMainProvider.Provider
      value={{
        user: user,
        gastos: gastos,
        addNewGasto: addNewGasto,
        ingresos: ingresos,
        addNewIngreso: addNewIngreso,
        deudas: deudas,
        addNewDeuda: addNewDeuda,
        gastosActivos: gastosActivos,
        gastosPasivos: gastosPasivos,
      }}
    >
      {children}
    </ContextoMainProvider.Provider>
  );
}

export default MainProvider;
