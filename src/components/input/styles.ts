import { StyleSheet } from 'react-native';
import fontFamily from '../../themes/fontFamily';
import { moderateScale, verticalScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: moderateScale(13),
    fontFamily: fontFamily.P_REGULAR,
    color: '#222222',
    marginBottom: 5,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: moderateScale(13),
    fontFamily: fontFamily.P_REGULAR,
    color: '#000000',
    width: '100%',
  },
  errorText: {
    color: '#EF4444',
    fontSize: moderateScale(12),
    marginTop: verticalScale(4),
  },
});

export default styles;
