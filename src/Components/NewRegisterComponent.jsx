import React, { Fragment, useState } from "react";
import NewRegisterStyle from "../Styles/NewRegisterStyle.css";

import { TextInputField } from "evergreen-ui";

function NewRegisterComponent(props) {
  const { type } = props;
  return (
    <div className="new-register-container">
      {type === "gastos" ? (
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
      ) : type === "ingresos" ? (
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
      ) : type === "deudas" ? (
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
        </Fragment>
      ) : (
        <Fragment></Fragment>
      )}
    </div>
  );
}

export default NewRegisterComponent;
