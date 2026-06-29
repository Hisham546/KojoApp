import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import fontFamily from '../../themes/fontFamily';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#000000',
        marginBottom: 8,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#666666',
        textAlign: 'center',
        marginBottom: 32,
    },
    button: {
        marginTop: 8,
        width: '100%',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF',
    },
    logo: {
        width: scale(180),
        height: verticalScale(80),
    },
    tagline: {
        marginTop: verticalScale(8),
        fontSize: moderateScale(20),
        fontFamily: fontFamily.P_REGULAR,
        color: '#346AFD',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: verticalScale(200),
        marginBottom: verticalScale(22),
    },
    rememberMeRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: verticalScale(20),
    },
    rememberMeText: {
        fontSize: moderateScale(14),
        fontFamily: fontFamily.P_MEDIUM,
        color: '#7C8087',
    },
    signUpFooter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: verticalScale(40),
        marginBottom: verticalScale(10),
    },
    footerNormalText: {
        fontSize: moderateScale(13),
        fontFamily: fontFamily.P_REGULAR,
        color: '#6E6E6E',
    },
    footerLinkText: {
        fontSize: moderateScale(14),
        fontFamily: fontFamily.P_MEDIUM,
        color: '#3B74FF',
        fontWeight: '600',
    },
    biometricRow: {
        flexDirection: 'row',
        alignItems: 'center',
       marginBottom: verticalScale(16),
    },
    biometricText: {
        fontSize: moderateScale(13),
        fontFamily: fontFamily.P_REGULAR,
        color: '#6E6E6E',
        marginLeft: scale(8),
    },
    scrollContent: {
        paddingBottom: verticalScale(20),
    },
});
