// caseStudies.js — the shared project model.
// One entry per app, reused by Home (the three chapters of "Apps I build and
// run", rendered by CaseStudyRow) and /projects (each write-up in full).
// Every word comes from docs/pare/full-redesign/copy.md; edit it there first.
//
//   teaser    the one line Home shows under the name and status
//   writeup   the /projects write-up, one string per paragraph
//   platforms the platforms-and-stack line under the write-up
//   cta, url  the project's one button

// Screenshots live in src/assets so Astro can optimize them at build time.
import futaveFeatured from '../assets/screens/futave-featured.png';
import therabasicsTherapists from '../assets/screens/therabasics-therapists.png';
import crWatch from '../assets/screens/watch-active-1h.png';
import { APP_LINKS } from './site.js';

export const CASE_STUDIES = [
  {
    id: 'futave',
    name: 'FutAve',
    status: 'Live',
    mark: { fit: 'contain', src: '/logos/futave-mark.svg', alt: 'FutAve logo' },
    teaser:
      'Finds football worth watching around the clubs you follow, with fixtures, scores, lineups and key moments.',
    writeup: [
      'FutAve finds football worth watching. Follow your clubs and it lays out the fixtures, then keeps up with scores, lineups and key moments.',
      'A lineup builder and a tactics board sit alongside the matches.',
    ],
    platforms: 'iOS, Android and web. Built with React Native, Next.js and Payload CMS.',
    url: 'https://futave.com',
    cta: 'Visit futave.com',
    stores: APP_LINKS.futave,
    shot: futaveFeatured,
    shotAlt: 'The FutAve home screen with a featured match and its kickoff time',
    shotFit: 'cover',
  },
  {
    id: 'therabasics',
    name: 'TheraBasics',
    status: 'Live',
    mark: { fit: 'cover', src: '/logos/therabasics-icon.png', alt: 'TheraBasics app icon' },
    teaser:
      'A 30-second daily check-in for therapy clients, read by their therapist as one summary before the next session.',
    writeup: [
      'TheraBasics is my wife’s company. Dr. Raven Barrow, a psychologist, founded it, and we designed it together at our kitchen table. When product instinct and clinical reality disagreed, clinical reality won.',
      'Clients do a 30-second check-in on good days and hard days, keep a private journal and track habits, with no streaks or points. They choose what to share. Before each session their therapist opens a dashboard and reads the week as one written summary.',
      'Coaches use it too, to follow a client’s goals and habits between sessions.',
    ],
    platforms: 'iOS, Android and web. Built with React Native and Next.js. HIPAA-compliant.',
    url: 'https://therabasics.com',
    cta: 'Visit therabasics.com',
    stores: APP_LINKS.therabasics,
    shot: therabasicsTherapists,
    shotAlt: 'The TheraBasics therapist dashboard with a client’s week as one written summary',
    shotFit: 'cover',
  },
  {
    id: 'center-ref',
    name: 'Center Ref',
    status: 'Public beta',
    mark: { fit: 'contain', src: '/logos/centerref-icon.svg', alt: 'Center Ref logo' },
    teaser: 'A match clock for soccer referees on the Apple Watch, with AYSO presets from U6 to U19.',
    writeup: [
      'I referee AYSO games most Saturdays, and looking down at a phone is how you miss the foul. Center Ref is a match clock for the Apple Watch: a large clock and score that read in bright sun, and haptic taps for half time and the final whistle.',
      'Set up the match on your iPhone: an AYSO preset from U6 to U19, club soccer or a custom format, the rosters and your role. Hold the yellow bar and the match moves to the watch. Stoppage time arms with one tap and counts itself down.',
      'After the final whistle the watch sends the event log back, with each player’s minutes for AYSO’s 50% playing-time rule. It needs no network on the field, and it’s free during the beta.',
    ],
    platforms: 'Apple Watch and iPhone, watchOS 11 and iOS 18 or later. Built in Swift.',
    url: 'https://centerref.com',
    cta: 'Visit centerref.com',
    // No store badges: the beta runs on TestFlight.
    stores: null,
    shot: crWatch,
    shotAlt: 'The Center Ref match clock on an Apple Watch, mid-match',
    shotFit: 'contain',
  },
];
