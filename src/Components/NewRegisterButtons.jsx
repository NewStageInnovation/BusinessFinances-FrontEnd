import React from "react";
import NewRegisterButtonsStyle from "../Styles/NewRegisterButtonsStyle.css";

function NewRegisterButtons(props) {
  const { handleSaveButton, handleCancelButton } = props;
  return (
    <div className="new-register-buttons">
      <div className="add-button" onClick={handleSaveButton}>
        Guardar
      </div>
      <div className="cancel-button" onClick={handleCancelButton}>
        Cancelar
      </div>
    </div>
  );
}

export default NewRegisterButtons;
