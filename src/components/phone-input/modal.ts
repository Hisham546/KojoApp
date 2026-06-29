export interface Country {
  name: string;
  code: string;
  dialCode: string;
  flag: string;
}
export interface PhoneInputProps {
  label?: string;
  countryCode: string;
  onCountryCodeChange: (dialCode: string) => void;
  phoneNumber: string;
  onPhoneNumberChange: (value: string) => void;
  placeholder?: string;
  error?: string
}
