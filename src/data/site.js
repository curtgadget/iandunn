// site.js — shared site data.
// Centralized so the nav, footer, and contact links stay in sync.

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

// The main action and the second one (copy.md, Buttons). "Book a call"
// reads the same in the nav, the Home hero and the close.
export const BOOK_CALL = {
  label: 'Book a call',
  url: 'https://calendar.app.google/aEmvi9bEvT1sPwnS8',
};
export const EMAIL = {
  label: 'Email me',
  address: 'iandunn@iandunn.net',
  url: 'mailto:iandunn@iandunn.net',
};

// The four nav words (plan.md wording table). `label` is what SiteNav's
// `active` prop matches.
export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Writing', href: '/writing' },
];

// Every contact channel lives in the footer (Contact folded into it).
export const SOCIALS = [
  { id: 'linkedin', label: 'LinkedIn', handle: 'in/iancdunn', url: 'https://www.linkedin.com/in/iancdunn' },
  { id: 'threads', label: 'Threads', handle: '@curtgadget', url: 'https://www.threads.com/@curtgadget' },
  { id: 'instagram', label: 'Instagram', handle: '@curtgadget', url: 'https://www.instagram.com/curtgadget' },
  { id: 'github', label: 'GitHub', handle: '@curtgadget', url: 'https://github.com/curtgadget' },
  { id: 'email', label: 'Email', handle: EMAIL.address, url: EMAIL.url },
];

// Footer link columns (copy.md, Footer): Pages, Apps, Contact.
export const FOOTER_COLUMNS = [
  {
    title: 'Pages',
    items: NAV_ITEMS.map((n) => ({ label: n.label, url: n.href })),
  },
  {
    title: 'Apps',
    items: [
      { label: 'FutAve', url: '/projects#futave' },
      { label: 'TheraBasics', url: '/projects#therabasics' },
      { label: 'Center Ref', url: '/projects#center-ref' },
    ],
  },
  {
    title: 'Contact',
    items: [
      { label: EMAIL.address, url: EMAIL.url },
      { label: BOOK_CALL.label, url: BOOK_CALL.url },
      ...SOCIALS.filter((s) => s.id !== 'email').map((s) => ({
        label: `${s.label} ${s.handle}`,
        url: s.url,
      })),
    ],
  },
];
