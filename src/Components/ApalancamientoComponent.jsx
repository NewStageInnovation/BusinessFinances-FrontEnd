import React from "react";
import FechaAyudaStyle from "../Styles/FechaAyudaStyle.css";

function ApalancamientoComponent() {
  return (
    <div className="body-ayuda-informativa">
      <div className="imagen">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaja6UDzbxdsCw7x-MD--oo3Fq-ZCZOvHFlw&usqp=CAU"
          alt=""
          srcset=""
          width={"100%"}
          style={{"marginBottom": "24px"}}
        />
      </div>
      El <b>apalancamiento financiero</b> es como usar préstamos para aumentar
      ganancias o pérdidas. Ayuda a evaluar si una empresa está utilizando deuda
      de manera segura y si puede generar ganancias suficientes para
      respaldarla.
      <br />
      <br />
      Interpretar los datos de la métrica de apalancamiento financiero es
      crucial para comprender la salud financiera de una empresa. Esta métrica
      se expresa generalmente como una proporción o un porcentaje.
      <br />
      <br />
      <ol>
        <li>
          <b>Bajo Apalancamiento Financiero: </b>
          Si la métrica es baja (por ejemplo, 0.2 o 20%), significa que la
          empresa está utilizando una cantidad relativamente pequeña de deuda en
          comparación con su propio capital. Esto suele indicar una situación
          financiera sólida y baja exposición al riesgo financiero.
        </li>
        <li>
          <b>Apalancamiento Financiero Moderado: </b>
          Un apalancamiento financiero en un rango intermedio (por ejemplo, 0.5
          a 0.7 o 50% a 70%) sugiere un equilibrio razonable entre el uso de
          deuda y capital propio. La empresa puede estar buscando oportunidades
          de crecimiento sin asumir un riesgo excesivo.
        </li>
        <li>
          <b>Alto Apalancamiento Financiero: </b>
          Cuando la métrica es alta (por ejemplo, 0.8 o 80% o más), esto indica
          que la empresa está utilizando una cantidad significativa de deuda en
          relación con su capital propio. Aunque puede amplificar las ganancias
          en tiempos buenos, también aumenta el riesgo de pérdidas en tiempos
          difíciles debido a los pagos de intereses y deuda.
        </li>
      </ol>
    </div>
  );
}

export default ApalancamientoComponent;
