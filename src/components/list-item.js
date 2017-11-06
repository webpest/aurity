import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const ListItem = ({ item, nav }) => {
  return (
    <TouchableOpacity onPress={() => nav(item)}>
      <View
        style={{
          paddingVertical: 15,
          paddingHorizontal: 10,
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <Image
          style={{ height: 32, width: 32, marginRight: 10 }}
          source={{ uri: `${item.avatar_url}` }}
        />
        <Text>{item.login}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
