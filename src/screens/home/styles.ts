import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import fontFamily from '../../themes/fontFamily';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    position: 'relative',
  },
  scrollContent: {
    paddingHorizontal: scale(20),
    paddingBottom: verticalScale(70),
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: verticalScale(16),
    marginBottom: verticalScale(24),
    width: '100%',
  },
  welcomeTextWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  greetingText: {
    fontSize: moderateScale(24),
    fontFamily: fontFamily.P_BOLD,
    color: '#111111',
    letterSpacing: -0.5,
  },
  subtitleText: {
    fontSize: moderateScale(14),
    color: '#7C8087',
    fontFamily: fontFamily.REGULAR,
  },
  notificationContainer: {
    width: scale(44),
    height: scale(44),
    borderRadius: moderateScale(16),
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EAEFF5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: verticalScale(2) },
    shadowOpacity: 0.03,
    shadowRadius: moderateScale(6),
    elevation: 1,
  },
  buttonPressed: {
    opacity: 0.7,
    backgroundColor: '#F1F5F9',
  },
});
