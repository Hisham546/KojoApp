import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

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
  fontSize: moderateScale(16),
  fontWeight: '600',
  color: '#2563EB', // Blue
},
logoContainer: {
  alignItems: 'center',
  marginBottom: verticalScale(32),
},
});
