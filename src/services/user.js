import { API_BASE_URL } from "../config";
import axios from "axios";

export async function getUser(email) {
  const response = await axios
    .get(`${API_BASE_URL}/user/getUser/${email}`, {})
    .then((response) => {
      return response.data.user;
    });
  return response;
}

export async function addGasto(gasto, correo) {
  const response = await axios
    .post(`${API_BASE_URL}/user/addGasto/${correo}`, {
      gasto: gasto,
    })
    .then((response) => {
      return response.data.gastos;
    });
  return response;
}

export async function addIngreso(ingreso, correo) {
  const response = await axios
    .post(`${API_BASE_URL}/user/addIngreso/${correo}`, {
      ingreso: ingreso,
    })
    .then((response) => {
      return response.data.ingresos;
    });
  return response;
}

export async function addDeuda(deuda, correo){
    const response = await axios
    .post(`${API_BASE_URL}/user/addDeuda/${correo}`, {
        deuda: deuda,
    })
    .then((response) => {
        return response.data.deudas;
    });
    return response;
}

export async function getGastos(correo){
    const response = await axios
    .get(`${API_BASE_URL}/user/getGastos/${correo}`, {
    })
    .then((response) => {
        return response.data.gastos;
    });
    return response;
}

export async function getIngresos(correo){
    const response = await axios
    .get(`${API_BASE_URL}/user/getIngresos/${correo}`, {
    })
    .then((response) => {
        return response.data.ingresos;
    });
    return response;
}

export async function getDeudas(correo){
    const response = await axios
    .get(`${API_BASE_URL}/user/getDeudas/${correo}`, {
    })
    .then((response) => {
        return response.data.deudas;
    });
    return response;
}

export async function getGastosActivos(correo){
    const response = await axios
    .get(`${API_BASE_URL}/user/getGastosActivos/${correo}`, {
    })
    .then((response) => {
        return response.data.gastosActivos;
    });
    return response;
}

export async function getGastosPasivos(correo){
    const response = await axios
    .get(`${API_BASE_URL}/user/getGastosPasivos/${correo}`, {
    })
    .then((response) => {
        return response.data.gastosPasivos;
    });
    return response;
}

export async function getCapital(correo){
    const response = await axios
    .get(`${API_BASE_URL}/user/getCapital/${correo}`, {
    })
    .then((response) => {
        return response.data.capital;
    });
    return response;
}

export async function getPatrimonioNeto(correo){
    const response = await axios
    .get(`${API_BASE_URL}/user/getPatrimonioNeto/${correo}`, {
    })
    .then((response) => {
        return response.data.patrimonioNeto;
    });
    return response;
}

export async function getMargenCapital(correo){
    const response = await axios
    .get(`${API_BASE_URL}/user/getMargenCapital/${correo}`, {
    })
    .then((response) => {
        return response.data.margenCapital;
    });
    return response;
}

export async function getRazonEndeudamiento(correo){
    const response = await axios
    .get(`${API_BASE_URL}/user/getRazonEndeudamiento/${correo}`, {
    })
    .then((response) => {
        return response.data.razonEndeudamiento;
    });
    return response;
}

export async function getApalancamientoFinanciero(correo){
    const response = await axios
    .get(`${API_BASE_URL}/user/getApalancamientoFinanciero/${correo}`, {
    })
    .then((response) => {
        return response.data.apalancamientoFinanciero;
    });
    return response;
}