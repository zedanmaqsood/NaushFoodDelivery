import React, { useContext } from "react";
import styled from "styled-components";
import { Button } from "react-native-paper";

import { AuthContext } from "../../services/authentication/authentication.context";
import { RestaurantContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";

const TAB_ICON = {
  Restaurant: "restaurant",
  Settings: "settings",
  Maps: "map",
};

const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  text-align: center;
  padding-bottom: 16px;
`;

const LogoutBtn = styled(Button).attrs({
  icon: "logout-variant",
  mode: "contained",
})`
  padding: 4px;
`;

const SettingsScreen = () => {
  const { onLogout, isLoading } = useContext(AuthContext);

  return (
    <CenteredView>
      <Title>Settings Screen</Title>
      <LogoutBtn onPress={onLogout}>Logout</LogoutBtn>
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
    headerShown: false,
  };
};

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Restaurant" component={RestaurantsNavigator} />
            <Tab.Screen name="Maps" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </RestaurantContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
