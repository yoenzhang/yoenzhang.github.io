import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  threejs,
  logo,
  swift,
  typescript,
  theScore,
  mozilla,
  mobials,
  goodfood,
  traffic,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "JavaScript", icon: javascript },
  { title: "Swift", icon: swift },
  { title: "Python", icon: python },
  { title: "TypeScript", icon: typescript },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Mobile Software Developer - iOS",
    company_name: "ESPN Bet, theScore | Toronto, ON",
    icon: theScore,
    iconBg: "#161329",
    date: "Jan 2024 - Aug 2024, May 2025 - Aug 2025",
    points: [
      "Completed 160+ tickets over 12 months; recognized as the top-performing intern company-wide over 1 year tenure",
      "Led iOS development for \"Parlay Lounge\", \"BetVision LiveStream\" & \"MyBets 3.0\" using SwiftUI; launched 4 weeks ahead of schedule",
      "Developed and shipped flagship UI features with Swift & UIKit, driving engagement across 2.5M+ monthly users",
      "Refactored legacy components into modular, reusable SwiftUI packages enabling cross-team adoption and consistency",
    ],
  },
  {
    title: "Data Pipeline Engineer – Undergraduate Research Assistant",
    company_name: "TRAFFIC | Remote – London, UK",
    icon: traffic,
    iconBg: "#161329",
    date: "May 2025 – Aug 2025",
    points: [
      "Designed and deployed an end-to-end Airflow pipeline to ingest, deduplicate, and classify ivory-trafficking news from six sources",
      "Upgraded NLP extraction from GPT-3.5 to Gemini 2.5 Flash Pro with robust JSON parsing and fallbacks, reducing false positives by 70%",
      "Built ML pipeline with TF-IDF and Random Forest achieving 99.9% accuracy, 100% precision, 99.7% recall on 6k+ examples",
      "Developed resilient scraping and enrichment with Python, BeautifulSoup, and PostgreSQL with retries and idempotency",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Mozilla | Toronto, ON",
    icon: mozilla,
    iconBg: "#161329",
    date: "Sep 2022 – Dec 2022, May 2023 - Aug 2023",
    points: [
      "Designed and managed A/B experiments enrolling 10,000–1,000,000+ users influencing Firefox features and strategy",
      "Integrated backend telemetry with Glean SDK for cross-platform experiments",
      "Built modular, reusable React components adopted across 5+ engineering teams",
      "Upgraded an internal SCRUM tool and automated Looker population via Node.js, increasing ticket output by 200%",
    ],
  },
  {
    title: "Fullstack/Backend Developer",
    company_name: "Mobials Inc | Toronto, ON",
    icon: mobials,
    iconBg: "#161329",
    date: "Jan 2022 - Apr 2022",
    points: [
      "Enhanced AutoVerify’s API in PHP enabling 1,000+ business clients with real-time pre-approvals",
      "Architected RESTful APIs for partner integrations consumed by automotive vendors",
      "Optimized SQL queries by 50% and leveraged Postman for accurate API testing",
      "Automated PHP unit tests and CI/CD pipelines; integrated New Relic/Sentry for observability",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Goodfood Market Corp | Toronto, ON",
    icon: goodfood,
    iconBg: "#161329",
    date: "May 2021 - Aug 2021",
    points: [
      "Built full-stack data anonymization with Laravel and a Vue.js interface for secure customer-data handling",
      "Migrated and optimized 1.5M+ user records and 10M+ data points with MySQL",
      "Developed an internal HR tool in React to streamline user management and report logs",
    ],
  },
];

export const projects = [
  {
    name: "Suggestify",
    description:
      "AI-powered music recommendation app using MFCC-based audio fingerprints and FAISS indexing to match user audio against 8,000+ songs. Flask backend with React Native front-end enables real-time identification and suggestions.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "PyTorch", color: "green-text-gradient" },
      { name: "React Native", color: "pink-text-gradient" },
      { name: "Flask", color: "yellow-text-gradient" },
      { name: "FAISS", color: "blue-text-gradient" },
      { name: "MFCCs", color: "green-text-gradient" },
    ],
    image: logo,
    source_code_link: "https://github.com/yoenzhang/Suggestify",
  },
  {
    name: "StatCheck",
    description:
      "iOS and web app integrating the balldontlie.io API to fetch real-time NBA statistics for players dating back to 1946.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Swift", color: "green-text-gradient" },
      { name: "React", color: "pink-text-gradient" },
      { name: "NBA API", color: "yellow-text-gradient" },
    ],
    image: logo,
    source_code_link: "https://github.com/yoenzhang/StatCheckWeb",
  },
];
