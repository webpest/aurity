import React, { Component } from "react";
import { View, FlatList, Text } from "react-native";

import ListItem from "../components/list-item";
import ListSeparator from "../components/list-separator";

class Lists extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.data.length < 1) {
      return (
        <View
          style={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text>No Data</Text>
        </View>
      );
    } else {
      return (
        <FlatList
          data={this.props.data}
          renderItem={({ item }) => (
            <ListItem item={item} nav={this.props.nav} />
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={ListSeparator}
        />
      );
    }
  }
}

export default Lists;
