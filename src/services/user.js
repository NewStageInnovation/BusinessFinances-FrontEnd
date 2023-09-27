import { API_BASE_URL } from "../config";
import axios from "axios";

export async function getUser(email) {
  const response = await axios
    .post(`${API_BASE_URL}/user/getUser`, {
      body: {
        correo: email,
      },
    })
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


