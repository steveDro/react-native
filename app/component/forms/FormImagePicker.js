import React from "react";
import { View, StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import ImageInputList from "../image/ImageInputList";
import ErrorMessage from "./ErrorMessage";
// import { ErrorMessage } from "./ErrorMessage";

function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  const handleAdd = (uri) => {
    setFieldValue(name, [...values[name], uri]);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      values[name].filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <View style={styles.container}>
      <ImageInputList
        imageUris={values[name]}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default FormImagePicker;
