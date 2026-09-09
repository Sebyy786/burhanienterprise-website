export interface NavItem {
  label: string;
  labelGujarati?: string;
  labelEnglish?: string;
  href: string;
  isExternal?: boolean;
}

export const navigationItems: NavItem[] = [
  {
    label: 'મુખ્ય પૃષ્ઠ',
    labelGujarati: 'મુખ્ય પૃષ્ઠ',
    labelEnglish: 'Home',
    href: '/',
  },
  {
    label: 'વજન કાંટા',
    labelGujarati: 'વજન કાંટા',
    labelEnglish: 'Weighing Scales',
    href: '/#scales',
  },
  {
    label: 'ગેસ સોલ્યુશન્સ',
    labelGujarati: 'ગેસ સોલ્યુશન્સ',
    labelEnglish: 'Gas Solutions',
    href: '/#gas',
  },
  {
    label: 'સોફ્ટવેર & AI',
    labelGujarati: 'સોફ્ટવેર & AI',
    labelEnglish: 'Software & AI',
    href: '/#software',
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
