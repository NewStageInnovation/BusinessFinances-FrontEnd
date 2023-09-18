import React, { useState } from "react";
import TabComponentStyle from "../Styles/TabComponent.css";

import { Pane, Tablist, Tab, Paragraph } from "evergreen-ui";
import EmptyDataComponent from "./EmptyDataComponent";
import TableDataComponent from "./TableDataComponent";

function TabComponent() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [tabs] = useState(["Gastos", "Ingresos", "Deudas", "Resumen General"]);
  const [data] = useState([
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
  ]);

  return (
    <div className="tab-component-container">
      <Pane height={"auto"}>
        <Tablist marginBottom={16} flexBasis={240} marginRight={24}>
          {tabs.map((tab, index) => (
            <Tab
              aria-controls={`panel-${tab}`}
              isSelected={index === selectedIndex}
              key={tab}
              onSelect={() => setSelectedIndex(index)}
            >
              {tab}
            </Tab>
          ))}
        </Tablist>
        <Pane padding={16} background="tint0" flex="1">
          {tabs.map((tab, index) => (
            <Pane
              aria-labelledby={tab}
              aria-hidden={index !== selectedIndex}
              display={index === selectedIndex ? "block" : "none"}
              key={tab}
              role="tabpanel"
            >
              {data.length > 0 ? (
                <TableDataComponent data={data} />
              ) : (
                <EmptyDataComponent cta_text={tab} />
              )}
            </Pane>
          ))}
        </Pane>
      </Pane>
    </div>
  );
}

export default TabComponent;
