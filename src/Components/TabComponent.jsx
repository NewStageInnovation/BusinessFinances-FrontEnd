import React, { useState } from "react";
import TabComponentStyle from "../Styles/TabComponent.css";

import { Pane, Tablist, Tab } from "evergreen-ui";

function TabComponent(props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabs = props.tabs
    ? props.tabs
    : [
        {
          name: "Prueba",
          component: <div>Prueba</div>,
        },
        {
          name: "de Tabulador",
          component: <div>de Tabulador</div>,
        },
      ];

  return (
    <div className="tab-component-container">
      <Pane height={"auto"}>
        <Tablist marginBottom={16} flexBasis={240} marginRight={24}>
          {tabs.map((tab, index) => (
            <Tab
              aria-controls={`panel-${tab.name}`}
              isSelected={index === selectedIndex}
              key={index}
              onSelect={() => setSelectedIndex(index)}
            >
              {tab.name}
            </Tab>
          ))}
        </Tablist>
        <Pane padding={16} flex="1">
          {tabs.map((tab, index) => {
            return (
              <Pane
                aria-labelledby={tab.name}
                aria-hidden={index !== selectedIndex}
                display={index === selectedIndex ? "block" : "none"}
                key={tab.name}
                role="tabpanel"
              >
                {tab.component}
              </Pane>
            );
          })}
        </Pane>
      </Pane>
    </div>
  );
}

export default TabComponent;
