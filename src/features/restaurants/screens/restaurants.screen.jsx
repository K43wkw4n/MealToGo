import { FlatList } from "react-native";
import React, { useContext } from "react";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../components/spacer/spacer.component";
import { SafeArea } from '../../../components/utility/safe-area.component'
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { Search } from "../components/search.component";

const RestaurantListContainer = styled.View`
  flex: 1;
  backgroundColor: pink;
`

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 45%;
  z-index:999;
`;

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  console.log(error);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <ActivityIndicator size={50} animating={true} color={MD2Colors.purple900} />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantListContainer>
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </RestaurantListContainer>
    </SafeArea>
  );
};
