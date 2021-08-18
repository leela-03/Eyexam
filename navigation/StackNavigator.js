import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import RightScreen from "../screens/RightEye";
import LeftScreen from "../screens/LeftEye";
import AlphabetScreen from "../screens/Alphabet";
import NumberScreen from "../screens/Number";
import SpecialScreen from "../screens/SS";
import ResultScreen from "../screens/Result";
import Atest1Screen from "../screens/Atest1";
import Atest2Screen from "../screens/Atest2";
import Ntest1Screen from "../screens/Ntest1";
import Ntest2Screen from "../screens/Ntest2";
import Stest1Screen from "../screens/Stest1";
import Stest2Screen from "../screens/Stest2";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}
    >
       <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="LeftEye" component={LeftScreen} />
        <Stack.Screen name="RightEye" component={RightScreen} />
        <Stack.Screen name="Alphabet" component={AlphabetScreen} />
        <Stack.Screen name="Number" component={NumberScreen} />
        <Stack.Screen name="SS" component={SpecialScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
        <Stack.Screen name="Atest1" component={Atest1Screen} />
        <Stack.Screen name="Atest2" component={Atest2Screen} />
        <Stack.Screen name="Ntest1" component={Ntest1Screen} />
        <Stack.Screen name="Ntest2" component={Ntest2Screen} />
        <Stack.Screen name="Stest1" component={Stest1Screen} />
        <Stack.Screen name="Stest2" component={Stest2Screen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

