import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Ionicons from '@react-native-vector-icons/ionicons';

const QuickActions = () => {
 
  const actions = [
    {
      id: 'pay',
      title: 'Pay\nMoney',
      icon: 'card-outline',
      iconColor: '#3B74FF',
      bgColor: '#EEF4FF',
    },
    {
      id: 'loan',
      title: 'Loan\nRequest',
      icon: 'document-text-outline',
      iconColor: '#10B981',
      bgColor: '#E6F9F3',
    },
    {
      id: 'chat',
      title: 'Chat\nSupport',
      icon: 'chatbubble-ellipses-outline',
      iconColor: '#F59E0B',
      bgColor: '#FFF7ED',
    },
    {
      id: 'finance',
      title: 'Finance\nHub',
      icon: 'bar-chart-outline',
      iconColor: '#8B5CF6',
      bgColor: '#F5F3FF',
    },
  ];

  return (
    <View style={styles.container}>
      {actions.map((item) => (
        <View key={item.id} style={styles.actionCardWrapper}>
          <Pressable
            style={({ pressed }) => [
              styles.iconContainer,
              { backgroundColor: item.bgColor },
              pressed && styles.buttonPressed,
            ]}
            onPress={() => console.log(`${item.title.replace('\n', ' ')} pressed`)}
          >
            <Ionicons 
              name={item.icon} 
              size={moderateScale(24)} 
              color={item.iconColor} 
            />
          </Pressable>
          
          <Text style={styles.actionLabel}>
            {item.title}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderRadius: moderateScale(24),
    paddingVertical: verticalScale(20),
    paddingHorizontal: scale(12),
    marginVertical: verticalScale(16),
    
  
  },
  actionCardWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  iconContainer: {
    width: scale(50),
    height: scale(50),
    borderRadius: moderateScale(25),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(8),
  },
  actionLabel: {
    fontSize: moderateScale(12),
    fontWeight: '500',
    color: '#4B5563',
    textAlign: 'center',
    lineHeight: moderateScale(15),
  },
  buttonPressed: {
    opacity: 0.75,
    transform: [{ scale: 0.96 }],
  },
});

export default QuickActions;