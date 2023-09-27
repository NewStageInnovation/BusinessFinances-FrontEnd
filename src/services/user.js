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
      return response.data.user;
    });
  return response;
}
