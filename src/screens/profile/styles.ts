import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollContent: {
    paddingHorizontal: scale(20),
    paddingBottom: verticalScale(40),
  },
  avatarSection: {
    alignItems: 'center',
    marginVertical: verticalScale(20),
  },
  avatarOutline: {
    width: scale(110),
    height: scale(110),
    borderRadius: scale(55),
    borderWidth: 2,
    borderColor: '#3B74FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userAvatarImage: {
    width: scale(110),
    height: scale(110),
    borderRadius: scale(55),

  },
  profileName: {
    fontSize: moderateScale(20),
    fontWeight: '700',
    color: '#111111',
    marginTop: verticalScale(12),
  },
  sectionTitle: {
    fontSize: moderateScale(15),
    fontWeight: '700',
    color: '#111111',
    marginTop: verticalScale(20),
    marginBottom: verticalScale(10),
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: moderateScale(24),
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(8),
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
});
