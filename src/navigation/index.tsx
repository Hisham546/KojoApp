import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/onboarding';
import LoginScreen from '../screens/login';
import BottomTabNavigator from './bottomTabs';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {

    return (
        <NavigationContainer>

            <Stack.Navigator>
                  <Stack.Screen
                    options={{ headerShown: false }}
                    name="Onboarding"
                    component={OnboardingScreen} />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Login"
                    component={LoginScreen} />
                <Stack.Screen
                  options={{ headerShown: false }}
                    name="BottomTabs"
                    component={BottomTabNavigator}
                />
              

            </Stack.Navigator>
        </NavigationContainer>
    )

}
export default MainNavigation;