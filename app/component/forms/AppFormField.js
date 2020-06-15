import React from "react";
import { useFormikContext } from "formik";

import AppInputText from "../AppInputText";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ name, width, ...otherProps }) {
  const {
    setFieldTouched,
    errors,
    setFieldValue,
    touched,
    values,
  } = useFormikContext();
  return (
    <>
      <AppInputText
        onChangeText={(text) => setFieldValue(name, text)}
        onBlur={() => setFieldTouched(name)}
        value={values[name]}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
