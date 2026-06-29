import React from 'react';
import { StyleSheet, Text, View, FlatList, Pressable, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@react-native-vector-icons/ionicons';
import Header from '../../components/header';
import { Images } from '../../assets/images';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/modals';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'Message'
>;

const MessageScreen = ({ navigation }: Props) => {

  const conversations = [
    {
      id: '1',
      title: 'Premium Credit Solutions',
      subtitle: 'Payment confirmed! Your receipt will arrive in your email shortly.',
      time: '2hr ago',
      statusColor: '#10B981',
    },
    {
      id: '2',
      title: 'Standard Payment Services',
      subtitle: "We got your request. It's under review and you'll be notified once approved.",
      time: '2day ago',
      statusColor: '#F59E0B',
    },
    {
      id: '3',
      title: 'Basic Financial Support',
      subtitle: 'Payment recorded successfully. A confirmation email and SMS are on the way.',
      time: '2day ago',
      statusColor: '#9CA3AF',
    },
    {
      id: '4',
      title: 'Nova Finance Group',
      subtitle: "Your payment went through! We've sent a detailed statement breakdown.",
      time: '3day ago',
      statusColor: '#10B981',
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Header
        title="Messages"
        onBackPress={() => console.log('Go back')}
        onRightPress={() => console.log('Forward menu')}
      />

      <View style={styles.listWrapper}>
        <FlatList
          bounces={false}
          data={conversations}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.innerCardContent}
          style={styles.mainCardContainer}
          showsVerticalScrollIndicator={false}


          ListHeaderComponent={
            <View style={styles.cardHeaderGroup}>
              <View style={styles.searchContainer}>
                <Ionicons name="search-outline" size={18} color="#A0AEC0" style={styles.searchIcon} />
                <TextInput
                  placeholder="Search Your messages"
                  placeholderTextColor="#A0AEC0"
                  style={styles.searchInput}
                />
              </View>
              <Text style={styles.sectionHeader}>Today</Text>
            </View>
          }

          renderItem={({ item, index }) => {
            const isLast = index === conversations.length - 1;
            return (
              <Pressable style={[styles.messageRow]}>
                <Image
                  source={Images.messageListLogo}
                  style={styles.avatarPlaceholder}
                  resizeMode="cover"
                />
                <View style={styles.textBlock}>
                  <View style={styles.cardHeaderRow}>
                    <Text style={styles.cardTitle} numberOfLines={1}>{item.title}</Text>
                    <View style={[styles.statusIndicator, { backgroundColor: item.statusColor }]} />
                  </View>
                  <Text style={styles.cardSubtitle} numberOfLines={2}>{item.subtitle}</Text>
                  <Text style={styles.timeStamp}>{item.time}</Text>
                </View>
              </Pressable>
            );
          }}
        />
      </View>

      <View style={styles.actionFooter}>
        <Pressable style={styles.chatButton}>
          <Text style={styles.chatButtonText}>Start a new chat</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default MessageScreen;