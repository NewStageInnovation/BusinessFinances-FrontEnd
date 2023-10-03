import React from "react";
import FechaAyudaStyle from "../Styles/FechaAyudaStyle.css";

function PatrimonioNetoComponent() {
  return (
    <div className="body-ayuda-informativa">
      <div className="imagen">
        <img
          src="https://i.pinimg.com/736x/8d/79/78/8d79781f63f0a59bb8f5bd6a987089c4.jpg"
          alt=""
          srcset=""
          width={"100%"}
        />
      </div>
      El <b>patrimonio neto</b> de una empresa es la diferencia entre lo que
      posee y lo que debe. Si es positivo, indica buena salud financiera; si es
      negativo, pueden haber problemas financieros. Es como una foto instantánea
      de la situación económica de la empresa en un momento dado. Es importante
      para evaluar su salud financiera.
    </div>
  );
}

export default PatrimonioNetoComponent;
