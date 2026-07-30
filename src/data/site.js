// site.js — shared site data.
// Centralized so the nav, footer, and social rows stay in sync.

// App store links for the shipped mobile apps. Centralized so every page
// points at the same listings. Render them with the official badges via
// <StoreBadges> — see src/components/StoreBadges.astro.
export const APP_LINKS = {
  futave: {
    ios: 'https://apps.apple.com/us/app/futave-what-to-watch/id6758036629',
    android: 'https://play.google.com/store/apps/details?id=com.futave.app',
  },
  therabasics: {
    ios: 'https://apps.apple.com/us/app/therabasics/id6769590163',
    android: 'https://play.google.com/store/apps/details?id=com.therabasics.app',
  },
};

export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Case studies', href: '/projects' },
  { label: 'Writing', href: '/writing' },
  { label: 'Contact', href: '/contact' },
];

// Rendered as a list in the footer. Per-app store links live on the case
// studies via APP_LINKS, not here.
export const SOCIALS = [
  { id: 'linkedin', label: 'LinkedIn', handle: 'in/iancdunn', url: 'https://www.linkedin.com/in/iancdunn' },
  { id: 'threads', label: 'Threads', handle: '@curtgadget', url: 'https://www.threads.com/@curtgadget' },
  { id: 'instagram', label: 'Instagram', handle: '@curtgadget', url: 'https://www.instagram.com/curtgadget' },
  { id: 'github', label: 'GitHub', handle: '@curtgadget', url: 'https://github.com/curtgadget' },
  { id: 'email', label: 'Email', handle: 'iandunn@iandunn.net', url: 'mailto:iandunn@iandunn.net' },
];

// Footer link columns.
export const FOOTER_COLUMNS = [
  {
    title: 'Pages',
    items: [
      { label: 'Home', url: '/' },
      { label: 'About', url: '/about' },
      { label: 'Case studies', url: '/projects' },
      { label: 'Writing', url: '/writing' },
      { label: 'Contact', url: '/contact' },
    ],
  },
  {
    title: 'Case studies',
    items: [
      { label: 'FutAve', url: '/projects#futave' },
      { label: 'TheraBasics', url: '/projects#therabasics' },
      { label: 'Center Ref', url: '/projects#center-ref' },
      { label: 'Stonefold', url: '/projects#stonefold' },
    ],
  },
  {
    title: 'Direct',
    items: [
      { label: 'iandunn@iandunn.net', url: 'mailto:iandunn@iandunn.net' },
      { label: 'Book a call', url: 'https://calendar.app.google/aEmvi9bEvT1sPwnS8' },
    ],
  },
];
