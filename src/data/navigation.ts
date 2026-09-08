export interface NavItem {
  label: string;
  labelGujarati?: string;
  href: string;
  isExternal?: boolean;
}

export const navigationItems: NavItem[] = [
  {
    label: 'Home',
    labelGujarati: 'મુખ્ય પૃષ્ઠ',
    href: '/',
  },
  {
    label: 'Products',
    labelGujarati: 'પ્રોડક્ટ્સ',
    href: '/#products',
  },
  {
    label: 'Capabilities',
    labelGujarati: 'ક્ષમતાઓ',
    href: '/#capabilities',
  },
  {
    label: 'About',
    labelGujarati: 'અમારા વિશે',
    href: '/#about',
  },
  {
    label: 'Contact',
    labelGujarati: 'સંપર્ક',
    href: '/#contact',
  },
];
