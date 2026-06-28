import React, { useState } from 'react';
import {
  FlatList,
  Modal,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { COUNTRIES } from './countries';
import { Country, PhoneInputProps } from './modal';
import styles from './styles';

const PhoneInput: React.FC<PhoneInputProps> = ({
  label,
  countryCode,
  onCountryCodeChange,
  phoneNumber,
  onPhoneNumberChange,
  placeholder = 'Phone number',
}) => {
  const [isCountryModalVisible, setIsCountryModalVisible] = useState(false);

  const selectedCountry =
    COUNTRIES.find(country => country.dialCode === countryCode) ?? COUNTRIES[0];

  const handleSelectCountry = (country: Country) => {
    onCountryCodeChange(country.dialCode);
    setIsCountryModalVisible(false);
  };

  return (
    <View>
      {label ? <Text style={styles.label}>{label}</Text> : null}

      <View style={styles.row}>
        <TouchableOpacity
          activeOpacity={0.75}
          style={styles.countrySelector}
          onPress={() => setIsCountryModalVisible(true)}>
          <Text style={styles.countryCode}>
            {selectedCountry.flag}
          </Text>
          <Text style={styles.countryChevron}>▼</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.phoneInput}
          placeholder={placeholder}
          placeholderTextColor="#999999"
          value={phoneNumber}
          onChangeText={onPhoneNumberChange}
          keyboardType="phone-pad"
          autoCorrect={false}
        />
      </View>

      <Modal
        visible={isCountryModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setIsCountryModalVisible(false)}>
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setIsCountryModalVisible(false)}>
          <Pressable style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select country</Text>

            <FlatList
              data={COUNTRIES}
              keyExtractor={item => item.code}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.countryOption}
                  onPress={() => handleSelectCountry(item)}>
                  <Text style={styles.countryOptionText}>
                    {item.flag} {item.name}{' '}
                    <Text style={styles.countryOptionDialCode}>
                      ({item.dialCode})
                    </Text>
                  </Text>
                </TouchableOpacity>
              )}
            />
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
};

export default PhoneInput;