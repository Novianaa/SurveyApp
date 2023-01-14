import React from "react";
import MainStackNavigator from "./src/navigation";
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, View } from "react-native";

function App() {
  return (
    <>
      <MainStackNavigator />
    </>

  );
}

export default App;
