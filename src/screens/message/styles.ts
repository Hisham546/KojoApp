import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import fontFamily from '../../themes/fontFamily';
import dimensions from '../../utils/dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  listWrapper: {
    flex: 1,
    backgroundColor:'#e4ebfe'

  },
  mainCardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: moderateScale(24),
    borderWidth: 1,
    borderColor: '#F1F5F9',
    marginTop: verticalScale(12),
    width: dimensions.deviceWidth
  },
  innerCardContent: {
    paddingHorizontal: scale(16),
    paddingTop: verticalScale(16),
    paddingBottom: verticalScale(160),
  },
  cardHeaderGroup: {
    backgroundColor: 'transparent',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: moderateScale(20),
    paddingHorizontal: scale(14),
    height: verticalScale(40),
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  searchIcon: {
    marginRight: scale(8),
  },
  searchInput: {
    flex: 1,
    fontSize: moderateScale(13),
    fontFamily: fontFamily.P_MEDIUM,
    color: '#111111',
    paddingVertical: 0,
  },
  sectionHeader: {
    fontSize: moderateScale(14),
    fontFamily: fontFamily.P_MEDIUM,
    color: '#111111',
    marginTop: verticalScale(16),
    marginBottom: verticalScale(4),
  },
  messageRow: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: moderateScale(16),
    padding: scale(14),
    marginBottom: verticalScale(12),
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  avatarPlaceholder: {
    width: scale(44),
    height: scale(44),
    borderRadius: moderateScale(14),
    backgroundColor: '#E2E8F0',
  },
  textBlock: {
    flex: 1,
    marginLeft: scale(12),
  },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: moderateScale(14),
    fontFamily: fontFamily.P_MEDIUM,
    color: '#1A1C1E',
    flex: 1,
    paddingRight: scale(8),
  },
  statusIndicator: {
    width: scale(8),
    height: scale(8),
    borderRadius: scale(4),
  },
  cardSubtitle: {
    fontSize: moderateScale(11),
    fontFamily: fontFamily.P_MEDIUM,
    color: '#7C8087',
    marginTop: verticalScale(4),
    lineHeight: moderateScale(16),
  },
  timeStamp: {
    fontSize: moderateScale(11),
    color: '#9CA3AF',
    textAlign: 'right',
    marginTop: verticalScale(4),
  },
  actionFooter: {
    position: 'absolute',
    bottom: verticalScale(90),
    left: scale(20),
    right: scale(20),
    backgroundColor: 'transparent',
    zIndex: 10,
  },
  chatButton: {
    backgroundColor: '#3B74FF',
    borderRadius: moderateScale(16),
    height: verticalScale(48),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#3B74FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  chatButtonText: {
    color: '#FFFFFF',
    fontSize: moderateScale(14),
    fontFamily: fontFamily.P_MEDIUM,
    fontWeight: '600',
  },
});