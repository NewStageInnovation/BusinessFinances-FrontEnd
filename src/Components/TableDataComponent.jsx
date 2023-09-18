import React from "react";
import TableDataStyle from "../Styles/TableDataComponent.css";
import { Table } from "evergreen-ui";
import { AiOutlineEdit } from "react-icons/ai";

function TableDataComponent(props) {
  const data = props.data
    ? props.data
    : [
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

  return (
    <div className="table-data-container">
      <Table>
        <Table.Head>
          <Table.TextHeaderCell>Fecha</Table.TextHeaderCell>
          <Table.TextHeaderCell>Concepto</Table.TextHeaderCell>
          <Table.TextHeaderCell>Categoría</Table.TextHeaderCell>
          <Table.TextHeaderCell>Monto</Table.TextHeaderCell>
          <Table.TextHeaderCell flexBasis={50} flexShrink={0} flexGrow={0} ></Table.TextHeaderCell>
        </Table.Head>
        <Table.Body height={240}>
          {data.map((data, index) => (
            <Table.Row key={index} isSelectable>
              <Table.TextCell>{data.fecha}</Table.TextCell>
              <Table.TextCell>{data.concepto}</Table.TextCell>
              <Table.TextCell>{data.categoria}</Table.TextCell>
              <Table.TextCell isNumber>{data.monto}</Table.TextCell>
              <Table.TextCell flexBasis={50} flexShrink={0} flexGrow={0}><AiOutlineEdit /></Table.TextCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default TableDataComponent;
