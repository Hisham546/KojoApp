import { StyleSheet } from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
} from 'react-native-size-matters';

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
    fontSize: moderateScale(30),
    lineHeight: moderateScale(38),
    fontWeight: '300',
    color: '#000000',
    marginBottom: verticalScale(12),
  },

  description: {
    fontSize: moderateScale(16),
    lineHeight: moderateScale(24),
    color: '#000000',
   // width: '82%',
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
    width: scale(60),
    height: scale(60),
    borderRadius: scale(31),

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