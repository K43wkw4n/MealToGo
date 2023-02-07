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

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import {
  useFonts as useLato,
  Lato_400Regular,
} from '@expo-google-fonts/lato';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      firebase.auth.signInWithEmailAndPassword(
        firebase.getAuth,
        "Parzival@gmail.com",
        "wedwatts3"
      ).then((user) => { setIsAuthenticated(true) }).catch(() => { setIsAuthenticated(false) })
    }, 2000)
  }, [])

  let [OswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  let [LatoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!OswaldLoaded || !LatoLoaded) {
    return null
  }

  if (!isAuthenticated) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );
}
