import React, { useState, Fragment, useContext } from "react";
import EmptyDataComponent from "./EmptyDataComponent";
import TableDataComponent from "./TableDataComponent";
import NewRegisterComponent from "./NewRegisterComponent";
import NewRegisterButtons from "./NewRegisterButtons";
import { ContextoMainProvider } from "../Pages/FormPage";


function DeudasComponent(props) {
  const [nuevaDeuda, setNuevaDeuda] = useState({
    fechaInicio: "",
    plazos: "",
    monto: 0,
    entidad: "",
    interes: 0,
  });

  const { deudas, addNewDeuda } = useContext(ContextoMainProvider);

  const [añadirFlag, setAñadirFlag] = useState(false);

  const handleAñadirButton = () => {
    setAñadirFlag(true);
  };

  const handleCancelButton = () => {
    console.log("Cancelando...");
    setAñadirFlag(false);
  };

  const handleSaveButton = () => {
    addNewDeuda(nuevaDeuda);
    setAñadirFlag(false);
  };

  return (
    <Fragment>
      {deudas.length > 0 ? (
        <Fragment>
          <TableDataComponent data={deudas} />
          {añadirFlag ? (
            <Fragment>
              <NewRegisterComponent type={"deudas"} setData={setNuevaDeuda} data={nuevaDeuda} />
              <NewRegisterButtons
                handleCancelButton={handleCancelButton}
                handleSaveButton={handleSaveButton}
              />
            </Fragment>
          ) : (
            <Fragment>
              <div className="add-button" onClick={handleAñadirButton}>
                Añadir Deuda
              </div>
            </Fragment>
          )}
        </Fragment>
      ) : (
        <Fragment>
          {añadirFlag ? (
            <Fragment>
              <NewRegisterComponent type={"deudas"} setData={setNuevaDeuda} data={nuevaDeuda} />
              <NewRegisterButtons
                handleCancelButton={handleCancelButton}
                handleSaveButton={handleSaveButton}
              />
            </Fragment>
          ) : (
            <EmptyDataComponent
              cta_text={"Deuda"}
              handleAñadirButton={handleAñadirButton}
            />
          )}
        </Fragment>
      )}
    </Fragment>
  );
}

export default DeudasComponent;
