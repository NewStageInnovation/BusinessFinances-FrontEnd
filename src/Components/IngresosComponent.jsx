import React, { useState, Fragment, useContext } from "react";
import EmptyDataComponent from "./EmptyDataComponent";
import TableDataComponent from "./TableDataComponent";
import NewRegisterComponent from "./NewRegisterComponent";
import NewRegisterButtons from "./NewRegisterButtons";
import { ContextoMainProvider } from "../Pages/FormPage";
import { addIngreso } from "../services/user";

function IngresosComponent(props) {
  const [nuevoIngreso, setNuevoIngreso] = useState({
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

  const [añadirFlag, setAñadirFlag] = useState(false);

  const handleAñadirButton = () => {
    setAñadirFlag(true);
  };

  const handleCancelButton = () => {
    console.log("Cancelando...");
    setAñadirFlag(false);
  };

  const handleSaveButton = () => {
    addIngreso(nuevoIngreso, user.correo);
    setAñadirFlag(false);
  };

  return (
    <Fragment>
      {data.length > 0 ? (
        <Fragment>
          <TableDataComponent data={data} />
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
