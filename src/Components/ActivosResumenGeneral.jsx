import React from "react";
import FechaAyudaStyle from "../Styles/FechaAyudaStyle.css";

function ActivosResumenGeneral() {
  return (
    <div className="body-ayuda-informativa">
      <div className="imagen">
        <img
          src="https://flipinversiones.com/blog/wp-content/uploads/2022/07/Activos.jpg"
          alt=""
          srcset=""
          width={"100%"}
          style={{ marginBottom: 24 }}
        />
      </div>
      Los <b>gastos en activos</b> son inversiones a largo plazo en cosas como
      equipos, propiedades o tecnología que la empresa necesita para funcionar.
      En lugar de considerarlos como gastos regulares, los tratamos como activos
      valiosos que se van desgastando con el tiempo. Esto significa que los
      registramos en el balance general en lugar de cargarlos como gastos
      inmediatos en el estado de resultados. La idea es que estos activos
      contribuirán a generar ingresos en el futuro, por lo que los tratamos como
      inversiones que mantendrán su valor con el tiempo.
    </div>
  );
}

export default ActivosResumenGeneral;
