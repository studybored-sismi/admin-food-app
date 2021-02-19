
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View ,Text} from 'react-native';
import { useFonts } from 'expo-font';

import restScreen from './screens/restScreen';
import regScreen from './screens/regScreen';
import reviewScreen from './screens/reviewScreen';
import tabScreen from './screens/tabScreen';
import foodScreen from './screens/foodScreen';
import detailScreen from './screens/detailScreen';
import confScreen from './screens/confScreen';
import EditScreen from './screens/EditScreen';

const Stack = createStackNavigator();
export default function App() {
  const [loaded] = useFonts({
    OpenSansRegular: require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf'),
    OpenSansSemiBold: require('./assets/fonts/OpenSans-SemiBold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
   
    <NavigationContainer>
      
      <Stack.Navigator>

      
           <Stack.Screen name="restScreen"
          component={restScreen}
          options={
            { headerShown: false }
          }
        />

<Stack.Screen name="regScreen"
          component={regScreen}
          options={
            { headerShown: false }
          }
        />

<Stack.Screen name="reviewScreen"
          component={reviewScreen}
          options={
            { headerShown: false }
          }
        />
    <Stack.Screen name="tabScreen"
          component={tabScreen}
          options={
            { headerShown: false }
          }
        />

<Stack.Screen name="foodScreen"
          component={foodScreen}
          options={
            { headerShown: false }
          }
        />

<Stack.Screen name="detailScreen"
          component={detailScreen}
          options={
            { headerShown: false }
          }
        />

<Stack.Screen name="confScreen"
          component={confScreen}
          options={
            { headerShown: false }
          }
        />
      
      <Stack.Screen name="EditScreen"
          component={EditScreen}
          options={
            { headerShown: false }
          }
        />

</Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

