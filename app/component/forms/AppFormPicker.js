import React from "react";
import { StyleSheet } from "react-native";

import { useFormikContext } from "formik";

import AppPicker from "../pickers/AppPicker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({
  items,
  width,
  numberOfColumns,
  name,
  PickerItemComponent,
  placeholder,
}) {
  const { setFieldValue, values, errors, touched } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        placeholder={placeholder}
        numberOfColumns={numberOfColumns}
        PickerItemComponent={PickerItemComponent}
        onSelectItem={(item) => setFieldValue(name, item)}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default AppFormPicker;
