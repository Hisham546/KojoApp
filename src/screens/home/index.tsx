import React from 'react';
import { Pressable, Text, View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@react-native-vector-icons/ionicons';

import CreditScoreCard from './components/creditScoreCard';
import QuickActions from './components/quickActions';
import CreditHistory from './components/creditHistoryCard';
import FloatingButton from './components/floatingButton';
import { styles } from './styles';

const HomeScreen = () => {
  const handleNotificationPress = () => {
    console.log('Notification button pressed');
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
  
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.headerContainer}>
          <View style={styles.welcomeTextWrapper}>
            <Text style={styles.greetingText}>
              Hi,Sarah
            </Text>
            <Text style={styles.subtitleText}>
              Your credit is in excellent shape!
            </Text>
          </View>

          <Pressable
            style={({ pressed }) => [
              styles.notificationContainer,
              pressed && styles.buttonPressed
            ]}
            onPress={handleNotificationPress}
          >
            <Ionicons
              name="notifications-outline"
              size={22}
              color="#111111"
            />
          </Pressable>
        </View>


        <CreditScoreCard />
        <QuickActions />
        <CreditHistory />
      </ScrollView>
      <FloatingButton />
    </SafeAreaView>
  );
};


export default HomeScreen;