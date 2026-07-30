// caseStudies.js — the shared case-study model.
// One entry per product, reused by the Home rows (first three) and the
// Case Studies page (all four). Each entry leads with one opinion and
// three labeled fields: the problem that mattered, the tradeoff I made,
// and why it's different.
//
// Home rows tease with the opinion plus ONE field; set `tease` to
// 'problem' | 'tradeoff' | 'different' to pick which (default 'different').
// The full three-field argument renders only on /projects.

// Screenshots live in src/assets so Astro can optimize them at build time.
import futaveFeatured from '../assets/screens/futave-featured.png';
import therabasicsTherapists from '../assets/screens/therabasics-therapists.png';
import crWatch from '../assets/screens/watch-active-1h.png';
import { APP_LINKS } from './site.js';

// Status colors: green for shipped, amber for in-flight, stone for early.
export const STATUS = {
  live: '#3f6f49',
  beta: '#a9762f',
  prototype: '#8a7d66',
};

export const CASE_STUDIES = [
  {
    num: '01',
    id: 'futave',
    name: 'FutAve',
    status: 'Live',
    statusColor: STATUS.live,
    mark: { fit: 'contain', src: '/logos/futave-mark.svg', alt: 'FutAve logo' },
    opinion: 'Coverage is a commodity. Judgment isn’t.',
    problem:
      'Every soccer app shows all 380 matches and treats them as equal. None will tell you which one deserves your evening.',
    tradeoff:
      'Curation shipped before completeness. The Wave Detector calls a match before kickoff — and publishes its accuracy, so when it’s wrong, it’s wrong in public.',
    different:
      'It starts with the recommendation and attaches the scores, not the other way around. The AI layer explains each call instead of hiding it.',
    meta: 'iOS, Android & web · React Native, Next.js, Payload CMS',
    url: 'https://futave.com',
    cta: 'Visit futave.com',
    stores: APP_LINKS.futave,
    shot: futaveFeatured,
    shotAlt: 'FutAve featured match with excitement rating',
    shotFit: 'cover',
    caption: 'futave.com — the wave detector’s call',
  },
  {
    num: '02',
    id: 'therabasics',
    name: 'TheraBasics',
    status: 'Live',
    tease: 'tradeoff',
    statusColor: STATUS.live,
    mark: { fit: 'cover', src: '/logos/therabasics-icon.png', alt: 'TheraBasics app icon' },
    opinion: 'Engagement metrics have no place in therapy.',
    problem:
      'The real work of therapy happens between sessions — exactly where most mental-health apps switch to streaks and confetti.',
    tradeoff:
      'Built for the therapist’s workflow, not daily-active charts. A client’s thirty-second check-in becomes one honest paragraph, ready before the session starts.',
    different:
      'Designed across the kitchen table with Dr. Raven Barrow — my wife, a practicing psychologist. When product instinct and clinical reality disagreed, clinical reality won.',
    meta: 'iOS, Android & web · React Native, Next.js · HIPAA-compliant',
    url: 'https://therabasics.com',
    cta: 'Visit therabasics.com',
    stores: APP_LINKS.therabasics,
    shot: therabasicsTherapists,
    shotAlt: 'TheraBasics session brief for therapists',
    shotFit: 'cover',
    caption: 'therabasics.com — the session brief',
  },
  {
    num: '03',
    id: 'center-ref',
    name: 'Center Ref',
    status: 'Public beta',
    statusColor: STATUS.beta,
    mark: { fit: 'contain', src: '/logos/centerref-icon.svg', alt: 'Center Ref logo' },
    opinion: 'The best referee screen is barely a screen.',
    problem:
      'Refs run match clocks on phones, and glancing down at a phone is how you miss the foul. I know — most Saturdays I’m the ref.',
    tradeoff:
      'Watch-first, glance-only. Anything that couldn’t be read in two seconds of bright sun got cut; periods signal by haptics you learn by feel.',
    different:
      'Designed on a U-12 pitch with a whistle in my hand, not at a desk. AYSO presets U6–U19, stoppage that arms its own countdown.',
    meta: 'Apple Watch + iPhone · Swift',
    url: 'https://centerref.com',
    cta: 'Visit centerref.com',
    shot: crWatch,
    shotAlt: 'Center Ref match clock on Apple Watch',
    shotFit: 'contain',
    caption: 'the watch face, mid-match',
  },
  {
    num: '04',
    id: 'stonefold',
    name: 'Stonefold',
    status: 'Prototype',
    statusColor: STATUS.prototype,
    mark: { fit: 'mono' },
    opinion: 'Kids should reason multiplication out, not memorize it.',
    problem:
      'Flashcard drill teaches recall, not number sense. Kids who stall at 7×8 usually never learned to build it from 7×4.',
    tradeoff:
      'No points, no timers. You drag, slice, and fuse number-slabs on an iPad until they make the target — strategy over speed.',
    different:
      'Built on derived facts — working out new answers from the ones you already know — and sketched for my own three kids. Early days; nothing to show yet.',
    meta: 'iPad · SwiftUI',
    url: null,
    cta: null,
    shot: null,
    shotAlt: '',
    shotFit: 'cover',
    caption: '',
  },
];
