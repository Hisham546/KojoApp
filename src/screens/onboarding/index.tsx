import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import { Images } from '../../assets/images';
import Ionicons from '@react-native-vector-icons/ionicons';
import { moderateScale } from 'react-native-size-matters';

const OnboardingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>

        <Image
          source={Images.onboardingBanner}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Your Credit Score</Text>

        <Text style={styles.description}>
          We provide you with the tools to monitor, understand, and improve your
          credit score.
        </Text>
      </View>

      <View style={styles.buttonOuter}>
        <Pressable style={styles.nextButton}
          onPress={() => navigation.navigate('Login')}>
          <Ionicons name="chevron-forward" size={moderateScale(25)} color="white" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;