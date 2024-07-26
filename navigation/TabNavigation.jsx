import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import FavoriteScreen from "../screens/FavoriteScreen";
import HomeNavigation from "./HomeNavigation";
import { COLORS } from "../lib/constants";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          tabBarActiveTintColor: COLORS.primary,
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "HomeStack") {
              iconName = "home";
            } else if (route.name === "Favorite") {
              iconName = "hearto";
            }
            return <AntDesign name={iconName} size={size} color={color} />;
          },
        };
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeNavigation}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
