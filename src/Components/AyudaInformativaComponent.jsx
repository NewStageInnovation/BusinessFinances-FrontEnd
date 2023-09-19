import React, { Fragment } from "react";
import AyudaInformativaStyle from "../Styles/AyudaInformativa.css";
import { Pane, Dialog, Button } from "evergreen-ui";
import { CiCircleInfo } from "react-icons/ci";

function AyudaInformativaComponent(props) {
  const [isShown, setIsShown] = React.useState(false);
  const { data } = props;

  const exampleData = () => {
    return (
        <div>
            <div> <img src="https://img.freepik.com/fotos-premium/vista-superior-reunion-colegas-negocios-intercambiar-ideas-sobre-nuevo-plan-estrategia-comercial-proyecto-analisis-documentos-datos-concepto-finanzas-contabilidad-reunion-informativa-consultoria-lluvia-ideas_1645-484.jpg?w=2000" alt="" width="95%" /> </div>
            <h1>Example Data</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ex eligendi harum, quia quibusdam magni aut accusantium eos cum! Debitis quo magni aperiam, repellat eligendi rerum blanditiis. Assumenda, ab rerum!</p>
        </div>
    )
  }

  return (
    <Fragment>
      <Pane>
        <Dialog
          isShown={isShown}
          title="Dialog title"
          onCloseComplete={() => setIsShown(false)}
          confirmLabel="Custom Label"
          preventBodyScrolling
          footer = {
            <div className="ayuda-informativa-button" onClick={()=> setIsShown(false)}>
                Entendido
            </div>
          }
        >
          <Pane height={"auto"} width="100%">
            {data || exampleData()}
          </Pane>
        </Dialog>
        <div onClick={() => setIsShown(true)} style={{ cursor: "pointer" }}>
          <CiCircleInfo />
        </div>
      </Pane>
    </Fragment>
  );
}

export default AyudaInformativaComponent;
