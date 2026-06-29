import React from 'react';
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Header from '../../components/header';


const MessageScreen = ({ navigation }) => {
  const conversations = [
    {
      id: '1',
      title: 'Premium Credit Solutions',
      subtitle: 'Payment confirmed! Your receipt will arrive in your email shortly.',
      time: '2hr ago',
      statusColor: '#10B981', // Active Green
    },
    {
      id: '2',
      title: 'Standard Payment Services',
      subtitle: "We got your request. It's under review and you'll be notified once approved.",
      time: '2day ago',
      statusColor: '#F59E0B', // Warning Orange
    },
    {
      id: '3',
      title: 'Basic Financial Support',
      subtitle: 'Payment recorded successfully. A confirmation email and SMS are on the way.',
      time: '2day ago',
      statusColor: '#9CA3AF', // Inactive Gray
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

      <FlatList
        data={conversations}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={<Text style={styles.sectionHeader}>Today</Text>}
        renderItem={({ item }) => (
          <Pressable style={styles.messageCard}>
            <View style={styles.avatarPlaceholder} />
            <View style={styles.textBlock}>
              <View style={styles.cardHeaderRow}>
                <Text style={styles.cardTitle} numberOfLines={1}>{item.title}</Text>
                <View style={[styles.statusIndicator, { backgroundColor: item.statusColor }]} />
              </View>
              <Text style={styles.cardSubtitle} numberOfLines={2}>{item.subtitle}</Text>
              <Text style={styles.timeStamp}>{item.time}</Text>
            </View>
          </Pressable>
        )}
      />

      <View style={styles.actionFooter}>
        <Pressable style={styles.chatButton}>
          <Text style={styles.chatButtonText}>Start a new chat</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  listContent: {
    paddingHorizontal: scale(20),
    paddingBottom: verticalScale(100),
  },
  sectionHeader: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: '#111111',
    marginVertical: verticalScale(14),
  },
  messageCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: moderateScale(20),
    padding: scale(14),
    marginBottom: verticalScale(12),
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  avatarPlaceholder: {
    width: scale(44),
    height: scale(44),
    borderRadius: moderateScale(14),
    backgroundColor: '#E2E8F0',
  },
  textBlock: {
    flex: 1,
    marginLeft: scale(12),
  },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: moderateScale(14),
    fontWeight: '700',
    color: '#1A1C1E',
    flex: 1,
    paddingRight: scale(8),
  },
  statusIndicator: {
    width: scale(8),
    height: scale(8),
    borderRadius: scale(4),
  },
  cardSubtitle: {
    fontSize: moderateScale(12),
    color: '#7C8087',
    marginTop: verticalScale(4),
    lineHeight: moderateScale(16),
  },
  timeStamp: {
    fontSize: moderateScale(11),
    color: '#9CA3AF',
    textAlign: 'right',
    marginTop: verticalScale(4),
  },
  actionFooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: scale(20),
    paddingBottom: verticalScale(20),
    backgroundColor: 'transparent',
  },
  chatButton: {
    backgroundColor: '#3B74FF',
    borderRadius: moderateScale(16),
    height: verticalScale(48),
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatButtonText: {
    color: '#FFFFFF',
    fontSize: moderateScale(14),
    fontWeight: '600',
  },
});

export default MessageScreen;