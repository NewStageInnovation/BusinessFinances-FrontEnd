import React, { useState, Fragment, useContext } from "react";
import EmptyDataComponent from "./EmptyDataComponent";
import TableDataComponent from "./TableDataComponent";
import NewRegisterComponent from "./NewRegisterComponent";
import NewRegisterButtons from "./NewRegisterButtons";
import { addGasto } from "../services/user";

import { ContextoMainProvider } from "../Pages/FormPage";

function GastosComponents(props) {
  const [añadirFlag, setAñadirFlag] = useState(false);
  const [nuevoGasto, setNuevoGasto] = useState({
    fecha: "",
    concepto: "",
    categoria: "",
    cantidad: 0,
  });
  const { user } = useContext(ContextoMainProvider);

  const data  = props.data.lenght > 0 ? props.data : [
    {
      fecha: "13/09/2023",
      concepto: "Pago de empleados",
      categoria: "Activo",
      cantidad: 1000,
    },
    {
      fecha: "13/09/2023",
      concepto: "Pago de empleados",
      categoria: "Activo",
      cantidad: 1000,
    },
    {
      fecha: "04/09/2023",
      concepto: "Pago de empleados",
      categoria: "Activo",
      cantidad: 1000,
    },
    {
      fecha: "04/09/2023",
      concepto: "Pago de empleados",
      categoria: "Activo",
      cantidad: 1000,
    },
  ];

  const handleAñadirButton = () => {
    setAñadirFlag(true);
  };

  const handleCancelButton = () => {
    console.log("Cancelando...");
    setAñadirFlag(false);
  };

  const handleSaveButton = () => {
    addGasto(nuevoGasto, user.correo);
    setAñadirFlag(false);
  };

  return (
    <Fragment>
      {data.length > 0 ? (
        <Fragment>
          <TableDataComponent data={data} />
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
