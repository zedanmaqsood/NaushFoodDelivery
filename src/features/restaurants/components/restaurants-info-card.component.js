import React from "react";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import { Text } from "../../../components/typography/text.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";

import {
  Rating,
  Section,
  SectionEnd,
  RestaurantIcon,
  RestaurantCard,
  RestaurantCardCover,
} from "./restaurant-info-card.styles";

export const RestaurantsInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random dudes home",
    isOpenNow = true,
    rating = 4.2,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Card.Content>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                height={20}
                width={20}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="horizontal" size="large">
              {isOpenNow && <SvgXml xml={open} height={20} width={20} />}
            </Spacer>
            <RestaurantIcon source={{ uri: icon }} />
          </SectionEnd>
        </Section>
        <Text variant="bodyAlt">{address}</Text>
      </Card.Content>
    </RestaurantCard>
  );
};
