import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import Header from '../../components/header';
import { ProfileInfoRow, ProfileToggleRow } from './components/profileItems';
import { Images } from '../../assets/images';
import { RootStackParamList } from '../../navigation/modals';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAuthStore } from '../../store/authSTore';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'Profile'
>;

const ProfileScreen = ({ navigation }: Props) => {

  const [faceIdEnabled, setFaceIdEnabled] = useState(false);
  const [fingerprintEnabled, setFingerprintEnabled] = useState(false);

  const user = useAuthStore(state => state.user);

  
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Header
        title="Profile"
        onBackPress={() => navigation.goBack()}
        onRightPress={() => console.log('Settings menu')}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        <View style={styles.avatarSection}>
          <View style={styles.avatarOutline}>
            <Image
              source={Images.userAvatar}
              style={styles.userAvatarImage}
              resizeMode="cover"
            />
          </View>
          <Text style={styles.profileName}>{user?.firstName}</Text>
        </View>

        {/* Info Card Container */}
        <View style={styles.cardContainer}>
          <ProfileInfoRow
            icon="mail-outline"
            iconColor="#3B74FF"
            iconBg="#EEF4FF"
            label="Email"
            value={user?.email ?? ''}
            isLast={undefined} />
          <ProfileInfoRow
            icon="phone-portrait-outline"
            iconColor="#10B981"
            iconBg="#E6F9F3"
            label="Phone"
            value={`(${user?.countryCode}) ${user?.phoneNumber}`} isLast={undefined} />
          <ProfileInfoRow
            icon="calendar-clear-outline" iconColor="#3B74FF" iconBg="#EEF4FF"
            label="DOB" value="1998" isLast
          />
        </View>

        {/* Security Feature Section */}
        <Text style={styles.sectionTitle}>Security</Text>
        <View style={styles.cardContainer}>
          <ProfileToggleRow
            icon="happy-outline" iconColor="#3B74FF" iconBg="#EEF4FF"
            label="Face ID" subtext="Use Face ID to unlock the app"
            value={faceIdEnabled} onValueChange={setFaceIdEnabled} isLast={undefined} />
          <ProfileToggleRow
            icon="finger-print-outline" iconColor="#3B74FF" iconBg="#EEF4FF"
            label="Fingerprint" subtext="Use Fingerprint to unlock the app"
            value={fingerprintEnabled} onValueChange={setFingerprintEnabled}
            isLast
          />
        </View>

        <Text style={styles.sectionTitle}>Appearance</Text>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ProfileScreen;