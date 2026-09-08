export interface DivisionContact {
  name: string;
  phone: string;
  phoneDigits: string;
  role: string;
  whatsappUrl: string;
}

export interface BusinessProfile {
  name: string;
  tagline: string;
  subtitle: string;
  serviceArea: string;
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
  divisionContacts: {
    gas: DivisionContact;
    weighing: DivisionContact;
    software: DivisionContact;
  };
  supportedLanguages: Array<{
    code: 'en' | 'gu';
    label: string;
    nativeLabel: string;
  }>;
}

const primaryPhoneDigits = '919998450711';
const whatsappDefaultMessage =
  'Hello Burhani Enterprise, I would like to inquire about your Gas, Weighing, or Software solutions in Anand District.';

export const businessProfile: BusinessProfile = {
  name: 'Burhani Enterprise',
  tagline: 'Gas Solutions, Weighing Systems & Software',
  subtitle: 'Gas Solutions • Weighing Solutions • Software Solutions',
  serviceArea: 'Umreth & Anand District, Gujarat',
  contact: {
    whatsapp: {
      number: `+${primaryPhoneDigits}`,
      display: '+91 99984 50711',
      defaultMessage: whatsappDefaultMessage,
      url: `https://wa.me/${primaryPhoneDigits}?text=${encodeURIComponent(whatsappDefaultMessage)}`,
    },
    email: 'contact@burhanienterprise.com',
    phone: '+91 99984 50711',
    address: 'Umreth, Anand District, Gujarat, India',
  },
  divisionContacts: {
    gas: {
      name: 'Burhanuddin Rangwala',
      phone: '+91 99984 50711',
      phoneDigits: '919998450711',
      role: 'Gas Solutions Lead',
      whatsappUrl: `https://wa.me/919998450711?text=${encodeURIComponent('Hello Burhanuddin, I would like to inquire about Gas Pipeline & Manifold Solutions.')}`,
    },
    weighing: {
      name: 'Hozefa B. Rangwala',
      phone: '+91 99741 64452',
      phoneDigits: '919974164452',
      role: 'Weighing Systems Lead',
      whatsappUrl: `https://wa.me/919974164452?text=${encodeURIComponent('Hello Hozefa, I would like to inquire about Truck Weighbridges & Platform Scales.')}`,
    },
    software: {
      name: 'Shabbir Yahya',
      phone: '+91 95747 13452',
      phoneDigits: '919574713452',
      role: 'Software & Automation Lead',
      whatsappUrl: `https://wa.me/919574713452?text=${encodeURIComponent('Hello Shabbir, I would like to inquire about Weighbridge Software & Custom Systems.')}`,
    },
  },
  supportedLanguages: [
    { code: 'en', label: 'English', nativeLabel: 'EN' },
    { code: 'gu', label: 'Gujarati', nativeLabel: 'ગુજરાતી' },
  ],
};
