import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { StatusBar } from 'react-native';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHright }}>
        <View style={Styles.search}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>
        <View style={Styles.content}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style='auto' />
    </>
  );
}


const Styles = StyleSheet.create({
  search: {
    padding: 16,
    backgroundColor: 'green',
  },
  content: {
    backgroundColor:'pink',flex:1,padding:16
  }
})
