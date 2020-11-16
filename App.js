import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements';
import ContactClient from './src/pages/ContactClient';
import ContactProvider from './src/pages/ContactProvider';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Header
        centerComponent={{ 
          text: 'Contact List', 
          style: { color: '#fff', fontSize: 25 } 
        }}
        ViewComponent={LinearGradient}
        linearGradientProps={{
          colors: ['#1E9577', '#73DBBA'],
          start: { x: 0, y: 0.5 },
          end: { x: 1, y: 0.5 },
        }}
      />
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;

            if (route.name === 'Clients') {
              iconName = 'user-tag';
            } else if (route.name === 'Providers') {
              iconName = 'hand-holding-usd';
            }
            
            return <Icon name={iconName} type='font-awesome-5' size={26} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#1E9577',
          inactiveTintColor: '#D9D4D1',
          labelStyle: { fontSize: 16 }
        }}
        initialRouteName="Clients"
      >
        <Tab.Screen name="Clients" component={ContactClient} />
        <Tab.Screen name="Providers" component={ContactProvider} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};