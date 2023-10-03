import React from "react";
import FechaAyudaStyle from "../Styles/FechaAyudaStyle.css";

function RazonEndeudamiento() {
  return (
    <div className="body-ayuda-informativa">
      <div className="imagen">
        <img
          src="https://www.lifeder.com/wp-content/uploads/2019/05/Razones-de-endeudamiento-pixabay.jpg"
          alt=""
          srcset=""
          width={"100%"}
          style={{ marginBottom: "24px" }}
        />
      </div>
      La <b>razón de endeudamiento</b> es una métrica financiera que nos dice
      cuánto dinero debe una empresa en comparación con cuánto dinero tiene en
      total. La razón de endeudamiento es como dividir lo que deben entre lo que
      tienen.
      <br />
      <br />
      Ahora, la interpretación de esta métrica es clave:
      <br />
      <br />
      <ol>
        <li>
          <b>Baja Razón de Endeudamiento: </b>
          Si la razón de endeudamiento es baja, digamos 0.2 o 20%, significa que
          la empresa debe una pequeña parte de lo que realmente posee. Esto
          suele ser una señal positiva, indicando que la empresa no está cargada
          de deudas y tiene margen de seguridad financiera.
        </li>
        <li>
          <b>Razón de Endeudamiento Moderada: </b>
          Si la métrica está en un rango intermedio, por ejemplo, 0.5 a 0.7 o
          50% a 70%, esto sugiere que la empresa tiene un equilibrio razonable
          entre sus deudas y sus activos. Es una posición financiera sólida,
          pero con cierto nivel de endeudamiento para financiar operaciones o
          expansiones.
        </li>
        <li>
          <b>Alta Razón de Endeudamiento: </b>
          Cuando la razón de endeudamiento es alta, como 0.8 o 80% o más, indica
          que la empresa debe una gran parte de lo que posee. Esto puede ser
          arriesgado, ya que el pago de intereses y la gestión de la deuda
          pueden ser difíciles si las ganancias no son consistentes.
        </li>
      </ol>
    </div>
  );
}

export default RazonEndeudamiento;
