import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

const OnboardingScreen = () => {
  const handleContinue = () => {
    // TODO: Navigate to the next screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Kojo</Text>
        <Text style={styles.subtitle}>
          Build your onboarding flow here
        </Text>
      </View>

      <Pressable style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
