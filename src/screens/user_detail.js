import React, { Component } from "react";
import { View, Text, Image } from "react-native";

class UserDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.item.login
  });
  render() {
    const { item } = this.props.navigation.state.params;
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 15,
            backgroundColor: "grey"
          }}
        >
          <Image
            source={{ uri: `${item.avatar_url}` }}
            style={{ height: 80, width: 80 }}
          />
          <Text>{item.login}</Text>
        </View>
        <View>
          <Text>Username: {item.login}</Text>
        </View>
      </View>
    );
  }
}

export default UserDetail;
