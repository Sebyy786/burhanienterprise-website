export interface BusinessProfile {
  name: string;
  tagline: string;
  subtitle: string;
  contact: {
    whatsapp: {
      number: string;
      display: string;
      defaultMessage: string;
      url: string;
    };
    email: string;
    phone: string;
    address: string;
  };
  supportedLanguages: Array<{
    code: 'en' | 'gu';
    label: string;
    nativeLabel: string;
  }>;
}

const whatsappNumber = '919825000000';
const whatsappDefaultMessage =
  'Hello Burhani Enterprise, I would like to inquire about your industrial supplies and hardware.';

export const businessProfile: BusinessProfile = {
  name: 'Burhani Enterprise',
  tagline: 'Precision Industrial Supplies & Commercial Hardware',
  subtitle: 'Industrial Supplies & Hardware',
  contact: {
    whatsapp: {
      number: `+${whatsappNumber}`,
      display: '+91 98250 00000',
      defaultMessage: whatsappDefaultMessage,
      url: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappDefaultMessage)}`,
    },
    email: 'contact@burhanienterprise.com',
    phone: '+91 98250 00000',
    address: 'Industrial Area, Baroda, Gujarat, India',
  },
  supportedLanguages: [
    { code: 'en', label: 'English', nativeLabel: 'EN' },
    { code: 'gu', label: 'Gujarati', nativeLabel: 'ગુજરાતી' },
  ],
};
