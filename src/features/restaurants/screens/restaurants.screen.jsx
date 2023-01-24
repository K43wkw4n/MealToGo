import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { Spacer } from "../components/spacer/spacer.component";

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
          data={[
            { name: 1 },
            { name: 2 },
            { name: 3 },
            { name: 4 },
            { name: 5 },
            { name: 6 },
            { name: 7 },
            { name: 8 },
            { name: 9 },
            { name: 10 },
            { name: 11 },
            { name: 12 },
            { name: 13 },
            { name: 14 },
          ]}
          renderItem={() => (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard />
            </Spacer>
          )}
          keyExtractor={(item) => item.name}
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
