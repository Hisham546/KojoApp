import React, { ComponentProps } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import fontFamily from '../../themes/fontFamily';


type IoniconName = ComponentProps<typeof Ionicons>['name'];

interface HeaderProps {
    title: string;
    onBackPress: () => void;
    onRightPress: () => void;
    rightIcon?: IoniconName;
}
const Header: React.FC<HeaderProps> = ({
    title,
    onBackPress,
    onRightPress,
    rightIcon = 'chevron-forward',
}) => {
    return (
        <View style={styles.headerContainer}>
            <Pressable
                style={({ pressed }) => [styles.iconButton, pressed && styles.buttonPressed]}
                onPress={onBackPress}
            >
                <Ionicons name="chevron-back" size={moderateScale(20)} color="#111111" />
            </Pressable>
            <Text style={styles.headerTitle}>{title}</Text>
            <Pressable
                style={({ pressed }) => [styles.iconButton, pressed && styles.buttonPressed]}
                onPress={onRightPress}
            >
                <Ionicons name={rightIcon} size={moderateScale(20)} color="#111111" />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: scale(20),
        paddingVertical: verticalScale(12),
        backgroundColor: '#e4ebfe',
    },
    iconButton: {
        width: scale(40),
        height: scale(40),
        borderRadius: moderateScale(14),
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#EAEFF5',
        top: verticalScale(5)
    },
    headerTitle: {
        flex: 1,
        marginLeft: scale(12),
        fontSize: moderateScale(20),
        fontFamily: fontFamily.P_MEDIUM,
        color: '#000000',
        textAlign: 'left',
         top: verticalScale(5)
    },
    buttonPressed: {
        opacity: 0.7,
    },
});

export default Header;