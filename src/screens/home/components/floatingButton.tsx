import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { verticalScale } from 'react-native-size-matters';

const FloatingButton = () => {
  return (
    <Pressable 
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed
      ]}
      
    >
      <Text style={styles.icon}>+</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    right: 16,
   bottom: verticalScale(96),
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#3B74FF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#3B74FF',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.96 }],
  },
  icon: {
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: '300',
    lineHeight: 34, // Keeps the plus sign perfectly vertical
  },
});

export default FloatingButton;