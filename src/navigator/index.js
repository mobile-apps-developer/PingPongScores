import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {Screens} from '../constants';
import Players from '../screens/Players';
import Scores from '../screens/Scores';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Screens.Players}
          options={{headerShown: true, title: 'Players'}}
          component={Players}
        />
        <Stack.Screen
          name={Screens.Scores}
          component={Scores}
          options={{title: 'Scores'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
