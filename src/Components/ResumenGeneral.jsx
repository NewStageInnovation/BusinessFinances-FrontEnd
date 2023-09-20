import React from "react";
import ResumenGeneralStyle from "../Styles/ResumenGeneral.css";
import TableDataComponent from "./TableDataComponent";
import AyudaInformativaComponent from "./AyudaInformativaComponent";
import { Table } from "evergreen-ui";

function ResumenGeneral() {
  const data = [
    {
      Descripcion: "Venta",
      Monto: 1000,
    },
    {
      Descripcion: "Venta",
      Monto: 1000,
    },
    {
      Descripcion: "Venta",
      Monto: 1000,
    },
  ];

  return (
    <div className="resumen-general-main-container">
      <div className="resumen-container">
        <div className="resumen-item">
          <div className="resumen-title">
            Activos <AyudaInformativaComponent />{" "}
          </div>
          <TableDataComponent data={data} editButton={false} />
        </div>
        <div className="resumen-item">
          <div className="resumen-title">
            Pasivos <AyudaInformativaComponent />{" "}
          </div>
          <TableDataComponent data={data} />
        </div>
        <div className="resumen-item">
          <div className="resumen-title">
            Capital <AyudaInformativaComponent />{" "}
          </div>
          <TableDataComponent data={data} />
        </div>
      </div>
      <div className="valores-clave-container">
        <div className="resumen-item">
          <div className="resumen-title">
            <div>Resumen General</div>
             <AyudaInformativaComponent />{" "}
          </div>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.TextCell>
                  <div className="resumen-table-title">
                    <AyudaInformativaComponent /> Patrimonio Neto:
                  </div>
                </Table.TextCell>
                <Table.TextCell>2000</Table.TextCell>
              </Table.Row>
              <Table.Row>
                <Table.TextCell>
                  <div className="resumen-table-title">
                    <AyudaInformativaComponent /> Razón Endeudamiento:
                  </div>
                </Table.TextCell>
                <Table.TextCell>2000</Table.TextCell>
              </Table.Row>
              <Table.Row>
                <Table.TextCell>
                  <div className="resumen-table-title">
                    <AyudaInformativaComponent /> Apalancamiento Financiero:
                  </div>
                </Table.TextCell>
                <Table.TextCell>2000</Table.TextCell>
              </Table.Row>
              <Table.Row>
                <Table.TextCell>
                  <div className="resumen-table-title">
                    <AyudaInformativaComponent /> Margen de Capital:
                  </div>
                </Table.TextCell>
                <Table.TextCell>2000</Table.TextCell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default ResumenGeneral;
