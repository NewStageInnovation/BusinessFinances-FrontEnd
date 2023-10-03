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
  getMargenCapital,
  getRazonEndeudamiento,
  getApalancamientoFinanciero,
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
  const [margenCapital, setMargenCapital] = useState(0);
  const [razonEndeudamiento, setRazonEndeudamiento] = useState(0);
  const [apalancamientoFinanciero, setApalancamientoFinanciero] = useState(0);

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

  const fetchMargenCapital = async () => {
    const margenCapital = await getMargenCapital(user.correo);
    setMargenCapital(margenCapital);
  }

  const fetchRazonEndeudamiento = async () => {
    const razonEndeudamiento = await getRazonEndeudamiento(user.correo);
    setRazonEndeudamiento(razonEndeudamiento);
  }

  const fetchApalancamientoFinanciero = async () => {
    const apalancamientoFinanciero = await getApalancamientoFinanciero(user.correo);
    setApalancamientoFinanciero(apalancamientoFinanciero);
  }

  const fetchData = async () => {
    await fetchGastos();
    await fetchIngresos();
    await fetchDeudas();
    await fetchGastosActivos();
    await fetchGastosPasivos();
    await fetchCapital();
    await fetchPatrimonioNeto();
    await fetchMargenCapital();
    await fetchRazonEndeudamiento();
    await fetchApalancamientoFinanciero();
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
        margenCapital: margenCapital,
        razonEndeudamiento: razonEndeudamiento,
        apalancamientoFinanciero: apalancamientoFinanciero,
      }}
    >
      {children}
    </ContextoMainProvider.Provider>
  );
}

export default MainProvider;
