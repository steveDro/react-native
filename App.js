import React, { useState } from "react";

import Screen from "./app/component/Screen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Icon from "./app/component/Icon";
import ListItem from "./app/component/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppInputText from "./app/component/AppInputText";
import { Switch } from "react-native";
import AppPicker from "./app/component/AppPicker";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Housing", value: 3 },
];

export default function App() {
  const [isNew, setIsNew] = useState(false);
  const [category, setCategory] = useState(categories[0]);

  return (
    <Screen>
      <AppInputText placeholder="Username" icon="email" />
      <Switch value={isNew} onValueChange={(isNew) => setIsNew(isNew)} />
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        icon="apps"
        items={categories}
        placeholder="Category"
      />
      <AppInputText icon="email" placeholder="Email" />
    </Screen>
  );
}
