import { TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../components/spacer/spacer.component";
import { SafeArea } from '../../../components/utility/safe-area.component'
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { Search } from "../components/search.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantList } from "../components/restaurant-list.styles";
import { FadeInView } from "../../../components/animations/fade.animation";

const RestaurantListContainer = styled.View`
  flex: 1;
  backgroundColor: pink;
`

const Loading = styled(ActivityIndicator)`

`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 45%;
  z-index:999;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  const [isToggled, setIsToggled] = useState(false);
  const { favourites } = useContext(FavouritesContext);
  // console.log(error);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={MD2Colors.purple900} />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar favourites={favourites} onNavigate={navigation.navigate} />
      )}
      <RestaurantListContainer>
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail", { restaurant: item })}>
                <Spacer position="bottom" size="large">
                  <FadeInView>
                    <RestaurantInfoCard restaurant={item} />
                  </FadeInView>
                </Spacer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </RestaurantListContainer>
    </SafeArea>
  );
};
