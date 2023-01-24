import React from 'react';
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

  const Tab = createBottomTabNavigator();

  const Settings = () => (
    <SafeArea>
      <Text>Settings</Text>
    </SafeArea>
  );
  const Map = () => (
    <SafeArea>
      <Text>Map</Text>
    </SafeArea>
  );

  const TAB_ICON = {
    Restaurants: "md-restaurant",
    Map: "md-map",
    Settings: "md-settings",
  };
  
  const createScreen = ({ route }) => ({
    headerShown: false,
    tabBarIcon: ({ color, size }) => {
      let iconName = TAB_ICON[route.name]
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
  })

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={createScreen}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );
}
