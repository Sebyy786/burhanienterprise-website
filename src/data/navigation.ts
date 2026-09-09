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
        label: 'સોફ્ટવેર સર્વિસિસ',
        labelGujarati: 'સોફ્ટવેર સર્વિસિસ',
        labelEnglish: 'Software Services',
        href: '/#software',
        descGu: 'વેબસાઇટ, મોબાઇલ એપ, AI ઓટોમેશન અને કસ્ટમ સોફ્ટવેર',
        descEn: 'Websites, mobile apps, AI automation & custom software',
      },
    ],
  },
  {
    label: 'વજન કાંટા',
    labelGujarati: 'વજન કાંટા',
    labelEnglish: 'Scales & Repair',
    href: '/#scales',
  },
  {
    label: 'સંપર્ક',
    labelGujarati: 'સંપર્ક',
    labelEnglish: 'Contact',
    href: '/#contact',
  },
];
