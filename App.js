import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CityScreen from './screens/CityScreen';
import ChallengeScreen from './screens/ChallengeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="City" component={CityScreen} />
        <Stack.Screen name="Challenge" component={ChallengeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
