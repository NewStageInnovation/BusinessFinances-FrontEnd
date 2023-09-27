import React, { Fragment, useState } from "react";
import NewRegisterStyle from "../Styles/NewRegisterStyle.css";
import AyudaInformativaComponent from "./AyudaInformativaComponent";
import FechaAyudaInformativa from "./FechaAyudaInformativa";
import ConceptoAyudaInformativa from "./ConceptoAyudaInformativa";
import CategoriaAyudaInformativa from "./CategoriaAyudaInformativa";
import CategoriaIngresosAyudaInformativa from "./CategoriaIngresosAyudaInformativa";
import MontoAyudaInformativa from "./MontoAyudaInformativa";
import FechaInicioDeuda from "./FechaInicioDeuda";
import PlazosComponent from "./PlazosComponent";
import EntidadComponent from "./EntidadComponent";
import InteresComponent from "./InteresComponent";

import { TextInputField } from "evergreen-ui";
import { SelectField, option } from "evergreen-ui";

function NewRegisterComponent(props) {
  const { type, setData, data} = props;
  let component = <Fragment></Fragment>;
  switch (type) {
    case "gastos":
      component = (
        <Fragment>
          <TextInputField
            isInvalid={false}
            type="date"
            label={
              <div className="new-register-title">
                {" "}
                <AyudaInformativaComponent
                  data={<FechaAyudaInformativa />}
                  title={"Importancia de la fecha en registros financieros"}
                />{" "}
                Fecha
              </div>
            }
            onChange={(e) => {
              setData({ ...data, fecha: e.target.value });
            }}
          />
          <TextInputField
            isInvalid={false}
            type="text"
            label={
              <div className="new-register-title">
                {" "}
                <AyudaInformativaComponent
                  data={<ConceptoAyudaInformativa />}
                  title={"Importancia del concepto en registros financieros"}
                />{" "}
                Concepto
              </div>
            }
            onChange={(e) => {
              setData({ ...data, concepto: e.target.value });
            }}
          />
          <SelectField
            isInvalid={false}
            label={
              <div className="new-register-title">
                {" "}
                <AyudaInformativaComponent
                  data={<CategoriaAyudaInformativa />}
                  title={"Gastos Activos vs Gastos Pasivos"}
                />{" "}
                Categoría
              </div>
            }
            onChange={(e) => {
              setData({ ...data, categoria: e.target.value });
            }}
            width={"150px"}
          >
            <option value="activo" selected>
              Pasivo
            </option>
            <option value="pasivo">Activo</option>
          </SelectField>
          <TextInputField
            isInvalid={false}
            type="number"
            label={
              <div className="new-register-title">
                {" "}
                <AyudaInformativaComponent
                  data={<MontoAyudaInformativa />}
                  title={"Importancia del registro de cantidad"}
                />{" "}
                Cantidad
              </div>
            }
            onChange={(e) => {
              setData({ ...data, cantidad: e.target.value });
            }}
          />
        </Fragment>
      );
      break;
    case "ingresos":
      component = (
        <Fragment>
          <TextInputField
            isInvalid={false}
            type="date"
            label={
              <div className="new-register-title">
                {" "}
                <AyudaInformativaComponent
                  data={<FechaAyudaInformativa />}
                  title={"Importancia de la fecha en registros financieros"}
                />{" "}
                Fecha
              </div>
            }
            onChange={(e) => {
              setData({ ...data, fecha: e.target.value });
            }}
          />
          <TextInputField
            isInvalid={false}
            type="text"
            label={
              <div className="new-register-title">
                {" "}
                <AyudaInformativaComponent
                  data={<ConceptoAyudaInformativa />}
                  title={"Importancia del concepto en registros financieros"}
                />{" "}
                Concepto
              </div>
            }
            onChange={(e) => {
              setData({ ...data, concepto: e.target.value });
            }}
          />
          <SelectField
            isInvalid={false}
            label={
              <div className="new-register-title">
                {" "}
                <AyudaInformativaComponent
                  data={<CategoriaIngresosAyudaInformativa />}
                  title={"Ingresos Activos vs Ingresos Pasivos"}
                />{" "}
                Categoría
              </div>
            }
            onChange={(e) => {
              setData({ ...data, categoria: e.target.value });
            }}
            width={"150px"}
          >
            <option value="activo" selected>
              Pasivo
            </option>
            <option value="pasivo">Activo</option>
          </SelectField>
          <TextInputField
            isInvalid={false}
            type="number"
            label={
              <div className="new-register-title">
                {" "}
                <AyudaInformativaComponent
                  data={<MontoAyudaInformativa />}
                  title={"Importancia del registro de cantidad"}
                />{" "}
                Cantidad
              </div>
            }
            onChange={(e) => {
              setData({ ...data, cantidad: e.target.value });
            }}
          />
        </Fragment>
      );
      break;
    case "deudas":
      component = (
        <Fragment>
          <TextInputField
            isInvalid={false}
            type="date"
            label={
              <div className="new-register-title">
                {" "}
                <AyudaInformativaComponent data={<FechaInicioDeuda/>} title={"Importancia de la fecha de inicio"} /> Fecha inicio
              </div>
            }
            onChange={(e) => {
              setData({ ...data, fecha: e.target.value });
            }}
          />
          <TextInputField
            isInvalid={false}
            type="number"
            label={
              <div className="new-register-title">
                {" "}
                <AyudaInformativaComponent data={<PlazosComponent/>} title={"¿Por qué registrar los plazos?"} /> Plazos
              </div>
            }
            onChange={(e) => {
              setData({ ...data, plazos: e.target.value });
            }}
          />
          <TextInputField
            isInvalid={false}
            type="number"
            label={
              <div className="new-register-title">
                {" "}
                <AyudaInformativaComponent data={<MontoAyudaInformativa/>} title={"Importancia de registrar el cantidad"} /> Cantidad
              </div>
            }
            onChange={(e) => {
              setData({ ...data, cantidad: e.target.value });
            }}
          />
          <TextInputField
            isInvalid={false}
            type="text"
            label={
              <div className="new-register-title">
                {" "}
                <AyudaInformativaComponent data={<EntidadComponent/>} title={"La entidad en registros financieros"} /> Entidad
              </div>
            }
            onChange={(e) => {
              setData({ ...data, entidad: e.target.value });
            }}
          />
          <TextInputField
            isInvalid={false}
            type="number"
            label={
              <div className="new-register-title">
                {" "}
                <AyudaInformativaComponent data={<InteresComponent/>} title={"El papel del interés en una deuda"} /> Interés
              </div>
            }
            onChange={(e) => {
              setData({ ...data, interes: e.target.value });
            }}
          />
        </Fragment>
      );
      break;
    default:
      component = <Fragment></Fragment>;
      break;
  }

  return <div className="new-register-container">{component}</div>;
}

export default NewRegisterComponent;
