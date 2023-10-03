import React from "react";
import FechaAyudaStyle from "../Styles/FechaAyudaStyle.css";

function CategoriaIngresosAyudaInformativa() {
  return (
    <div className="body-ayuda-informativa">
      <div className="imagen">
        <img
          src="https://img.freepik.com/vector-premium/ingresos-pasivos-comparacion-ingresos-activos-obtenidos-traves-esfuerzo-o-produccion_518018-1296.jpg"
          alt=""
          srcset=""
          width={"100%"}
          height={"300px"}
        />
        Los ingresos pasivos y los ingresos activos son dos formas diferentes de
        obtener dinero, y cada uno tiene sus propias características y ventajas.
        Aquí te explico la diferencia entre ambos:
        <br />
        <br />
        <b>Ingresos pasivos</b>
        <ol>
          <li>
            <b>Menos Esfuerzo Continuo: </b>
            Los ingresos pasivos implican un esfuerzo inicial significativo,
            pero luego requieren menos o ningún esfuerzo continuo para
            mantenerse. Esto significa que puedes ganar dinero incluso cuando no
            estás trabajando activamente.
          </li>
          <li>
            <b>Diversas Fuentes: </b>
            Los ingresos pasivos pueden provenir de diversas fuentes, como
            inversiones, ingresos por alquiler de propiedades, ingresos por
            regalías de propiedad intelectual, ingresos por inversiones en
            negocios u otros activos.
          </li>
          <li>
            <b>Escalabilidad: </b>
            Los ingresos pasivos a menudo tienen un mayor potencial de
            crecimiento a largo plazo, ya que no están limitados por el tiempo
            que puedes dedicar a ellos. Puedes diversificar tus fuentes de
            ingresos pasivos para aumentar tus ganancias.
          </li>
        </ol>
        <br />
        <b>Ingresos activos</b>
        <ol>
          <li>
            <b>Esfuerzo Continuo: </b>
            Los ingresos activos requieren un esfuerzo continuo para generar
            ingresos. Esto significa que no puedes ganar dinero si no estás
            trabajando activamente.
          </li>
          <li>
            <b>Fuentes Limitadas: </b>
            Los ingresos activos provienen de una fuente, como un trabajo o
            negocio. Esto significa que tus ingresos activos están limitados por
            el tiempo que puedes dedicar a ellos.
          </li>
          <li>
            <b>Escalabilidad Limitada: </b>
            Los ingresos activos tienen un potencial de crecimiento limitado a
            largo plazo, ya que están limitados por el tiempo que puedes dedicar
            a ellos. Esto significa que no puedes diversificar tus fuentes de
            ingresos activos para aumentar tus ganancias.
          </li>
        </ol>
      </div>
    </div>
  );
}

export default CategoriaIngresosAyudaInformativa;
