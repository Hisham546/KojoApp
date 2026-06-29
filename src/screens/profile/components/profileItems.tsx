import React from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

// 1. Component for Data Fields (Email, Phone, etc.)
export const ProfileInfoRow = ({ icon, iconColor, iconBg, label, value, isLast }) => (
    <View style={[styles.infoRow, isLast && styles.noBorder]}>
        <View style={[styles.iconWrapper, { backgroundColor: iconBg }]}>
            <Ionicons name={icon} size={moderateScale(18)} color={iconColor} />
        </View>
        <View style={styles.infoTexts}>
            <Text style={styles.infoLabel}>{label}</Text>
            <Text style={styles.infoValue}>{value}</Text>
        </View>
    </View>
);

// 2. Component for Switch Settings (Face ID, Fingerprint, etc.)
export const ProfileToggleRow = ({ icon, iconColor, iconBg, label, subtext, value, onValueChange, isLast }) => (
    <View style={[styles.toggleRow, isLast && styles.noBorder]}>
        <View style={styles.toggleLeftGroup}>
            <View style={[styles.iconWrapper, { backgroundColor: iconBg }]}>
                <Ionicons name={icon} size={moderateScale(18)} color={iconColor} />
            </View>
            <View style={styles.infoTexts}>
                <Text style={styles.settingLabel}>{label}</Text>
                <Text style={styles.settingSubtext}>{subtext}</Text>
            </View>
        </View>
        <Switch
            value={value}
            onValueChange={onValueChange}
            trackColor={{ false: '#E2E8F0', true: '#3B74FF' }}
            thumbColor="#FFFFFF"
        />
    </View>
);

const styles = StyleSheet.create({
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: verticalScale(12),
        borderBottomWidth: 1,
        borderBottomColor: '#F8FAFC',
    },
    toggleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: verticalScale(12),
        borderBottomWidth: 1,
        borderBottomColor: '#F8FAFC',
    },
    noBorder: {
        borderBottomWidth: 0,
    },
    iconWrapper: {
        width: scale(36),
        height: scale(36),
        borderRadius: moderateScale(12),
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoTexts: {
        marginLeft: scale(14),
        flex: 1,
    },
    infoLabel: {
        fontSize: moderateScale(12),
        color: '#7C8087',
        fontWeight: '500',
    },
    infoValue: {
        fontSize: moderateScale(13),
        color: '#111111',
        fontWeight: '600',
        marginTop: verticalScale(2),
    },
    toggleLeftGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    settingLabel: {
        fontSize: moderateScale(14),
        fontWeight: '600',
        color: '#111111',
    },
    settingSubtext: {
        fontSize: moderateScale(11),
        color: '#7C8087',
        marginTop: verticalScale(2),
    },
});