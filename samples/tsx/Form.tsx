import React, { useEffect, useState } from "react";

import { Dispatch } from "redux";
import { RouteComponentProps } from "react-router";
import { Form, Button } from "reactstrap";
import { Field, InjectedFormProps, formValueSelector } from "redux-form";
import { toast } from "react-toastify";

import { BEM } from "helpers/BEM.helper";
import { FetchFormConnect } from "helpers/FetchFormConnect";
import { FetchInput } from "views/common/forms/fields/FetchInput";

export const $1Form: React.FC<I$1FormPropTypes> = (props: I$1FormPropTypes) => {
  const { dispatch, textValue } = props;

  const [isSatisfied, setIsSatisfied] = useState(true);

  useEffect(() => {
    // Mount

    return () => {
      // Unmount
    };
  }, []);

  const classes = new BEM({
    block: { name: "$1Form" },
    elements: [{ name: "temporaryPassword", extras: [] }],
  });

  console.group("$1");
  console.group("props:", props);
  console.table(props);
  console.groupEnd();
  console.log("textValue", textValue);
  console.groupEnd();

  return (
    <Form
      className={classes.getBlockClassNames()}
      onSubmit={props.handleSubmit}
    >
      <Field
        {...{
          className: classes.getElementClassNames("text"),
          component: FetchInput,
          label: "Text Field",
          name: "text",
          type: "text",
        }}
      />
      <Button
        type="submit"
        color="info"
        className={classes.getElementClassNames("submitButton")}
      >
        Submit
      </Button>
    </Form>
  );
};

export default FetchFormConnect({
  FormComponent: $1Form,
  formOptions: {
    form: "$1Form",
    onSubmitFail: () => {
      toast.error("Please fix the error(s) below and try again");
    },
    validate: (values: I$1FormValues) => {
      const errors: I$1FormErrors = {};
      const requiredFields: $1FormValuesIndex[] = ["text"];

      requiredFields.forEach((fieldName: $1FormValuesIndex) => {
        if (!values[fieldName]) {
          errors[fieldName] = "Required";
        }
      });

      return errors;
    },
  },
  state: {
    mapStateToProps: (rootState: IRootStateType) => {
      const { currentUser } = rootState;

      return {
        initialValues: {
          userId: currentUser.userId,
          textValue: formValueSelector("$1Form")(rootState, "text"),
        },
      } as any;
    },
  },
});

export interface I$1FormPropTypes
  extends IRootStateType,
    RouteComponentProps<{}>,
    InjectedFormProps<I$1FormValues> {
  dispatch: Dispatch;
  textValue: string;
}
type $1FormValuesIndex = "text";
export interface I$1FormValues {
  text?: string;
}
interface I$1FormErrors {
  text?: string;
}
