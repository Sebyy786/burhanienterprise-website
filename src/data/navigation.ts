export interface NavChildItem {
  label: string;
  labelGujarati: string;
  labelEnglish: string;
  href: string;
  descGu?: string;
  descEn?: string;
  badge?: string;
}

export interface NavItem {
  label: string;
  labelGujarati?: string;
  labelEnglish?: string;
  href: string;
  isExternal?: boolean;
  children?: NavChildItem[];
}

export const navigationItems: NavItem[] = [
  {
    label: 'મુખ્ય પૃષ્ઠ',
    labelGujarati: 'મુખ્ય પૃષ્ઠ',
    labelEnglish: 'Home',
    href: '/',
  },
  {
    label: 'પ્રોડક્ટ્સ',
    labelGujarati: 'પ્રોડક્ટ્સ',
    labelEnglish: 'Products',
    href: '/weighing-scales',
    children: [
      {
        label: 'ડિજિટલ વજન કાંટા શોરૂમ',
        labelGujarati: 'ડિજિટલ વજન કાંટા શોરૂમ',
        labelEnglish: 'Weighing Scales Showroom',
        href: '/weighing-scales',
        descGu: 'ડિજિટલ કાઉન્ટર, પ્લેટફોર્મ, હેંગિંગ અને પ્રિસિઝન સ્કેલ્સ',
        descEn: 'Digital counter, platform, hanging & precision scales',
        badge: 'શોરૂમ • Showroom',
      },
      {
        label: 'ગેસ સ્ટોવ & સ્પેરપાર્ટ્સ',
        labelGujarati: 'ગેસ સ્ટોવ & સ્પેરપાર્ટ્સ',
        labelEnglish: 'Gas Stoves & Appliances',
        href: '/#gas',
        descGu: 'LPG પાઇપલાઇન, કોમર્શિયલ ભઠ્ઠી, નવા સ્ટવ અને રિપેરિંગ',
        descEn: 'Commercial manifolds, domestic stoves & spare parts',
      },
      {
        label: 'વેઇબ્રિજ & બિઝનેસ સોફ્ટવેર',
        labelGujarati: 'વેઇબ્રિજ & બિઝનેસ સોફ્ટવેર',
        labelEnglish: 'Software & Weighbridge Solutions',
        href: '/#software',
        descGu: 'વેઇબ્રિજ સોફ્ટવેર, બિલિંગ, વ્હીકલ એન્ટ્રી અને ઓટોમેશન',
        descEn: 'Weighbridge software, GST billing & vehicle gate pass',
      },
    ],
  },
  {
    label: 'વિશેષતાઓ',
    labelGujarati: 'વિશેષતાઓ',
    labelEnglish: 'Capabilities',
    href: '/#capabilities',
  },
  {
    label: 'સંપર્ક',
    labelGujarati: 'સંપર્ક',
    labelEnglish: 'Contact',
    href: '/#contact',
  },
];
