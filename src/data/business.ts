export interface DivisionContact {
  name: string;
  phone: string;
  phoneDigits: string;
  role: string;
  gujaratiRole?: string;
  tagline: string;
  whatsappUrl: string;
  services: string[];
}

export interface BusinessProfile {
  name: string;
  gujaratiName: string;
  gstin: string;
  traditionalCode: string;
  tagline: string;
  subtitle: string;
  serviceArea: string;
  authorizedWeighingBrands: string[];
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
  'Hello Burhani Enterprise, I would like to inquire about your Gas, Weighing, or Software solutions.';

export const businessProfile: BusinessProfile = {
  name: 'Burhani Enterprise',
  gujaratiName: 'બુરહાની એન્ટરપ્રાઈઝ',
  gstin: '24BZQPR2070B1ZG',
  traditionalCode: '',
  tagline: 'Gas Solutions, Weighing Systems & Software',
  subtitle: 'Gas Solutions • Weighing Solutions • Software Solutions',
  serviceArea:
    'Serving Umreth, Anand, Vallabh Vidyanagar, Petlad, Borsad and nearby areas in Anand District.',
  authorizedWeighingBrands: [
    'Rolex Weighing Scale',
    'Axpert (ISI Certified)',
    'Taj Digital Scale',
    'Silver Eagle Digital Scale',
  ],
  contact: {
    whatsapp: {
      number: `+${primaryPhoneDigits}`,
      display: '+91 99984 50711',
      defaultMessage: whatsappDefaultMessage,
      url: `https://wa.me/${primaryPhoneDigits}?text=${encodeURIComponent(whatsappDefaultMessage)}`,
    },
    email: 'contact@burhanienterprise.com',
    phone: '+91 99984 50711',
    address: 'Lokhand Bazar, infront of Old post office, Nr. kansara bazar, Umreth, Anand District, Gujarat',
  },
  divisionContacts: {
    gas: {
      name: 'Burhanuddin Rangwala',
      phone: '+91 99984 50711',
      phoneDigits: '919998450711',
      role: 'Gas Solutions & Stove Lead',
      gujaratiRole: 'ગેસ સોલ્યુશન્સ અને સ્ટોવ સર્વિસ',
      tagline: 'LPG PIPELINES • GAS STOVES • REPAIRS',
      whatsappUrl: `https://wa.me/919998450711?text=${encodeURIComponent('Hello Burhanuddin, I would like to inquire about Gas Pipelines, Stoves, and Spare Parts.')}`,
      services: [
        'Commercial LPG Manifold & Kitchen Piping',
        'Domestic & Commercial Gas Stoves (New)',
        'All Types of Gas Spare Parts Supply',
        'Satisfactory Stove Repairing & Servicing',
      ],
    },
    weighing: {
      name: 'Hozefa B. Rangwala',
      phone: '+91 99741 64452',
      phoneDigits: '919974164452',
      role: 'Weighing Systems & Calibration Lead',
      gujaratiRole: 'ડિજિટલ વજન કાંટા અને વેઇબ્રિજ',
      tagline: 'WEIGHBRIDGES • SCALES • CALIBRATION',
      whatsappUrl: `https://wa.me/919974164452?text=${encodeURIComponent('Hello Hozefa, I would like to inquire about Weighing Scales, Calibration, and Legal Metrology Stamping Assistance.')}`,
      services: [
        'Digital Platform & Counter Bench Scales',
        'Heavy-Duty Truck Weighbridges (20T-120T)',
        'Calibration & Stamping Assistance (Legal Metrology)',
        'Authorized: Rolex, Axpert, Taj, Silver Eagle',
      ],
    },
    software: {
      name: 'Shabbir Yahya',
      phone: '+91 95747 13452',
      phoneDigits: '919574713452',
      role: 'AI & Software Consultant',
      gujaratiRole: 'AI અને સોફ્ટવેર કન્સલ્ટન્ટ',
      tagline: 'AI • SOFTWARE • AUTOMATION',
      whatsappUrl: `https://wa.me/919574713452?text=${encodeURIComponent('Hello Shabbir, I would like to inquire about AI Automation, Custom Software, and Weighbridge Systems.')}`,
      services: [
        'AI Automation Solutions',
        'Custom Business Software Development',
        'Modern Website Development',
        'Mobile App & Weighbridge Automation',
      ],
    },
  },
  supportedLanguages: [
    { code: 'en', label: 'English', nativeLabel: 'EN' },
    { code: 'gu', label: 'Gujarati', nativeLabel: 'ગુજરાતી' },
  ],
};
