import React, { useState } from 'react';
import { Image, Text, View, ScrollView, Pressable, Switch, ToastAndroid } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@react-native-vector-icons/ionicons';
import { moderateScale } from 'react-native-size-matters';

import { Images } from '../../assets/images';
import ButtonComponent from '../../components/button/button';
import Input from '../../components/input/input';
import PhoneInput from '../../components/phone-input/phone-input';
import { DEFAULT_COUNTRY_CODE } from '../../components/phone-input/countries';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/modals';
import { useAuthStore } from '../../store/authSTore';


type Props = NativeStackScreenProps<
    RootStackParamList,
    'Login'
>;



const LoginScreen = ({ navigation }: Props) => {
    const [countryCode, setCountryCode] = useState(DEFAULT_COUNTRY_CODE);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [keepLoggedIn, setKeepLoggedIn] = useState(false);
    const [phoneError, setPhoneError] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');

    const login = useAuthStore(state => state.login);

    const validateForm = () => {
        let isValid = true;


        setPhoneError('');
        setFirstNameError('');
        setLastNameError('');
        setEmailError('');

        if (!phoneNumber.trim()) {
            setPhoneError('Phone number is required');
            isValid = false;
        } else if (!/^\d{10}$/.test(phoneNumber)) {
            setPhoneError('Enter a valid phone number');
            isValid = false;
        }

        if (!firstName.trim()) {
            setFirstNameError('First name is required');
            isValid = false;
        }

        if (!lastName.trim()) {
            setLastNameError('Last name is required');
            isValid = false;
        }

        if (!email.trim()) {
            setEmailError('Email is required');
            isValid = false;
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
        ) {
            setEmailError('Enter a valid email');
            isValid = false;
        }

        return isValid;
    };

    const handleLogin = () => {
        if (!validateForm()) {
            return;
        }
        login({
            firstName,
            lastName,
            email,
            phoneNumber,
            countryCode,
        });
        ToastAndroid.show(
            'Login successful',
            ToastAndroid.SHORT,
        );
        navigation.navigate('BottomTabs');
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
                        error={phoneError}
                    />

                    <Input
                        label="First Name"
                        placeholder="Enter Your Email"
                        value={firstName}
                        onChangeText={setFirstName}
                        autoCapitalize="words"
                        autoCorrect={false}
                        error={firstNameError}
                    />

                    <Input
                        label="Last Name"
                        placeholder="Enter Your Email"
                        value={lastName}
                        onChangeText={setLastName}
                        autoCapitalize="words"
                        autoCorrect={false}
                        error={lastNameError}
                    />

                    <Input
                        label="Email Address"
                        placeholder="Enter Your Email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        error={emailError}

                    />

                    <Pressable
                        style={styles.biometricRow}

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
                        <Pressable >
                            <Text style={styles.footerLinkText}>Sign Up</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default LoginScreen;