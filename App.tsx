import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/screens/homeScreen';
import NotificationScreen from './src/screens/notificationScreen';

const bottomTab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <bottomTab.Navigator
          screenOptions={{

            headerStyle: {backgroundColor: '#043266'},
              headerTintColor: 'white',
              tabBarActiveBackgroundColor : '#043266',
              tabBarActiveTintColor : 'white'
          }}>
          <bottomTab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon : ({color, size}) => {
                return <Ionicons name='home' color={color} size = {size}/>
              }
             
            }}
          />
          <bottomTab.Screen
            name="Notification"
            component={NotificationScreen}
            options={{
              tabBarIcon : ({color, size}) => {
                return <Ionicons name='alert' color={color} size = {size}/>
              }
            
            }}
          />
        </bottomTab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});

export default App;
