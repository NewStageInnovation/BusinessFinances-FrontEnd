import React from "react";
import { Table } from "evergreen-ui";

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
    <div>
      <Table>
        <Table.Head>
          <Table.TextHeaderCell>Fecha</Table.TextHeaderCell>
          <Table.TextHeaderCell>Concepto</Table.TextHeaderCell>
          <Table.TextHeaderCell>Categoría</Table.TextHeaderCell>
          <Table.TextHeaderCell>Monto</Table.TextHeaderCell>
        </Table.Head>
        <Table.Body height={240}>
          {data.map((data, index) => (
            <Table.Row key={index} isSelectable>
              <Table.TextCell>{data.fecha}</Table.TextCell>
              <Table.TextCell>{data.concepto}</Table.TextCell>
              <Table.TextCell>{data.categoria}</Table.TextCell>
              <Table.TextCell isNumber>{data.monto}</Table.TextCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default TableDataComponent;
