import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RestaurantInfoCard } from './src/features/restaurants/components/restaurant-info-card.component'
import { Text } from 'react-native'
import { SafeArea } from "./src/components/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { Navigation } from './src/infrastructure/navigation/index'
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { firebase } from "./firebaseConfig";
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import {
  useFonts as useLato,
  Lato_400Regular,
} from '@expo-google-fonts/lato';

export default function App() {
  let [OswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  let [LatoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!OswaldLoaded || !LatoLoaded) {
    return null
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );
}
