import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Images } from '../../assets/images';
import ButtonComponent from '../../components/button/button';
import Input from '../../components/input/input';
import PhoneInput from '../../components/phone-input/phone-input';
import { DEFAULT_COUNTRY_CODE } from '../../components/phone-input/countries';
import { styles } from './styles';

const LoginScreen = () => {
    const [countryCode, setCountryCode] = useState(DEFAULT_COUNTRY_CODE);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleLogin = () => { };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.logoContainer}>
                <Image
                    source={Images.appLogo}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <Text style={styles.tagline}>Ally in debt</Text>
                </View>
                <PhoneInput
                    label="Phone number"
                    countryCode={countryCode}
                    onCountryCodeChange={setCountryCode}
                    phoneNumber={phoneNumber}
                    onPhoneNumberChange={setPhoneNumber}
                    placeholder="Enter phone number"
                />

                <Input
                    label="First name"
                    placeholder="First name"
                    value={firstName}
                    onChangeText={setFirstName}
                    autoCapitalize="words"
                    autoCorrect={false}
                />

                <Input
                    label="Last name"
                    placeholder="Last name"
                    value={lastName}
                    onChangeText={setLastName}
                    autoCapitalize="words"
                    autoCorrect={false}
                />

                <Input
                    label="Email Address"
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <ButtonComponent
                    buttonText="Log In"
                    textStyle={styles.buttonText}
                    buttonStyle={styles.button}
                    onPress={handleLogin}
                />
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;