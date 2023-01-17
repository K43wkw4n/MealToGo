import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  margintop: ${StatusBar.currentHright}px;
  paddingTop: 23px;
`

const SearchContainer = styled.View`
  padding: 16px;
  backgroundColor: green;
`

const RestaurantListContainer = styled.View`
  flex: 1;
  backgroundColor: pink;
  padding: 16px;
`

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeArea>
      <SearchContainer style={Styles.search}>
        <Searchbar
          style={Styles.bodySearch}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <RestaurantListContainer style={Styles.content}>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};

const Styles = StyleSheet.create({
  bodySearch: {
    borderRadius: 100 / 2,
  },
});
