import React, { useState, Fragment, useEffect, createContext, useContext } from "react";
import TabComponent from "../Components/TabComponent";
import GastosComponents from "../Components/GastosComponents";
import IngresosComponent from "../Components/IngresosComponent";
import DeudasComponent from "../Components/DeudasComponent";
import ResumenGeneral from "../Components/ResumenGeneral";

// Contexto
import MainProvider from "../Context/MainProvider";
export const ContextoMainProvider = createContext();

function FormPage(props) {
  const tabs = [
    {
      name: "Gastos",
      component: <GastosComponents data={[]} />,
    },
    {
      name: "Ingresos",
      component: <IngresosComponent data={[]} />,
    },
    {
      name: "Deudas",
      component: <DeudasComponent data={[]} />,
    },
    {
      name: "Resumen General",
      component: <ResumenGeneral  />,
    },
  ];

  return (
    <Fragment>
      <MainProvider>
        <TabComponent tabs={tabs} />
      </MainProvider>
    </Fragment>
  );
}

export default FormPage;
