import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  Alert
} from "react-native";

const styles = StyleSheet.create({
  bar: {
    backgroundColor: "#333",
    flexDirection: "row",
    paddingHorizontal: 5,
    paddingVertical: 5
  },
  btn: {
    backgroundColor: "#1976D2",
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  search: {
    flexGrow: 1
  },
  input: {
    paddingHorizontal: 10,
    color: "#333",
    backgroundColor: "#fff",
    height: 43
  }
});

const SearchBar = ({ search, handleText, value }) => (
  <View style={styles.bar}>
    <View style={styles.search}>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="search github"
        onChange={handleText}
        value={value}
      />
    </View>

    <View>
      <TouchableHighlight onPress={search}>
        <View style={styles.btn}>
          <Text>Search</Text>
        </View>
      </TouchableHighlight>
    </View>
  </View>
);

export default SearchBar;
