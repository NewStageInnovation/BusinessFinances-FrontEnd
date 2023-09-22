import React from "react";
import FechaAyudaStyle from "../Styles/FechaAyudaStyle.css";

function PlazosComponent() {
  return (
    <div className="body-ayuda-informativa">
      <div className="imagen">
        <img
          src="https://www.debt.com/wp-content/uploads/2018/07/CONSOLIDACION-DE-DEUDAS-IMG.png"
          alt=""
          srcset=""
          width={"100%"}
          height={"200px"}
          style={{"marginBottom": "24px"}}
        />
      </div>
      Registrar los plazos de una deuda en un registro financiero es crucial
      para garantizar un flujo de efectivo saludable, mantener un buen historial
      crediticio y tomar decisiones informadas sobre la gestión de las
      obligaciones financieras.
      <br />
      <br />
      <b>
        Algunas de los beneficios de registrar los plazos son los siguientes:{" "}
      </b>
      <br />
      <ol>
        <li>
          <b>Priorización de Deudas: </b>
          Conocer los plazos permite priorizar las deudas según su urgencia y
          condiciones, lo que ayuda a asignar recursos financieros de manera
          eficiente.
        </li>
        <li>
          <b>Gestión de Flujo de Efectivo: </b>
          Facilita la gestión del flujo de efectivo al tener claridad sobre
          cuándo se deben realizar los pagos, lo que es fundamental tanto para
          individuos como para empresas.
        </li>
        <li>
          <b>Toma de Decisiones Informadas: </b>
          Ayuda en la toma de decisiones financieras al proporcionar una visión
          clara de las obligaciones financieras futuras y su impacto en la
          liquidez.
        </li>
        <li>
          <b>Reducción de Estrés Financiero: </b>
          Al tener un registro preciso de los plazos de deudas y cumplir con
          ellos, se reduce el estrés financiero y se promueve la estabilidad
          financiera.
        </li>
      </ol>
    </div>
  );
}

export default PlazosComponent;
