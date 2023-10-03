import React, { useContext } from "react";
import ResumenGeneralStyle from "../Styles/ResumenGeneral.css";
import TableDataComponent from "./TableDataComponent";
import AyudaInformativaComponent from "./AyudaInformativaComponent";
import PatrimonioNetoComponent from "./PatrimonioNetoComponent";
import RazonEndeudamiento from "./RazonEndeudamiento";
import ApalancamientoComponent from "./ApalancamientoComponent";
import MargenCapital from "./MargenCapital";
import { Table } from "evergreen-ui";

import { ContextoMainProvider } from "../Pages/FormPage";
import ActivosResumenGeneral from "./ActivosResumenGeneral";
import CapitalResumenGeneral from "./CapitalResumenGeneral";

function ResumenGeneral() {
  const { gastosActivos, capital, patrimonioNeto, margenCapital, razonEndeudamiento, apalancamientoFinanciero } =
    useContext(ContextoMainProvider);
  return (
    <div className="resumen-general-main-container">
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
                    <AyudaInformativaComponent
                      data={<ActivosResumenGeneral />}
                      title={"¿Qué son los gastos en activos?"}
                    />{" "}
                    Activos:
                  </div>
                </Table.TextCell>
                <Table.TextCell>{gastosActivos}</Table.TextCell>
              </Table.Row>
              <Table.Row>
                <Table.TextCell>
                  <div className="resumen-table-title">
                    <AyudaInformativaComponent
                      data={<CapitalResumenGeneral />}
                      title={"¿Qué es el capital?"}
                    />{" "}
                    Capital:
                  </div>
                </Table.TextCell>
                <Table.TextCell>{capital}</Table.TextCell>
              </Table.Row>
              <Table.Row>
                <Table.TextCell>
                  <div className="resumen-table-title">
                    <AyudaInformativaComponent
                      data={<PatrimonioNetoComponent />}
                      title={"Patrimonio Neto"}
                    />{" "}
                    Patrimonio Neto:
                  </div>
                </Table.TextCell>
                <Table.TextCell>{patrimonioNeto}</Table.TextCell>
              </Table.Row>
              <Table.Row>
                <Table.TextCell>
                  <div className="resumen-table-title">
                    <AyudaInformativaComponent
                      data={<RazonEndeudamiento />}
                      title={"¿Qué tanto de lo que tengo realmente poseo?"}
                    />{" "}
                    Razón Endeudamiento:
                  </div>
                </Table.TextCell>
                <Table.TextCell>{razonEndeudamiento}%</Table.TextCell>
              </Table.Row>
              <Table.Row>
                <Table.TextCell>
                  <div className="resumen-table-title">
                    <AyudaInformativaComponent
                      data={<ApalancamientoComponent />}
                      title={"La importancia de la deuda en la empresa"}
                    />{" "}
                    Apalancamiento Financiero:
                  </div>
                </Table.TextCell>
                <Table.TextCell>{apalancamientoFinanciero}%</Table.TextCell>
              </Table.Row>
              <Table.Row>
                <Table.TextCell>
                  <div className="resumen-table-title">
                    <AyudaInformativaComponent
                      data={<MargenCapital />}
                      title={"¿Cuánto estoy re-invirtiendo?"}
                    />{" "}
                    Margen de Capital:
                  </div>
                </Table.TextCell>
                <Table.TextCell>{margenCapital}%</Table.TextCell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default ResumenGeneral;
