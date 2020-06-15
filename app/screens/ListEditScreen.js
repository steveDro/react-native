import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../component/Screen";
import { Formik } from "formik";
import {
  AppFormField,
  SubmitButton,
  AppFormPicker,
  FormImagePicker,
} from "../component/forms";
import CategoryPickerItem from "../component/pickers/CategoryPickerItem";
import useLocation from "../hooks/useLocation";
import listingApi from "../api/listings";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(1000).label("Price"),
  categories: Yup.object().required().nullable().label("Categories"),
  description: Yup.string().label("Description"),
  images: Yup.array().min(1, "Please select at least one image"),
});

const Categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];

function ListEditScreen() {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);

    const result = await listingApi.addListings(
      { ...listing, location },
      (progress) => setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert("Could not save the listing.");
    }

    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <Formik
        initialValues={{
          title: "",
          price: "",
          categories: null,
          description: "",
          images: [],
        }}
        onSubmit={handleSubmit} // {(value) => handleSubmit(value)}
        validationSchema={validationSchema}
      >
        {() => (
          <>
            <FormImagePicker name="images" />
            <AppFormField maxLength={255} name="title" placeholder="Title" />
            <AppFormField
              keyboardType="numeric"
              maxLength={8}
              name="price"
              placeholder="Price"
              width={120}
            />
            <AppFormPicker
              items={Categories}
              name="categories"
              numberOfColumns={3}
              PickerItemComponent={CategoryPickerItem}
              placeholder="Categories"
              width="50%"
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
