import React, { useState, Fragment, useContext, useEffect } from "react";
import EmptyDataComponent from "./EmptyDataComponent";
import TableDataComponent from "./TableDataComponent";
import NewRegisterComponent from "./NewRegisterComponent";
import NewRegisterButtons from "./NewRegisterButtons";
import { addGasto } from "../services/user";

import { ContextoMainProvider } from "../Pages/FormPage";

function GastosComponents(props) {
  const { gastos, addNewGasto} = useContext(ContextoMainProvider);

  const [añadirFlag, setAñadirFlag] = useState(false);
  const [nuevoGasto, setNuevoGasto] = useState({
    fecha: "",
    concepto: "",
    categoria: "",
    cantidad: 0,
  });

  const handleAñadirButton = () => {
    setAñadirFlag(true);
  };

  const handleCancelButton = () => {
    console.log("Cancelando...");
    setAñadirFlag(false);
  };

  const handleSaveButton = () => {
    addNewGasto(nuevoGasto);
    setAñadirFlag(false);
  };

  return (
    <Fragment>
      {gastos.length > 0 ? (
        <Fragment>
          <TableDataComponent data={gastos} />
          {añadirFlag ? (
            <Fragment>
              <NewRegisterComponent type={"gastos"} setData={setNuevoGasto} data={nuevoGasto} />
              <NewRegisterButtons
                handleCancelButton={handleCancelButton}
                handleSaveButton={handleSaveButton}
              />
            </Fragment>
          ) : (
            <Fragment>
              <div className="add-button" onClick={handleAñadirButton}>
                Añadir Gasto
              </div>
            </Fragment>
          )}
        </Fragment>
      ) : (
        <Fragment>
          {añadirFlag ? (
            <Fragment>
              <NewRegisterComponent type={"gastos"} setData={setNuevoGasto} data={nuevoGasto} />
              <NewRegisterButtons
                handleCancelButton={handleCancelButton}
                handleSaveButton={handleSaveButton}
              />
            </Fragment>
          ) : (
            <EmptyDataComponent
              cta_text={"Gasto"}
              handleAñadirButton={handleAñadirButton}
            />
          )}
        </Fragment>
      )}
    </Fragment>
  );
}

export default GastosComponents;
