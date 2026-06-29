import { StyleSheet } from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
} from 'react-native-size-matters';
import fontFamily from '../../themes/fontFamily';

const styles = StyleSheet.create({
  container: {
    marginBottom: verticalScale(16),
  },
  label: {
    fontSize: moderateScale(13),
    fontFamily: fontFamily.P_REGULAR,
    color: '#222222',
    marginBottom: verticalScale(8),
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(12),
  },
  countrySelector: {
    width: scale(65),
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: moderateScale(12),
    paddingHorizontal: scale(12),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: verticalScale(40),
  },
  countryCode: {
    fontSize: moderateScale(16),
    color: '#000000',
    fontWeight: '500',
  },
  countryChevron: {
    fontSize: moderateScale(12),
    color: '#666666',
  },
  phoneInput: {
    flex: 1,
    height: verticalScale(40),
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: moderateScale(12),
    paddingHorizontal: scale(16),
    fontSize: moderateScale(13),
    fontFamily: fontFamily.P_REGULAR,
    color: '#000000',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: moderateScale(16),
    borderTopRightRadius: moderateScale(16),
    maxHeight: '50%',
    paddingBottom: verticalScale(24),
  },
  modalTitle: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: '#000000',
    paddingHorizontal: scale(24),
    paddingVertical: verticalScale(16),
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  countryOption: {
    paddingHorizontal: scale(24),
    paddingVertical: verticalScale(14),
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  countryOptionText: {
    fontSize: moderateScale(16),
    color: '#000000',
  },
  countryOptionDialCode: {
    color: '#666666',
  },
  errorText: {
    color: '#EF4444',
    fontSize: moderateScale(12),
    marginTop: verticalScale(4),
  },
});

export default styles;