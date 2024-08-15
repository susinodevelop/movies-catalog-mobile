import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./presentation/screens/home/HomeScreen";
import DetailScreen from "./presentation/screens/details/DetailScreen";
import { createStackNavigator } from "@react-navigation/stack";

export type RootStackParams = {
  Home: undefined;
  Details: {
    movieId: number;
  };
};

const Stack = createStackNavigator<RootStackParams>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
