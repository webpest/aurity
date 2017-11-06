import React, { Component } from "react";
import { View, Text, Alert } from "react-native";
import axios from "axios";

import ProgressBar from "../components/progressbar";
import SearchBar from "../components/searchbar";
import Lists from "../components/lists";

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      terms: "",
      loading: false,
      data: []
    };
  }

  searchGitHub = () => {
    const query = this.state.terms;
    if (query !== "") {
      this.setState({ loading: true });
      axios
        .get(`http://api.github.com/search/users?q=${query}`)
        .then(res => {
          this.setState({
            data: res.data.items,
            loading: false,
            terms: ""
          });
        })
        .catch(error => {
          this.setState({ loading: false });
          Alert.alert(error);
        });
    }
  };
  handleText = event => {
    const query = event.nativeEvent.text;
    this.setState({
      terms: query
    });
  };
  detailPage = item => {
    console.log(item);
    this.props.navigation.navigate("UserDetail", { item });
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <SearchBar
          search={this.searchGitHub}
          handleText={this.handleText}
          value={this.state.terms}
        />
        <View
          style={{
            flexGrow: 1
          }}
        >
          {this.state.loading ? (
            <ProgressBar />
          ) : (
            <View>
              <Lists data={this.state.data} nav={this.detailPage} />
            </View>
          )}
        </View>
      </View>
    );
  }
}
