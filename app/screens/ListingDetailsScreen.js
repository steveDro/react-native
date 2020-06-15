import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../component/AppText";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import ListItem from "../component/list/ListItem";

function ListDetailsScreen({ route }) {
  const listings = route.params;

  return (
    <View>
      <Image
        style={styles.image}
        tint="light"
        preview={{ uri: listings.images[0].thumbnailUrl }}
        uri={listings.images[0].url}
      ></Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listings.title}</AppText>
        <AppText style={styles.price}>{listings.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Stephen Akoto"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    margin: 10,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    // paddingBottom: 5,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    marginVertical: 5,
  },
  userContainer: {
    marginVertical: 30,
  },
});

export default ListDetailsScreen;
