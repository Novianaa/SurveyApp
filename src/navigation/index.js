import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SurveyScreen from '../screens/SurveyScreen';
import DoneScreen from '../screens/DoneScreen';

const Stack = createNativeStackNavigator();

function MainStackNavigator() {
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