import React, { useState } from 'react';
import { Image, Text, View, ScrollView, Pressable, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@react-native-vector-icons/ionicons';
import { moderateScale } from 'react-native-size-matters';

import { Images } from '../../assets/images';
import ButtonComponent from '../../components/button/button';
import Input from '../../components/input/input';
import PhoneInput from '../../components/phone-input/phone-input';
import { DEFAULT_COUNTRY_CODE } from '../../components/phone-input/countries';
import { styles } from './styles';

const LoginScreen = ({ navigation }) => {
    const [countryCode, setCountryCode] = useState(DEFAULT_COUNTRY_CODE);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    
    const [keepLoggedIn, setKeepLoggedIn] = useState(false);

    const handleLogin = () => {
        navigation.navigate('BottomTabs');
    };

    const handleBiometricLogin = () => {
        console.log('Trigger biometric unlock hardware sensor module');
    };

    const handleSignUpPress = () => {
        navigation.navigate('SignUp');
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
                bounces={false}
            >
                <View style={styles.content}>
                    <View style={styles.logoContainer}>
                        <Image
                            source={Images.appLogo}
                            style={styles.logo}
                            resizeMode="contain"
                        />
                        <Text style={styles.tagline}>Ally in Debt</Text>
                    </View>

                    <PhoneInput
                        label="Phone Number"
                        countryCode={countryCode}
                        onCountryCodeChange={setCountryCode}
                        phoneNumber={phoneNumber}
                        onPhoneNumberChange={setPhoneNumber}
                        placeholder="Enter Your Phone Number"
                    />

                    <Input
                        label="First Name"
                        placeholder="Enter Your Email"
                        value={firstName}
                        onChangeText={setFirstName}
                        autoCapitalize="words"
                        autoCorrect={false}
                    />

                    <Input
                        label="Last Name"
                        placeholder="Enter Your Email"
                        value={lastName}
                        onChangeText={setLastName}
                        autoCapitalize="words"
                        autoCorrect={false}
                    />

                    <Input
                        label="Email Address"
                        placeholder="Enter Your Email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <Pressable 
                        style={styles.biometricRow} 
                        onPress={handleBiometricLogin}
                    >
                        <Ionicons 
                            name="finger-print-outline" 
                            size={moderateScale(20)} 
                            color="#3B74FF" 
                        />
                        <Text style={styles.biometricText}>Use Biometric Login</Text>
                    </Pressable>

                    <ButtonComponent
                        buttonText="Log In"
                        textStyle={styles.buttonText}
                        buttonStyle={styles.button}
                        onPress={handleLogin}
                    />

                    <View style={styles.rememberMeRow}>
                        <Text style={styles.rememberMeText}>Keep me logged in</Text>
                        <Switch
                            trackColor={{ false: '#E2E8F0', true: '#3B74FF' }}
                            thumbColor="#FFFFFF"
                            ios_backgroundColor="#E2E8F0"
                            onValueChange={setKeepLoggedIn}
                            value={keepLoggedIn}
                        />
                    </View>

                    <View style={styles.signUpFooter}>
                        <Text style={styles.footerNormalText}>Don't have an account ? </Text>
                        <Pressable onPress={handleSignUpPress}>
                            <Text style={styles.footerLinkText}>Sign Up</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default LoginScreen;