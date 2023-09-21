import React, { Fragment, useState } from "react";
import NewRegisterStyle from "../Styles/NewRegisterStyle.css";
import AyudaInformativaComponent from "./AyudaInformativaComponent";
import FechaAyudaInformativa from "./FechaAyudaInformativa";
import ConceptoAyudaInformativa from "./ConceptoAyudaInformativa";
import CategoriaAyudaInformativa from "./CategoriaAyudaInformativa";
import MontoAyudaInformativa from "./MontoAyudaInformativa";

import { TextInputField } from "evergreen-ui";
import { SelectField, option } from "evergreen-ui";

function NewRegisterComponent(props) {
  const { type, handleCancelButton, handleSaveButton } = props;
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
                  title={"Importancia del registro de monto"}
                />{" "}
                Monto
              </div>
            }
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
                <AyudaInformativaComponent /> Fecha
              </div>
            }
          />
          <TextInputField
            isInvalid={false}
            type="text"
            label={
              <div className="new-register-title">
                {" "}
                <AyudaInformativaComponent /> Concepto
              </div>
            }
          />
          <TextInputField
            isInvalid={false}
            label={
              <div className="new-register-title">
                {" "}
                <AyudaInformativaComponent /> Categoría
              </div>
            }
          />
          <TextInputField
            isInvalid={false}
            type="number"
            label={
              <div className="new-register-title">
                {" "}
                <AyudaInformativaComponent /> Cantidad
              </div>
            }
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
                <AyudaInformativaComponent /> Fecha inicio
              </div>
            }
          />
          <TextInputField
            isInvalid={false}
            type="number"
            label={
              <div className="new-register-title">
                {" "}
                <AyudaInformativaComponent /> Plazos
              </div>
            }
          />
          <TextInputField
            isInvalid={false}
            type="number"
            label={
              <div className="new-register-title">
                {" "}
                <AyudaInformativaComponent /> Monto
              </div>
            }
          />
          <TextInputField
            isInvalid={false}
            type="text"
            label={
              <div className="new-register-title">
                {" "}
                <AyudaInformativaComponent /> Entidad
              </div>
            }
          />
          <TextInputField
            isInvalid={false}
            type="number"
            label={
              <div className="new-register-title">
                {" "}
                <AyudaInformativaComponent /> Interés
              </div>
            }
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
