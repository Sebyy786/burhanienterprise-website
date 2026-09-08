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
  'Hello Burhani Enterprise, I would like to inquire about your Gas, Weighing, or Software solutions.';

export const businessProfile: BusinessProfile = {
  name: 'Burhani Enterprise',
  tagline: 'Gas Solutions, Weighing Systems & Software',
  subtitle: 'Gas Solutions • Weighing Systems • Software Solutions',
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
