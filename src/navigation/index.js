import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SurveyScreen from '../screens/SurveyScreen';
import DoneScreen from '../screens/DoneScreen';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

function MainStackNavigator() {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SurveyScreen"
          component={SurveyScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DoneScreen"
          component={DoneScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainStackNavigator;