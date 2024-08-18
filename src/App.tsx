import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar as NativeStatusBar,
  StyleSheet,
} from "react-native";
import HomeScreen from "./presentation/screens/home/HomeScreen";
import DetailScreen from "./presentation/screens/details/DetailScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";

export type RootStackParams = {
  Home: undefined;
  Details: {
    movieId: number;
  };
};

const Stack = createStackNavigator<RootStackParams>();

const App = () => {
  React.useEffect(() => {
    NavigationBar.setBackgroundColorAsync("black");
    NavigationBar.setButtonStyleAsync("light"); 
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" backgroundColor="black" />
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
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? NativeStatusBar.currentHeight : 0,
  },
});

export default App;
