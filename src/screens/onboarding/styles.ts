import { StyleSheet } from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
} from 'react-native-size-matters';
import fontFamily from '../../themes/fontFamily';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  imageContainer: {
    width: '100%',
    height: verticalScale(470),

  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  bottomContainer: {
    paddingHorizontal: scale(28),
    paddingTop: verticalScale(5),
    paddingBottom: verticalScale(32),
   
  },

  title: {
    fontSize: moderateScale(28),
    lineHeight: moderateScale(38),
   fontFamily:fontFamily.P_REGULAR,
    color: '#000000',
    marginBottom: verticalScale(12),
  },

  description: {
    fontSize: moderateScale(14),
    lineHeight: moderateScale(20),
    color: '#000000',
     fontFamily:fontFamily.P_REGULAR,

  },
  buttonOuter: {
    position: 'absolute',
    right: scale(28),
    bottom: verticalScale(36),

    width: scale(73),
    height: scale(73),
    borderRadius: scale(38),

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#FFFFFF',
    borderWidth: scale(2),
    borderColor: '#3467F6',
  },

  nextButton: {
    width: scale(58),
    height: scale(58),
    borderRadius: scale(29),

    backgroundColor: '#3467F6',

    justifyContent: 'center',
    alignItems: 'center',
  },

  arrow: {
    color: '#FFFFFF',
    fontSize: moderateScale(34),
    fontWeight: '300',
    marginTop: verticalScale(-2),
  },
});