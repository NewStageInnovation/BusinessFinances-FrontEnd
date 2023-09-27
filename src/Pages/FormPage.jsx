import React, { useState, Fragment, useEffect } from "react";
import TabComponent from "../Components/TabComponent";
import GastosComponents from "../Components/GastosComponents";
import IngresosComponent from "../Components/IngresosComponent";
import DeudasComponent from "../Components/DeudasComponent";
import ResumenGeneral from "../Components/ResumenGeneral";
import { getUser } from "../services/user";

function FormPage(props) {
  const [user, setUser] = useState();

  const getUserData = async () => {
    const user = await getUser();
    setUser(user);
  }

  useEffect(() => {
    getUserData();
  }, []);

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
      <TabComponent tabs={tabs} />
    </Fragment>
  );
}

export default FormPage;
