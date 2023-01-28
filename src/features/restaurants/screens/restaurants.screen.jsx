import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { Spacer } from "../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  margintop: ${StatusBar.currentHright}px;
  paddingTop: 23px;
`

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`

const RestaurantListContainer = styled.View`
  flex: 1;
  backgroundColor: pink;
`

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  const restaurantContext = useContext(RestaurantsContext);
  console.log(restaurantContext)

  return (
    <SafeArea>
      <SearchContainer >
        <Searchbar
          style={styles.bodySearch}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantList
          data={restaurantContext.restaurants}
          renderItem={() => (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard />
            </Spacer>
          )}
          keyExtractor={(_,i) => i}
          contentContainerStyle={{ padding: 16 }}
        />
      </RestaurantListContainer>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  bodySearch: {
    borderRadius: 100 / 2,
  },
});
