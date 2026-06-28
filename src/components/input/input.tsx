import React from 'react';
import { Text, TextInput, View } from 'react-native';

import { InputProps } from './modal';
import styles from './styles';

const Input: React.FC<InputProps> = ({
  label,
  style,
  placeholderTextColor = '#999999',
  ...rest
}) => {
  return (
    <View style={styles.container}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        style={[styles.input, style]}
        placeholderTextColor={placeholderTextColor}
        {...rest}
      />
    </View>
  );
};

export default Input;
