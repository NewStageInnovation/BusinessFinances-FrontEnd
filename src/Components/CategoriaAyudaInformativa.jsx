import React from "react";
import FechaAyudaStyle from "../Styles/FechaAyudaStyle.css";

function CategoriaAyudaInformativa() {
  return (
    <div className="body-ayuda-informativa">
      <div className="imagen">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR10H0lZ__GgdcKrkvhQcOefnitqP93l9RjsQ&usqp=CAU"
          alt=""
          srcset=""
          width={"100%"}
          style={{"margin-bottom": "24px"}}
        />
        <b>Gastos que se consideran activos: </b>
        <ol>
          <li>
            <b>Activos fijos: </b>
            Son aquellos que se utilizan para generar ingresos, como edificios,
            maquinaria, vehículos, etc.
          </li>
          <li>
            <b>Activos intangibles: </b>
            Son aquellos que no se pueden tocar, como patentes, marcas
            registradas, etc.
          </li>
        </ol>
        <b>Gastos que se consideran pasivos: </b>
        <ol>
          <li>
            <b>Gastos de operación: </b>
            Son aquellos que se realizan para mantener la operación de la
            empresa, como el pago de servicios, sueldos, etc.
          </li>
          <li>
            <b>Gastos financieros: </b>
            Son aquellos que se realizan para financiar la empresa, como el pago
            de intereses, etc.
          </li>
        </ol>
      </div>
    </div>
  );
}

export default CategoriaAyudaInformativa;
