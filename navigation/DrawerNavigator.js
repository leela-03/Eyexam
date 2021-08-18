import React, { Component } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";

import Logout from "../screens/Logout";
import AboutScreen from "../screens/About" 

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component {


  render() {

    return (
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: "#AFEEEE",
          inactiveTintColor: "black",
          itemStyle: { marginVertical: 5 }
        }}

      >
        <Drawer.Screen
          name="Home"
          component={StackNavigator}
       
        />
        <Drawer.Screen
          name="About"
          component={AboutScreen}
        
        />
        <Drawer.Screen
          name="Logout"
          component={Logout}
        
        />
      </Drawer.Navigator>
    );
  }
}