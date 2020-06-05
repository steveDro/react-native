import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../component/Screen";
import { Formik } from "formik";
import { AppFormField, SubmitButton } from "../component/forms";
import AppFormPicker from "../component/forms/AppFormPicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(1000).label("Price"),
  categories: Yup.object().required().nullable().label("Categories"),
  description: Yup.string().label("Description"),
});

const Categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];

function ListEditScreen() {
  return (
    <Screen style={styles.container}>
      <Formik
        initialValues={{
          title: "",
          price: "",
          categories: null,
          description: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {() => (
          <>
            <AppFormField maxLength={255} name="title" placeholder="Title" />
            <AppFormField
              keyboardType="numeric"
              maxLength={8}
              name="price"
              placeholder="Price"
            />
            <AppFormPicker
              items={Categories}
              name="categories"
              placeholder="Categories"
            />
            <AppFormField
              maxLength={255}
              multiline
              numberOfLines={3}
              name="description"
              placeholder="Description"
            />
            <SubmitButton title="Post" />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListEditScreen;
