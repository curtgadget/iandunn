// site.js — shared site data.
// Centralized so the nav, footer, and social rows stay in sync.

export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Writing', href: '/writing' },
  { label: 'Contact', href: '/contact' },
];

// Order matters: the footer renders all six; the hero row filters to a
// subset (see src/pages/index.astro).
export const SOCIALS = [
  { id: 'linkedin', label: 'LinkedIn', handle: 'in/iancdunn', url: 'https://www.linkedin.com/in/iancdunn' },
  { id: 'threads', label: 'Threads', handle: '@curtgadget', url: 'https://www.threads.com/@curtgadget' },
  { id: 'instagram', label: 'Instagram', handle: '@curtgadget', url: 'https://www.instagram.com/curtgadget' },
  { id: 'github', label: 'GitHub', handle: '@curtgadget', url: 'https://github.com/curtgadget' },
  { id: 'appstore', label: 'App Store', handle: 'Center Ref · FutAve', url: 'https://apps.apple.com/developer/ian-dunn' },
  { id: 'email', label: 'Email', handle: 'iandunn@iandunn.net', url: 'mailto:iandunn@iandunn.net' },
];

// Footer link columns.
export const FOOTER_COLUMNS = [
  {
    title: 'Pages',
    items: [
      { label: 'Home', url: '/' },
      { label: 'About', url: '/about' },
      { label: 'Projects', url: '/projects' },
      { label: 'Writing', url: '/writing' },
      { label: 'Contact', url: '/contact' },
    ],
  },
  {
    title: 'Projects',
    items: [
      { label: 'FutAve', url: '/projects' },
      { label: 'TheraBasics', url: 'https://therabasics.com' },
      { label: 'Center Ref', url: '/projects/center-ref' },
    ],
  },
  {
    title: 'Direct',
    items: [
      { label: 'iandunn@iandunn.net', url: 'mailto:iandunn@iandunn.net' },
      { label: 'Book a call', url: 'https://calendar.app.google/aEmvi9bEvT1sPwnS8' },
      { label: 'Los Angeles, CA', url: null },
    ],
  },
];
