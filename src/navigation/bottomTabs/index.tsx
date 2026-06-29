import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@react-native-vector-icons/ionicons';
import HomeScreen from '../../screens/home';
import MessageScreen from '../../screens/message';
import ProfileScreen from '../../screens/profile';
import { Text, View, StyleSheet, Image } from 'react-native';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import { Images } from '../../assets/images';
import fontFamily from '../../themes/fontFamily';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
                tabBarItemStyle: styles.tabBarItem,
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={styles.iconContainer}>


                            {route.name === 'Profile' ? (
                                <Image
                                    source={Images.userAvatar}
                                    style={[
                                        styles.userAvatarImage,
                                        focused && styles.userAvatarImageFocused
                                    ]}
                                    resizeMode="cover"
                                />
                            ) : (
                                <Ionicons
                                    name={route.name === 'Home' ? (focused ? 'home' : 'home-outline') : (focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline')}
                                    size={moderateScale(22)}
                                    color={focused ? '#3467F6' : '#9CA3AF'}
                                />
                            )}

                            {focused && (
                                <Text
                                    numberOfLines={1}
                                    adjustsFontSizeToFit
                                    style={styles.activeLabel}>
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

const styles = StyleSheet.create({


    tabBar: {
        position: 'absolute',
        left: scale(16),
        right: scale(16),
        height: verticalScale(64),
        backgroundColor: '#FFFFFF',
        borderRadius: moderateScale(32),
        borderTopWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.04,
        shadowRadius: 12,
        elevation: 8,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 0,
    },
    tabBarItem: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        top: verticalScale(15)


    },
    activeLabel: {
        fontSize: moderateScale(15),
        lineHeight: moderateScale(18),
        color: '#3467F6',
        fontFamily: fontFamily.P_MEDIUM,
    },
    userAvatarImage: {
        width: scale(26),
        height: scale(26),
        borderRadius: scale(13),
        backgroundColor: '#E2E8F0',
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    userAvatarImageFocused: {
        borderWidth: 2,
        borderColor: '#3467F6',
    },
});

export default BottomTabNavigator;