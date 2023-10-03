import React from "react";
import FechaAyudaStyle from "../Styles/FechaAyudaStyle.css";

function CapitalResumenGeneral() {
  return (
    <div className="body-ayuda-informativa">
      <div className="imagen">
        <img
          src="https://www.factura-e.mx/blog/wp-content/uploads/2016/02/Capital-Economico.jpg"
          alt=""
          srcset=""
          width={"100%"}
          style={{ marginBottom: 24 }}
        />
      </div>
      El <b>capital</b> es la suma de dinero que una empresa tiene disponible
      para realizar sus actividades. El capital se puede obtener de dos formas:
      <br />
      <br />
      <ol>
        <li>
          <b>Capital propio: </b>
          Es el dinero que los dueños de la empresa invierten en ella. Se conoce
          como capital propio porque los dueños son los propietarios de la
          empresa.
        </li>
        <li>
          <b>Capital ajeno: </b>
          Es el dinero que la empresa obtiene de otras personas o empresas. Por
          ejemplo, cuando una empresa solicita un préstamo a un banco, el dinero
          que recibe es capital ajeno.
        </li>
      </ol>
    </div>
  );
}

export default CapitalResumenGeneral;
