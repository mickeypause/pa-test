import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./TabNavigation";
import DetailScreen from "../screens/DetailScreen";
import { COLORS } from "../lib/constants";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={TabNavigation}
        options={{
          headerShown: false,
          title: "Home",
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          title: null,
          headerTintColor: COLORS.primary,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
