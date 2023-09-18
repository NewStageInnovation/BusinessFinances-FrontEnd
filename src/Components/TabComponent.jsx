import React, { useState } from "react";
import TabComponentStyle from "../Styles/TabComponent.css";

import { Pane, Tablist, Tab, Paragraph } from "evergreen-ui";
import EmptyDataComponent from "./EmptyDataComponent";

function TabComponent() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [tabs] = useState(["Gastos", "Ingresos", "Deudas", "Resumen General"]);
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
                <EmptyDataComponent cta_text={tab} />
            </Pane>
          ))}
        </Pane>
      </Pane>
    </div>
  );
}

export default TabComponent;
