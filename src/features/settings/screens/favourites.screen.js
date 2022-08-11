import React, { useContext } from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsInfoCard } from "../../../features/restaurants/components/restaurants-info-card.component";
import { RestaurantList } from "../../../features/restaurants/components/restaurant-list.styles";

import { FavouritesContext } from "../../../services/favourites/favourites.context";

const NoFavArea = styled(Text)`
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.space[3]};
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return (
    <>
      {!favourites.length ? (
        <NoFavArea>
          <Text variant="hint">There's nothing saved in favourites</Text>
        </NoFavArea>
      ) : (
        <RestaurantList
          data={favourites}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetails", { restaurant: item })
              }
            >
              <Spacer position="vertical" size="medium">
                <RestaurantsInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
        />
      )}
    </>
  );
};
