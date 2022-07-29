import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import styled from "styled-components";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import {
  useFonts as UseOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as UseLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme/index";
import { RestaurantsScreen } from "./src/features/restaurants/screens/resturants.screen";

const TAB_ICON = {
  Restaurant: "restaurant",
  Settings: "ios-settings",
  Maps: "map",
};

const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
`;

const Title = styled.Text`
  text-align: center;
`;

const SettingsScreen = () => {
  return (
    <CenteredView>
      <Title>Settings Screen</Title>
    </CenteredView>
  );
};

const MapsScreen = () => {
  return (
    <CenteredView>
      <Title>Maps Screen</Title>
    </CenteredView>
  );
};

const tabBarIcon =
  (iconName) =>
  ({ size, color }) =>
    <Ionicons name={iconName} size={size} color={color} />;

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];

  return {
    tabBarIcon: tabBarIcon(iconName),
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
  };
};

const Tab = createBottomTabNavigator();

export default function App() {
  const [oswaldLoaded] = UseOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = UseLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Restaurant" component={RestaurantsScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            <Tab.Screen name="Maps" component={MapsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
        {/* <RestaurantsScreen /> */}
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
