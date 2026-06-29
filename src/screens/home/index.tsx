import React from 'react';
import { Pressable, Text, View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@react-native-vector-icons/ionicons';

import CreditScoreCard from './components/creditScoreCard';
import QuickActions from './components/quickActions';
import CreditHistory from './components/creditHistoryCard';
import FloatingButton from './components/floatingButton';
import { styles } from './styles';
import { useAuthStore } from '../../store/authSTore';

const HomeScreen = () => {
  const user = useAuthStore(state => state.user);

  const handleNotificationPress = () => {

  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>

      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.headerContainer}>
          <View style={styles.welcomeTextWrapper}>
            <Text style={styles.greetingText}>
              Hi,{user?.firstName}
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