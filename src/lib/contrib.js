// contrib.js — real GitHub contribution data, fetched at build time.
//
// Queries the GitHub GraphQL API for the authenticated user's contribution
// calendar and bakes the result into the static build. Requires the env
// var GITHUB_TOKEN — a classic personal access token with the `read:user`
// scope, so private contributions are counted.
//
// If the token is missing or the request fails, returns null. The home
// page then OMITS the contribution section entirely — it never falls back
// to invented data.

const GITHUB_GRAPHQL = 'https://api.github.com/graphql';

const QUERY = `query {
  viewer {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            contributionLevel
            weekday
            date
          }
        }
      }
    }
  }
}`;

// GitHub's contributionLevel enum → 0–4 intensity.
const LEVELS = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export async function getContributions() {
  const token = process.env.GITHUB_TOKEN || import.meta.env.GITHUB_TOKEN;
  if (!token) {
    console.warn('[contrib] GITHUB_TOKEN not set — contribution section omitted.');
    return null;
  }

  try {
    const res = await fetch(GITHUB_GRAPHQL, {
      method: 'POST',
      headers: {
        Authorization: `bearer ${token}`,
        'Content-Type': 'application/json',
        'User-Agent': 'iandunn.net build',
      },
      body: JSON.stringify({ query: QUERY }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const json = await res.json();
    if (json.errors?.length) throw new Error(json.errors[0].message);

    const calendar =
      json.data?.viewer?.contributionsCollection?.contributionCalendar;
    if (!calendar) throw new Error('unexpected response shape');

    // 7-row × N-week grid. Partial weeks are padded by weekday index.
    const cells = calendar.weeks.map((week) => {
      const column = [0, 0, 0, 0, 0, 0, 0];
      for (const day of week.contributionDays) {
        column[day.weekday] = LEVELS[day.contributionLevel] ?? 0;
      }
      return column;
    });

    // Month markers — a label at the week where each new month begins.
    const months = [];
    let lastMonth = -1;
    calendar.weeks.forEach((week, i) => {
      const firstDay = week.contributionDays[0];
      if (!firstDay) return;
      const month = new Date(firstDay.date).getUTCMonth();
      if (month !== lastMonth) {
        months.push({ label: MONTHS[month], week: i });
        lastMonth = month;
      }
    });

    // Chronological day list for streak + active-day stats.
    const days = calendar.weeks.flatMap((w) => w.contributionDays);
    const activeDays = days.filter((d) => d.contributionCount > 0).length;

    // Current streak — consecutive active days counting back from the most
    // recent, ignoring today if it is still empty (the day isn't over).
    let streak = 0;
    for (let i = days.length - 1; i >= 0; i--) {
      if (days[i].contributionCount > 0) streak++;
      else if (i === days.length - 1) continue;
      else break;
    }

    return {
      cells,
      months,
      total: calendar.totalContributions,
      activeDays,
      streak,
    };
  } catch (err) {
    console.warn(`[contrib] fetch failed (${err.message}) — section omitted.`);
    return null;
  }
}
