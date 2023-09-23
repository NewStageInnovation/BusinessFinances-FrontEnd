import React, { useState, Fragment } from "react";
import EmptyDataComponent from "./EmptyDataComponent";
import TableDataComponent from "./TableDataComponent";
import NewRegisterComponent from "./NewRegisterComponent";
import NewRegisterButtons from "./NewRegisterButtons";

function DeudasComponent(props) {
  const data  = props.data.lenght > 0 ? props.data : [
    {
      "fecha inicio": "13/09/2023",
      plazos: 12,
      entidad: "Banco",
      monto: 1000,
      "interes mensual": "5%",
    },
    {
      "fecha inicio": "13/09/2023",
      plazos: 12,
      entidad: "Banco",
      monto: 1000,
      "interes mensual": "5%",
    },
    {
      "fecha inicio": "13/09/2023",
      plazos: 12,
      entidad: "Banco",
      monto: 1000,
      "interes mensual": "5%",
    },
    {
      "fecha inicio": "13/09/2023",
      plazos: 12,
      entidad: "Banco",
      monto: 1000,
      "interes mensual": "5%",
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
              <NewRegisterComponent type={"deudas"} />
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
              <NewRegisterComponent type={"deudas"} />
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
