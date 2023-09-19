import React, { Fragment, useState } from "react";
import NewRegisterStyle from "../Styles/NewRegisterStyle.css";

import { TextInputField } from "evergreen-ui";

function NewRegisterComponent(props) {
  const { type, handleCancelButton, handleSaveButton } = props;
  let component = <Fragment></Fragment>;

  switch (type) {
    case "gastos":
      component = (
        <Fragment>
          <TextInputField
            isInvalid={false}
            required
            label="A required text input field"
            description="This is a description."
            validationMessage="This field is required"
          />
          <TextInputField
            isInvalid={false}
            required
            label="A required text input field"
            description="This is a description."
            validationMessage="This field is required"
          />
          <TextInputField
            isInvalid={false}
            required
            label="A required text input field"
            description="This is a description."
            validationMessage="This field is required"
          />
          <TextInputField
            isInvalid={false}
            required
            label="A required text input field"
            description="This is a description."
            validationMessage="This field is required"
          />
        </Fragment>
      );
      break;
    case "ingresos":
      component = (
        <Fragment>
          <TextInputField
            isInvalid={false}
            required
            label="A required text input field"
            description="This is a description."
            validationMessage="This field is required"
          />
          <TextInputField
            isInvalid={false}
            required
            label="A required text input field"
            description="This is a description."
            validationMessage="This field is required"
          />
          <TextInputField
            isInvalid={false}
            required
            label="A required text input field"
            description="This is a description."
            validationMessage="This field is required"
          />
          <TextInputField
            isInvalid={false}
            required
            label="A required text input field"
            description="This is a description."
            validationMessage="This field is required"
          />
        </Fragment>
      );
      break;
    case "deudas":
      <Fragment>
        <TextInputField
          isInvalid={false}
          required
          label="A required text input field"
          description="This is a description."
          validationMessage="This field is required"
        />
        <TextInputField
          isInvalid={false}
          required
          label="A required text input field"
          description="This is a description."
          validationMessage="This field is required"
        />
        <TextInputField
          isInvalid={false}
          required
          label="A required text input field"
          description="This is a description."
          validationMessage="This field is required"
        />
        <TextInputField
          isInvalid={false}
          required
          label="A required text input field"
          description="This is a description."
          validationMessage="This field is required"
        />
        <TextInputField
          isInvalid={false}
          required
          label="A required text input field"
          description="This is a description."
          validationMessage="This field is required"
        />
      </Fragment>;
      break;
    default:
      component = <Fragment></Fragment>;
      break;
  }

  return <div className="new-register-container">{component}</div>;
}

export default NewRegisterComponent;
