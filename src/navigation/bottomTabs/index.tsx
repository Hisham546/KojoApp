import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@react-native-vector-icons/ionicons';
import HomeScreen from '../../screens/home';
import MessageScreen from '../../screens/message';
import ProfileScreen from '../../screens/profile';
import { Text, View } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';



const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,

                tabBarShowLabel: false,

                tabBarStyle: {
                    height: 70,
                    borderTopWidth: 0,
                    elevation: 10,
                    backgroundColor: '#FFFFFF',
                },

                tabBarIcon: ({ focused }) => {
                    let iconName;

                    switch (route.name) {
                        case 'Home':
                            iconName = focused ? 'home' : 'home-outline';
                            break;

                        case 'Messages':
                            iconName = focused ? 'chatbubble' : 'chatbubble-outline';
                            break;

                        case 'Profile':
                            iconName = focused ? 'person-circle' : 'person-circle-outline';
                            break;

                        default:
                            iconName = 'ellipse';
                    }

                    return (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <Ionicons
                                name={iconName}
                                size={24}
                                color={focused ? '#3467F6' : '#BDBDBD'}
                            />

                            {focused && (
                                <Text
                                    numberOfLines={1}
                                    adjustsFontSizeToFit
                                    style={{
                                        fontSize: moderateScale(10),
                                        lineHeight: moderateScale(14),
                                        color: '#3467F6',
                                        marginTop: verticalScale(4),
                                        fontWeight: '600',
                                    }}>
                                    {route.name}
                                </Text>
                            )}
                        </View>
                    );
                },
            })}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Message" component={MessageScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;