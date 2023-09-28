import React, { useState, Fragment, useContext } from "react";
import EmptyDataComponent from "./EmptyDataComponent";
import TableDataComponent from "./TableDataComponent";
import NewRegisterComponent from "./NewRegisterComponent";
import NewRegisterButtons from "./NewRegisterButtons";
import { ContextoMainProvider } from "../Pages/FormPage";

function IngresosComponent(props) {
  const [nuevoIngreso, setNuevoIngreso] = useState({
    fecha: "",
    concepto: "",
    categoria: "",
    cantidad: 0,
  });
  const { ingresos, addNewIngreso } = useContext(ContextoMainProvider);

  const [añadirFlag, setAñadirFlag] = useState(false);

  const handleAñadirButton = () => {
    setAñadirFlag(true);
  };

  const handleCancelButton = () => {
    console.log("Cancelando...");
    setAñadirFlag(false);
  };

  const handleSaveButton = () => {
    addNewIngreso(nuevoIngreso);
    setAñadirFlag(false);
  };

  return (
    <Fragment>
      {ingresos.length > 0 ? (
        <Fragment>
          <TableDataComponent data={ingresos} />
          {añadirFlag ? (
            <Fragment>
              <NewRegisterComponent type={"ingresos"} setData={setNuevoIngreso} data={nuevoIngreso} />
              <NewRegisterButtons
                handleCancelButton={handleCancelButton}
                handleSaveButton={handleSaveButton}
              />
            </Fragment>
          ) : (
            <Fragment>
              <div className="add-button" onClick={handleAñadirButton}>
                Añadir Ingreso
              </div>
            </Fragment>
          )}
        </Fragment>
      ) : (
        <Fragment>
          {añadirFlag ? (
            <Fragment>
              <NewRegisterComponent type={"ingresos"} />
              <NewRegisterButtons
                handleCancelButton={handleCancelButton}
                handleSaveButton={handleSaveButton}
              />
            </Fragment>
          ) : (
            <EmptyDataComponent
              cta_text={"Ingreso"}
              handleAñadirButton={handleAñadirButton}
            />
          )}
        </Fragment>
      )}
    </Fragment>
  );
}

export default IngresosComponent;
