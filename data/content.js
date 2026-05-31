// ───────────────────────────────────────────────────────────────
//  EDIT THIS FILE TO MAKE THE PORTFOLIO YOURS.
//  Everything the site shows lives here. No other file needs to
//  change for normal edits.
//
//  TIP: wrap any word in *asterisks* to render it as the italic
//  serif accent (e.g. "What I've *built*." → built is italic).
// ───────────────────────────────────────────────────────────────

export const profile = {
  name: "Lakshya Verma",
  // tiny label above the big headline
  kicker: "Data & AI Engineer",
  // the giant hero headline — *asterisks* become italic accents
  headline: "I build *data* & *AI* products that *ship*.",
  // one or two lines under the headline
  intro:
    "From LLM agents and RAG pipelines to forecasting models and dashboards — I own the problem end-to-end, from messy raw data to a decision-ready result.",
  location: "Bengaluru, India",
  email: "vermalakshya12@gmail.com",
  phone: "+91 8219271382",
  phoneHref: "+918219271382",
  socials: [
    { label: "GitHub", url: "https://github.com/lakshyaverma2004" },
    { label: "LinkedIn", url: "https://linkedin.com/in/lakshyavermaaa" },
  ],
};

// Hero stat strip
export const stats = [
  { value: "05+", label: "Shipped projects" },
  { value: "02", label: "Internships" },
  { value: "211K+", label: "Trades analyzed" },
  { value: "2027", label: "Graduating" },
];

// ── 02 · Selected Work ──────────────────────────────────────────
// Replace the GitHub/Live URLs with your exact repo links.
export const projects = [
  {
    title: "Natural Language to SQL Agent",
    type: "AI Agent · Text-to-SQL",
    year: "2025",
    description:
      "An AI agent using text-to-SQL and RAG that turns plain-English questions into optimized SQL — self-serve data access for non-technical users, cutting query time 60% and lifting output precision 35%.",
    tags: ["Google Gemini", "RAG", "n8n", "PostgreSQL"],
    link: "",
    repo: "https://github.com/lakshyaverma2004",
  },
  {
    title: "Tamil Nadu Elections Decoded",
    type: "Electoral Analytics Pipeline",
    year: "2025",
    description:
      "End-to-end pipeline ingesting 8,489 records across 234 constituencies, standardizing 13+ source variants and detecting flips. Quantified a +12.06 pp turnout swing and auto-generated broadcast-ready executive decks.",
    tags: ["Python", "Pandas", "Plotly", "Streamlit"],
    link: "",
    repo: "https://github.com/lakshyaverma2004",
  },
  {
    title: "Trader Sentiment Analysis",
    type: "Predictive ML Model",
    year: "2025",
    description:
      "Merged ~211K trade fills with the Bitcoin Fear & Greed Index, segmented traders with K-Means, and trained a Random Forest to predict next-day PnL direction across market-sentiment regimes.",
    tags: ["Scikit-learn", "K-Means", "Random Forest"],
    link: "",
    repo: "https://github.com/lakshyaverma2004",
  },
  {
    title: "Automated Data Governor",
    type: "Data Quality & Integrity",
    year: "2025",
    description:
      "An AI-driven tool that audits PostgreSQL databases for integrity issues and fires automated alerts and SQL quality reports — cutting manual audit time 50% and resolution time 45%.",
    tags: ["Python", "PostgreSQL", "n8n", "AI Agents"],
    link: "",
    repo: "https://github.com/lakshyaverma2004",
  },
  {
    title: "Business 360",
    type: "Interactive BI Dashboard",
    year: "2025",
    description:
      "An interactive dashboard integrating SQL and Excel sources to track global KPIs, with optimized DAX models improving report performance.",
    tags: ["Power BI", "DAX", "SQL", "Plotly"],
    link: "",
    repo: "https://github.com/lakshyaverma2004",
  },
];

// ── 03 · What I do ──────────────────────────────────────────────
export const services = [
  {
    title: "AI & LLM Systems",
    blurb:
      "Agentic workflows, RAG pipelines and text-to-SQL agents built on Gemini, OpenAI and Anthropic — with structured prompt engineering and error-driven iteration.",
    items: ["LLM prompting & fine-tuning", "RAG pipelines", "AI agents / agentic workflows", "NLP — sentiment & themes"],
  },
  {
    title: "Data Analytics & BI",
    blurb:
      "KPI dashboards and executive reporting that turn multi-source data into clear, decision-ready narratives.",
    items: ["Power BI & DAX", "Plotly / Streamlit", "EDA & data storytelling", "SQL reporting"],
  },
  {
    title: "ML & Forecasting",
    blurb:
      "Predictive models and statistical analysis — from messy raw data to a deployed, working result.",
    items: ["Classification & clustering", "Regression & forecasting", "Scikit-learn", "Model evaluation"],
  },
  {
    title: "Automation & Quality",
    blurb:
      "Pipelines, n8n workflows and automated data-quality checks that keep data trustworthy and reporting fast.",
    items: ["n8n workflow automation", "Automated reporting", "Data-quality assurance", "REST APIs & Git"],
  },
];

// ── 04 · Experience ─────────────────────────────────────────────
export const experience = [
  {
    role: "Data & Operations Intern",
    company: "Nirmala Swarup Securities Pvt. Ltd.",
    period: "Dec 2025 — Feb 2026",
    location: "Agra, India",
    points: [
      "Built structured data models and workflows across Excel and Tally ERP, reducing data discrepancies 35% and improving compliance accuracy.",
      "Designed interactive dashboards and SQL reports surfacing operational KPIs, cutting reporting time 40%.",
    ],
  },
  {
    role: "Artificial Intelligence Intern",
    company: "1Stop.ai (Languify)",
    period: "May 2025 — Jun 2025",
    location: "Remote",
    points: [
      "Restructured AI training pipelines with NLP-based preprocessing and data cleaning, cutting preprocessing time 30% and accelerating model iteration.",
      "Evaluated model performance and translated findings into actionable insights (+20% optimization efficiency); built automated narrative summaries for stakeholders.",
    ],
  },
];

export const education = [
  {
    degree: "B.Tech, Computer Science & Engineering (AI/ML)",
    school: "Manipal Institute of Technology, Bengaluru",
    period: "Aug 2023 — May 2027",
    note: "Minor in Data Analytics · ML, NLP, DBMS, Business Intelligence, Statistics",
  },
];

// ── 05 · About ──────────────────────────────────────────────────
export const about = {
  meta: "CS · AI/ML · Bengaluru",
  roles: ["Developer", "Data Analyst", "AI Engineer"],
  paragraphs: [
    "I'm a CS undergraduate (AI/ML, graduating 2027) who builds and ships end-to-end data and AI products — text-to-SQL agents, predictive ML, and business intelligence that people actually use.",
    "Two internships across AI and finance/operations taught me to own a problem from messy raw data to a working, decision-ready result. I'm most comfortable in Python and SQL, and happiest when a model or dashboard changes a decision.",
  ],
  facts: [
    { k: "Focus", v: "AI / ML" },
    { k: "Location", v: "Bengaluru" },
    { k: "Graduating", v: "2027" },
    { k: "Status", v: "Open to roles" },
  ],
};

// ── 06 · Contact ────────────────────────────────────────────────
export const contact = {
  heading: "Let's *talk.*",
  blurb:
    "Tell me about your data, AI or analytics problem and I'll reply within a day with concrete next steps. Direct line — no middle layer.",
  // Put a PDF named resume.pdf in /public to enable this button. Set to "" to hide.
  resumeUrl: "/resume.pdf",
};
