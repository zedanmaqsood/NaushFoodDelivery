import React from "react";
import styled from "styled-components";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";

import { RestaurantsInfoCard } from "../components/restaurants-info-card.component";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
`;

const SearchbarContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const ListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.brand.primary};
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchbarContainer>
      <Searchbar placeholder="Search" />
    </SearchbarContainer>
    <ListContainer>
      <RestaurantsInfoCard />
    </ListContainer>
  </SafeArea>
);
