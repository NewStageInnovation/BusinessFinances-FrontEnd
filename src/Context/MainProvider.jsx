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
  getCapital,
  getPatrimonioNeto,
} from "../services/user";

// Contexto
import { ContextoMainProvider } from "../Pages/FormPage";

function MainProvider({ children }) {
  const [user, setUser] = useState();
  const [gastos, setGastos] = useState([]);
  const [ingresos, setIngresos] = useState([]);
  const [deudas, setDeudas] = useState([]);
  const [gastosActivos, setGastosActivos] = useState(0);
  const [gastosPasivos, setGastosPasivos] = useState(0);
  const [capital, setCapital] = useState(0);
  const [patrimonioNeto, setPatrimonioNeto] = useState(0);

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
    setGastosActivos(gastosActivos);
  }

  const fetchCapital = async () => {
    const capital = await getCapital(user.correo);
    setCapital(capital);
  }

  const fetchGastosPasivos = async () => {
    const gastosPasivos = await getGastosPasivos(user.correo);
    setGastosPasivos(gastosPasivos);
  }

  const fetchPatrimonioNeto = async () => {
    const patrimonioNeto = await getPatrimonioNeto(user.correo);
    setPatrimonioNeto(patrimonioNeto);
  }

  const fetchData = async () => {
    await fetchGastos();
    await fetchIngresos();
    await fetchDeudas();
    await fetchGastosActivos();
    await fetchGastosPasivos();
    await fetchCapital();
    await fetchPatrimonioNeto();
  }

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user]);

  const addNewGasto = async (gasto) => {
    addGasto(gasto, user.correo);
    gasto.fecha = new Date(gasto.fecha).toLocaleDateString();
    setGastos([...gastos, gasto]);
    await fetchData();
  };

  const addNewIngreso = async (ingreso) => {
    addIngreso(ingreso, user.correo);
    ingreso.fecha = new Date(ingreso.fecha).toLocaleDateString();
    setIngresos([...ingresos, ingreso]);
    await fetchData();
  };

  const addNewDeuda = async (deuda) => {
    addDeuda(deuda, user.correo);
    deuda.fechaInicio = new Date(deuda.fechaInicio).toLocaleDateString();
    setDeudas([...deudas, deuda]);
    await fetchData();
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
        capital: capital,
        patrimonioNeto: patrimonioNeto,
      }}
    >
      {children}
    </ContextoMainProvider.Provider>
  );
}

export default MainProvider;
