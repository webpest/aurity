import React from "react";
import { StackNavigator } from "react-navigation";

import Search from "./screens/search";
import UserDetail from "./screens/user_detail";

const Routes = StackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      header: null
    }
  },
  UserDetail: { screen: UserDetail }
});

export default Routes;
