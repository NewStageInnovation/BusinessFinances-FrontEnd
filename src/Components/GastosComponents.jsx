import React, { useState, Fragment } from "react";
import EmptyDataComponent from "./EmptyDataComponent";
import TableDataComponent from "./TableDataComponent";
import NewRegisterComponent from "./NewRegisterComponent";
import NewRegisterButtons from "./NewRegisterButtons";

function GastosComponents(props) {
  const data  = props.data.lenght > 0 ? props.data : [
    {
      fecha: "13/09/2023",
      concepto: "Pago de empleados",
      categoria: "Activo",
      monto: 1000,
    },
    {
      fecha: "13/09/2023",
      concepto: "Pago de empleados",
      categoria: "Activo",
      monto: 1000,
    },
    {
      fecha: "04/09/2023",
      concepto: "Pago de empleados",
      categoria: "Activo",
      monto: 1000,
    },
    {
      fecha: "04/09/2023",
      concepto: "Pago de empleados",
      categoria: "Activo",
      monto: 1000,
    },
  ];

  const [añadirFlag, setAñadirFlag] = useState(false);

  const handleAñadirButton = () => {
    setAñadirFlag(true);
  };

  const handleCancelButton = () => {
    console.log("Cancelando...");
    setAñadirFlag(false);
  };

  const handleSaveButton = () => {
    console.log("Guardando...");
    // TODO: Implementar el envio del formulario
    setAñadirFlag(false);
  };

  return (
    <Fragment>
      {data.length > 0 ? (
        <Fragment>
          <TableDataComponent data={data} />
          {añadirFlag ? (
            <Fragment>
              <NewRegisterComponent type={"gastos"} />
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
              <NewRegisterComponent type={"gastos"} />
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
