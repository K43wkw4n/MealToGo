import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHright }}>
      <View style={Styles.search}>
        <Searchbar
          style={Styles.bodySearch}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View style={Styles.content}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  search: {
    padding: 16,
    backgroundColor: "green",
  },
  bodySearch: {
    borderRadius: 100 / 2,
  },
  content: {
    flex: 1,
    backgroundColor: "pink",
    padding:16,
  },
});
