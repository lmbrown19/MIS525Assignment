// Mock data for UI-only TennisRecord clone. No real USTA/TennisRecord logic.

export type Player = {
  id: string;
  slug: string;
  firstName: string;
  lastName: string;
  city: string;
  state: string;
  gender: "M" | "F";
  ntrp: string;
  ntrpKey?: string;
  estimatedDynamicRating: number;
  estimatedRating?: number;
  projectedYearEnd?: string;
  ratingBumpProbability?: number;
  matches?: number;
  lastUpdated?: string;
  record?: string;
  streaks?: string;
  tiebreaks?: string;
  avgOpponentRating?: number;
};

export type Team = {
  id: string;
  slug: string;
  name: string;
  section: string;
  district: string;
  area: string;
  level: string;
  record: string;
  teamRating: string;
  year?: number;
};

export type Tournament = {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  level: string;
  surface: string;
  entrants: number;
  location: string;
  ages?: string[];
  types?: string[];
};

export type College = {
  id: string;
  name: string;
  location: string;
  division: string;
  conference: string;
  distance: number;
  gender?: string;
};

export type RankingCategory = "player-rating" | "best-record" | "win-percentage" | "most-wins" | "most-losses";

export type RankingRow = {
  rank: number;
  playerName: string;
  value: string | number;
  slug?: string;
};

export type SectionBreakdownRow = {
  section: string;
  [key: string]: string | number;
};

const YEARS = Array.from({ length: 2026 - 2014 + 1 }, (_, i) => 2014 + i);
const SECTIONS = [
  "Eastern", "Florida", "Hawaii", "Intermountain", "Mid-Atlantic", "Middle States",
  "Midwest", "New England", "Northern", "Northern California", "Pacific Northwest",
  "Southern", "Southern California", "Southwest", "Texas", "Caribbean",
];
const DISTRICTS = ["District A", "District B", "District C", "District D"];
const AREAS = ["Area 1", "Area 2", "Area 3", "Area 4", "Area 5"];
const LEAGUE_TYPES = ["Adult 18+", "Adult 40+", "Adult 55+", "Mixed 18+", "Combo"];

function slugify(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

export const mockPlayers: Player[] = [
  {
    id: "1",
    slug: "john-smith",
    firstName: "John",
    lastName: "Smith",
    city: "Austin",
    state: "TX",
    gender: "M",
    ntrp: "4.5",
    ntrpKey: "C",
    estimatedDynamicRating: 4.523,
    estimatedRating: 4.5,
    projectedYearEnd: "4.5",
    ratingBumpProbability: 12,
    matches: 18,
    lastUpdated: "2025-01-15",
    record: "14-4",
    streaks: "W3",
    tiebreaks: "4-2",
    avgOpponentRating: 4.48,
  },
  {
    id: "2",
    slug: "sarah-jones",
    firstName: "Sarah",
    lastName: "Jones",
    city: "Houston",
    state: "TX",
    gender: "F",
    ntrp: "4.0",
    ntrpKey: "C",
    estimatedDynamicRating: 3.987,
    estimatedRating: 4.0,
    projectedYearEnd: "4.0",
    ratingBumpProbability: 5,
    matches: 12,
    lastUpdated: "2025-01-14",
    record: "8-4",
    streaks: "L1",
    tiebreaks: "2-1",
    avgOpponentRating: 3.92,
  },
  {
    id: "3",
    slug: "mike-wilson",
    firstName: "Mike",
    lastName: "Wilson",
    city: "Dallas",
    state: "TX",
    gender: "M",
    ntrp: "3.5",
    estimatedDynamicRating: 3.512,
    estimatedRating: 3.5,
    projectedYearEnd: "3.5",
    ratingBumpProbability: 8,
    matches: 22,
    lastUpdated: "2025-01-13",
  },
  {
    id: "4",
    slug: "emily-davis",
    firstName: "Emily",
    lastName: "Davis",
    city: "San Antonio",
    state: "TX",
    gender: "F",
    ntrp: "3.0",
    estimatedDynamicRating: 2.987,
    estimatedRating: 3.0,
    projectedYearEnd: "3.0",
    ratingBumpProbability: 15,
    matches: 16,
    lastUpdated: "2025-01-12",
  },
  {
    id: "5",
    slug: "david-brown",
    firstName: "David",
    lastName: "Brown",
    city: "Fort Worth",
    state: "TX",
    gender: "M",
    ntrp: "5.0",
    estimatedDynamicRating: 5.012,
    estimatedRating: 5.0,
    projectedYearEnd: "5.0",
    ratingBumpProbability: 2,
    matches: 10,
    lastUpdated: "2025-01-11",
  },
];

export const mockTeams: Team[] = [
  {
    id: "1",
    slug: "austin-aces-45",
    name: "Austin Aces 4.5",
    section: "Texas",
    district: "District A",
    area: "Area 1",
    level: "4.5",
    record: "8-2",
    teamRating: "4.48",
    year: 2025,
  },
  {
    id: "2",
    slug: "houston-hawks-40",
    name: "Houston Hawks 4.0",
    section: "Texas",
    district: "District B",
    area: "Area 2",
    level: "4.0",
    record: "6-4",
    teamRating: "3.95",
    year: 2025,
  },
  {
    id: "3",
    slug: "dallas-dynamo-35",
    name: "Dallas Dynamo 3.5",
    section: "Texas",
    district: "District A",
    area: "Area 3",
    level: "3.5",
    record: "9-1",
    teamRating: "3.52",
    year: 2025,
  },
];

export const mockTournaments: Tournament[] = [
  {
    id: "1",
    name: "Texas Junior Open",
    startDate: "2025-03-01",
    endDate: "2025-03-03",
    level: "L3",
    surface: "Hard",
    entrants: 64,
    location: "Austin, TX",
    ages: ["B14", "B16", "G14", "G16"],
    types: ["Singles", "Doubles"],
  },
  {
    id: "2",
    name: "Houston Spring Championship",
    startDate: "2025-03-15",
    endDate: "2025-03-17",
    level: "L4",
    surface: "Hard",
    entrants: 48,
    location: "Houston, TX",
    ages: ["B12", "B14", "B16", "G12", "G14", "G16"],
    types: ["Singles", "Doubles", "Mixed"],
  },
  {
    id: "3",
    name: "Dallas Clay Court Classic",
    startDate: "2025-04-01",
    endDate: "2025-04-04",
    level: "L2",
    surface: "Red Clay",
    entrants: 96,
    location: "Dallas, TX",
    ages: ["B14", "B16", "B18", "G14", "G16", "G18"],
    types: ["Singles", "Doubles"],
  },
];

export const mockColleges: College[] = [
  { id: "1", name: "University of Texas at Austin", location: "Austin, TX", division: "D1", conference: "Big 12", distance: 0, gender: "Men" },
  { id: "2", name: "Texas A&M University", location: "College Station, TX", division: "D1", conference: "SEC", distance: 105, gender: "Men" },
  { id: "3", name: "Baylor University", location: "Waco, TX", division: "D1", conference: "Big 12", distance: 100, gender: "Men" },
  { id: "4", name: "TCU", location: "Fort Worth, TX", division: "D1", conference: "Big 12", distance: 195, gender: "Men" },
  { id: "5", name: "Rice University", location: "Houston, TX", division: "D1", conference: "American", distance: 165, gender: "Men" },
  { id: "6", name: "SMU", location: "Dallas, TX", division: "D1", conference: "American", distance: 195, gender: "Men" },
  { id: "7", name: "University of Texas at Austin", location: "Austin, TX", division: "D1", conference: "Big 12", distance: 0, gender: "Women" },
  { id: "8", name: "Texas A&M University", location: "College Station, TX", division: "D1", conference: "SEC", distance: 105, gender: "Women" },
];

export const mockRankings: Record<RankingCategory, RankingRow[]> = {
  "player-rating": mockPlayers.slice(0, 5).map((p, i) => ({
    rank: i + 1,
    playerName: `${p.firstName} ${p.lastName}`,
    value: p.estimatedDynamicRating.toFixed(3),
    slug: p.slug,
  })),
  "best-record": [
    { rank: 1, playerName: "Mike Wilson", value: "20-2", slug: "mike-wilson" },
    { rank: 2, playerName: "John Smith", value: "18-4", slug: "john-smith" },
    { rank: 3, playerName: "Sarah Jones", value: "16-6", slug: "sarah-jones" },
  ],
  "win-percentage": [
    { rank: 1, playerName: "Mike Wilson", value: "90.9%", slug: "mike-wilson" },
    { rank: 2, playerName: "John Smith", value: "81.8%", slug: "john-smith" },
    { rank: 3, playerName: "Sarah Jones", value: "72.7%", slug: "sarah-jones" },
  ],
  "most-wins": [
    { rank: 1, playerName: "Mike Wilson", value: 20, slug: "mike-wilson" },
    { rank: 2, playerName: "John Smith", value: 18, slug: "john-smith" },
    { rank: 3, playerName: "Sarah Jones", value: 16, slug: "sarah-jones" },
  ],
  "most-losses": [
    { rank: 1, playerName: "Emily Davis", value: 12, slug: "emily-davis" },
    { rank: 2, playerName: "David Brown", value: 8, slug: "david-brown" },
  ],
};

// Section breakdown: Female/Male by section and rating buckets
export const RATING_BUCKETS = ["2.5", "3.0", "3.5", "4.0", "4.5", "5.0", "5.5"];
export function getSectionBreakdownFemale(): SectionBreakdownRow[] {
  return SECTIONS.slice(0, 10).map((section, i) => {
    const row: SectionBreakdownRow = { section };
    RATING_BUCKETS.forEach((b) => {
      row[b] = Math.floor(Math.random() * 500) + 50;
    });
    row["Total"] = RATING_BUCKETS.reduce((sum, b) => sum + (row[b] as number), 0);
    return row;
  });
}
export function getSectionBreakdownMale(): SectionBreakdownRow[] {
  return SECTIONS.slice(0, 10).map((section) => {
    const row: SectionBreakdownRow = { section };
    RATING_BUCKETS.forEach((b) => {
      row[b] = Math.floor(Math.random() * 600) + 60;
    });
    row["Total"] = RATING_BUCKETS.reduce((sum, b) => sum + (row[b] as number), 0);
    return row;
  });
}

export const YEARS_OPTIONS = YEARS.map((y) => ({ value: String(y), label: String(y) }));
export const SECTIONS_OPTIONS = SECTIONS.map((s) => ({ value: s, label: s }));
export const DISTRICTS_OPTIONS = DISTRICTS.map((d) => ({ value: d, label: d }));
export const AREAS_OPTIONS = AREAS.map((a) => ({ value: a, label: a }));
export const LEAGUE_TYPES_OPTIONS = LEAGUE_TYPES.map((t) => ({ value: t, label: t }));
export const GENDER_OPTIONS = [
  { value: "M", label: "Male" },
  { value: "F", label: "Female" },
  { value: "", label: "All" },
];
export const ORDER_BY_OPTIONS = [
  { value: "rating", label: "Estimated Dynamic Rating" },
  { value: "name", label: "Player Name" },
  { value: "ntrp", label: "NTRP" },
  { value: "matches", label: "Matches" },
];

export const JUNIOR_LEVELS = ["L1", "L2", "L3", "L4", "L5", "L6", "U/C"];
export const JUNIOR_AGES = ["B8", "B10", "B12", "B14", "B16", "B18", "G8", "G10", "G12", "G14", "G16", "G18"];
export const JUNIOR_TYPES = ["Singles", "Doubles", "Mixed", "Duo", "Team"];
export const SURFACES = ["Hard", "Green Clay", "Red Clay", "Grass"];

export const MOCK_UPDATED_TIMESTAMP = "January 15, 2025 at 3:45 PM";

export function getPlayerBySlug(slug: string): Player | undefined {
  return mockPlayers.find((p) => p.slug === slug);
}

export function getTeamBySlug(slug: string): Team | undefined {
  return mockTeams.find((t) => t.slug === slug);
}

export function filterPlayers(params: {
  first?: string;
  last?: string;
  section?: string;
  district?: string;
  area?: string;
  gender?: string;
  orderBy?: string;
}): Player[] {
  let list = [...mockPlayers];
  if (params.first) {
    const q = params.first.toLowerCase();
    list = list.filter((p) => p.firstName.toLowerCase().includes(q));
  }
  if (params.last) {
    const q = params.last.toLowerCase();
    list = list.filter((p) => p.lastName.toLowerCase().includes(q));
  }
  if (params.gender && params.gender !== "") {
    list = list.filter((p) => p.gender === params.gender);
  }
  if (params.orderBy === "name") {
    list.sort((a, b) => `${a.lastName} ${a.firstName}`.localeCompare(`${b.lastName} ${b.firstName}`));
  } else if (params.orderBy === "ntrp") {
    list.sort((a, b) => parseFloat(b.ntrp) - parseFloat(a.ntrp));
  } else if (params.orderBy === "matches") {
    list.sort((a, b) => (b.matches ?? 0) - (a.matches ?? 0));
  } else {
    list.sort((a, b) => b.estimatedDynamicRating - a.estimatedDynamicRating);
  }
  return list;
}

export function filterTeams(params: {
  year?: string;
  leagueType?: string;
  section?: string;
  teamName?: string;
}): Team[] {
  let list = [...mockTeams];
  if (params.teamName) {
    const q = params.teamName.toLowerCase();
    list = list.filter((t) => t.name.toLowerCase().includes(q));
  }
  return list;
}

export function filterColleges(params: {
  gender?: string;
  division?: string;
  conference?: string;
  maxDistance?: number;
}): College[] {
  let list = [...mockColleges];
  if (params.gender) {
    list = list.filter((c) => c.gender === params.gender);
  }
  if (params.division && params.division !== "All") {
    list = list.filter((c) => c.division === params.division);
  }
  if (params.conference) {
    list = list.filter((c) => c.conference.toLowerCase().includes(params.conference!.toLowerCase()));
  }
  if (params.maxDistance != null) {
    list = list.filter((c) => c.distance <= params.maxDistance!);
  }
  return list;
}

export function filterTournaments(params: {
  startDate?: string;
  tournamentId?: string;
  levels?: string[];
  ages?: string[];
  types?: string[];
  surfaces?: string[];
}): Tournament[] {
  let list = [...mockTournaments];
  if (params.startDate) {
    list = list.filter((t) => t.startDate >= params.startDate!);
  }
  if (params.levels?.length) {
    list = list.filter((t) => params.levels!.includes(t.level));
  }
  if (params.ages?.length) {
    list = list.filter((t) => params.ages!.some((a) => t.ages?.includes(a)));
  }
  if (params.types?.length) {
    list = list.filter((t) => params.types!.some((ty) => t.types?.includes(ty)));
  }
  if (params.surfaces?.length) {
    list = list.filter((t) => params.surfaces!.includes(t.surface));
  }
  return list;
}
