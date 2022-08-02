import React, { useContext } from "react";
import styled from "styled-components";
import { FlatList } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsInfoCard } from "../components/restaurants-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";

const LoadingView = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const LoadingThing = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
})``;

export const RestaurantsScreen = () => {
  const { restaurants, isLoading } = useContext(RestaurantContext);

  return (
    <SafeArea>
      <Search />
      {isLoading && (
        <LoadingView>
          <LoadingThing size={50} animating={true} color="#11ddff" />
        </LoadingView>
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <Spacer position="vertical" size="medium">
            <RestaurantsInfoCard restaurant={item} />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
