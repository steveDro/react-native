import React, { useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";

import ListItem from "../component/list/ListItem";
import Screen from "../component/Screen";
import ListItemSeparator from "../component/list/ListItemSeparator";
import ListItemDeleteAction from "../component/list/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title:
      "T1 djdksjkdj jdksjdkjkd jdjdjdjdjdjdjdjd  djdjdjdjdd djdjdjdjdjdjd djdjdjdjdjd jdjdjdjdjd djdjdjdjdjd djdjdjdjdjd d djdjdjdjdjdjdj",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    const newMessage = messages.filter((m) => m.id !== message.id);
    setMessages(newMessage);
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
