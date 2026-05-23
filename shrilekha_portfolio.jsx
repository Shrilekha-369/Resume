import { useState, useEffect, useRef } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const PROFILE = {
  name: "Mudunuri Shrilekha",
  short: "Shrilekha",
  title: "Cybersecurity & AppSec",
  subtitle: "Final Year B.E. CSE · CMRIT Bengaluru · CGPA 9.27",
  email: "shrilekha.cse@gmail.com",
  github: "https://github.com/Shrilekha-369",
  linkedin: "https://www.linkedin.com/in/shrilekha-mudunuri",
  tryhackme: "Top 9% Globally",
  portfolio: "https://shrilekhamudunuri.netlify.app",
  tagline: "I build firewalls. I break systems. I secure the stack.",
  bio: "Final year CSE student at CMRIT Bengaluru specialising in application security, ethical hacking, and secure system design. Top 27% of 1,095 applicants in the Makatob IT Securities international pentest cohort. Ranked top 9% globally on TryHackMe. President of SWE Student Chapter and Director of CSE Student Senate — because building secure systems and building people aren't that different.",
  stats: [
    { value: "9.27", label: "CGPA" },
    { value: "Top 9%", label: "TryHackMe Global" },
    { value: "73/1095", label: "Makatob Pentest Track" },
    { value: "Top 50", label: "IEEE Asia-Pacific" },
  ],
};

const SKILLS = {
  "Languages": ["Python", "Bash", "Java", "C", "SQL", "JavaScript"],
  "Security Tools": ["Burp Suite", "Metasploit", "Wireshark", "Nmap", "Shodan", "OWASP ZAP"],
  "Frameworks": ["Flask", "FastAPI", "Django"],
  "Databases": ["MySQL", "SQLite", "MongoDB", "MariaDB"],
  "OS & Platforms": ["Kali Linux", "Ubuntu", "Windows"],
  "DevOps": ["Git", "GitHub Actions", "Docker"],
};

const PROJECTS = [
  {
    id: "waf",
    name: "Web Application Firewall",
    short: "WAF",
    status: "FLAGSHIP",
    statusColor: "#00ff88",
    description: "Flask-based firewall detecting OWASP Top 10 attacks including SQLi, XSS, and path traversal with 100% regex accuracy. Reduced brute-force attempts by 90% via IP rate limiting and rotating audit logs.",
    stack: ["Python", "Flask", "SQLite", "Regex", "Logging"],
    metrics: [
      { label: "Detection Accuracy", value: "100%" },
      { label: "Brute-force Reduction", value: "90%" },
      { label: "Attack Vectors Covered", value: "10+" },
    ],
    github: "https://github.com/Shrilekha-369/WAF",
    highlight: true,
  },
  {
    id: "pqc",
    name: "AQuA in Action",
    short: "PQC Research",
    status: "RESEARCH",
    statusColor: "#a78bfa",
    description: "First integrated reference architecture operationalising Automated Quantum-safe Adaptation (AQuA) for post-quantum cryptography migration. Evaluated 428 samples across 21 cryptographic categories. Found 87.3% of 'correctly migrated' code contains hidden flaws. Presented at WE Local Bengaluru 2026.",
    stack: ["Python", "NIST FIPS 203-205", "Cryptography", "Data Analysis"],
    metrics: [
      { label: "Dataset Size", value: "428 samples" },
      { label: "Categories Evaluated", value: "21" },
      { label: "Hidden Flaw Detection", value: "90.4%" },
    ],
    github: null,
    highlight: true,
  },
  {
    id: "legal",
    name: "Legal Doc Demystifier",
    short: "GenAI · Hackathon",
    status: "HACKATHON",
    statusColor: "#f59e0b",
    description: "AI-powered tool using Google Generative AI to simplify complex legal documents into plain language for everyday users. Built during hackathon focused on accessibility and practical NLP application.",
    stack: ["Python", "Google Generative AI", "NLP"],
    metrics: [],
    github: "https://github.com/Shrilekha-369",
    highlight: false,
  },
  {
    id: "chandrayaan",
    name: "Chandrayaan-2 IIRS Analysis",
    short: "ISRO · Hackathon",
    status: "HACKATHON",
    statusColor: "#f59e0b",
    description: "Applied ML to classify geological diversity of the Moon's surface using real Chandrayaan-2 IIRS hyperspectral satellite data. Built for Bharatiya Antariksh Hackathon 2024.",
    stack: ["Python", "MATLAB", "Machine Learning", "Remote Sensing"],
    metrics: [],
    github: "https://github.com/Shrilekha-369/IIRS-Chandrayan-2",
    highlight: false,
  },
  {
    id: "steganography",
    name: "Image Steganography System",
    short: "Internship · Edunet",
    status: "INTERNSHIP",
    statusColor: "#38bdf8",
    description: "Steganography solution to securely conceal sensitive data within images using OpenCV and Python cryptography libraries. Built under IBM SkillsBuild program with digital evidence handling documentation.",
    stack: ["Python", "OpenCV", "Cryptography"],
    metrics: [],
    github: "https://github.com/Shrilekha-369",
    highlight: false,
  },
  {
    id: "bbs",
    name: "Build & Break Systems",
    short: "Learning Journal",
    status: "ONGOING",
    statusColor: "#00ff88",
    description: "Phase-based cybersecurity learning journal documenting hands-on exploration of offensive and defensive security. Covers network fundamentals, web attacks, exploitation, and secure design — structured around real labs and tools.",
    stack: ["Nmap", "Burp Suite", "Metasploit", "Linux", "MITRE ATT&CK"],
    metrics: [],
    github: "https://github.com/Shrilekha-369/build-and-break-systems",
    highlight: false,
  },
];

const EXPERIENCE = [
  {
    role: "Cybersecurity Intern",
    org: "Edunet Foundation / IBM SkillsBuild",
    period: "Jan 2025 – Feb 2025",
    type: "INTERNSHIP",
    points: [
      "Implemented image steganography using OpenCV and Python cryptography",
      "Documented digital evidence handling procedures",
      "Earned IBM SkillsBuild Cybersecurity Fundamentals badge",
      "Studied Cyber Kill Chain and MITRE ATT&CK Framework",
    ],
  },
];

const LEADERSHIP = [
  {
    role: "President",
    org: "SWE Student Chapter, CMRIT",
    period: "2024 – Present",
    desc: "Leading diverse student team, driving women's representation in engineering, representing CMRIT globally.",
  },
  {
    role: "Director",
    org: "CSE Student Senate, CMRIT",
    period: "2026 – 2027",
    desc: "Leading student representation, coordinating academic initiatives, supporting policy improvements.",
  },
  {
    role: "Lead Organiser",
    org: "Torvalds Club — Flowcode Hackathon",
    period: "2025",
    desc: "Led organisation of 7-hour hackathon 'Flowcode' with 40+ teams. Assisted in multiple college-level technical events.",
  },
  {
    role: "Class Representative",
    org: "CMRIT — 2 Semesters",
    period: "2023 – 2024",
    desc: "Represented 75+ students. Rescheduled 10+ classes with 5+ professors. Escalated issues leading to 2 new department policies.",
  },
];

const ACHIEVEMENTS = [
  { title: "Makatob IT Securities Cohort 2", detail: "Selected 1/1,095 → Top 263 → Top 73 in Pentest Track (Top 27%)", year: "2025", tag: "CERTIFICATION" },
  { title: "TryHackMe", detail: "Ranked Top 9% Globally", year: "2025", tag: "PLATFORM" },
  { title: "1st Place — WE Local Bengaluru", detail: "Collegiate Poster Competition — Cancer Detection Research", year: "2025", tag: "RESEARCH" },
  { title: "IEEE Asia-Pacific Codeathon", detail: "Top 50 out of 300+ teams — Sustainable Solutions for Humanity", year: "2024", tag: "COMPETITION" },
  { title: "1st Place — AptiCode Showdown 2.0", detail: "All-rounder winner, CMRIT 2025", year: "2025", tag: "HACKATHON" },
  { title: "ICSC 2025", detail: "Top 10% — International Computer Science Competition", year: "2025", tag: "COMPETITION" },
  { title: "Silver Honour — IYMC 2024", detail: "Top 8% Globally — International Youth Math Challenge", year: "2024", tag: "MATHEMATICS" },
  { title: "AGLOA — West Virginia, USA", detail: "Only international team among 1000+ U.S. participants. 3rd Place Linguishtiks, Special Mention Mathematics", year: "2016", tag: "INTERNATIONAL" },
  { title: "College Topper — Semester I", detail: "B.E. in C.S.E., CMRIT Bengaluru", year: "2023", tag: "ACADEMIC" },
  { title: "PQC Research — WE Local 2026", detail: "Presented AQuA reference architecture for post-quantum crypto migration", year: "2026", tag: "RESEARCH" },
];

const CERTIFICATIONS = [
  { name: "Cybersecurity Training — Cohort 2", provider: "Makatob IT Securities", highlight: "Top 27% of 1,095 · Pentest Track" },
  { name: "Junior Cybersecurity Analyst Career Path", provider: "CISCO" },
  { name: "TryHackMe Labs", provider: "TryHackMe", highlight: "Top 9% Globally" },
  { name: "Hands-On Penetration Testing with Metasploit", provider: "Infosys Springboard" },
  { name: "Complete Ethical Hacking Bootcamp", provider: "Udemy" },
  { name: "Google Threat Intelligence Badge", provider: "Google Cloud Skills Boost" },
  { name: "Practical Cyber Security for Practitioners", provider: "NPTEL — IIT Kanpur" },
  { name: "OPSWAT Specialist Certifications", provider: "OPSWAT", highlight: "OESA · OFSA · OLSA · ONSA · OSSA · OWPA" },
  { name: "Introduction to Machine Learning", provider: "NPTEL — IIT Madras" },
  { name: "CompTIA Security+", provider: "CompTIA", highlight: "In Progress" },
  { name: "ISC2 Certified in Cybersecurity", provider: "ISC2", highlight: "In Progress" },
];

// ─── STYLES ──────────────────────────────────────────────────────────────────

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Syne:wght@400;600;700;800&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #080c12;
    --bg2: #0d1420;
    --bg3: #111928;
    --border: #1e2d45;
    --border2: #243450;
    --green: #00ff88;
    --green-dim: #00cc6a;
    --green-glow: rgba(0,255,136,0.15);
    --blue: #38bdf8;
    --purple: #a78bfa;
    --amber: #f59e0b;
    --red: #f87171;
    --text: #e2e8f0;
    --text2: #94a3b8;
    --text3: #475569;
    --mono: 'Space Mono', monospace;
    --sans: 'Syne', sans-serif;
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: var(--sans);
    line-height: 1.6;
    overflow-x: hidden;
  }

  /* Scanline overlay */
  body::before {
    content: '';
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0,0,0,0.03) 2px,
      rgba(0,0,0,0.03) 4px
    );
    pointer-events: none;
    z-index: 9999;
  }

  /* Noise texture */
  body::after {
    content: '';
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    opacity: 0.02;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 9998;
  }

  /* ── NAV ── */
  nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    background: rgba(8,12,18,0.85);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--border);
    padding: 0 2rem;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-logo {
    font-family: var(--mono);
    font-size: 0.85rem;
    color: var(--green);
    letter-spacing: 0.05em;
  }

  .nav-logo span { color: var(--text2); }

  .nav-links {
    display: flex;
    gap: 0.25rem;
    list-style: none;
  }

  .nav-links button {
    background: none;
    border: none;
    color: var(--text2);
    font-family: var(--mono);
    font-size: 0.75rem;
    cursor: pointer;
    padding: 0.4rem 0.75rem;
    border-radius: 4px;
    transition: all 0.15s;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .nav-links button:hover,
  .nav-links button.active {
    color: var(--green);
    background: var(--green-glow);
  }

  .nav-mobile-btn {
    display: none;
    background: none;
    border: 1px solid var(--border);
    color: var(--text2);
    padding: 0.4rem 0.6rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
  }

  /* ── SECTIONS ── */
  .page {
    min-height: 100vh;
    padding-top: 60px;
  }

  section {
    padding: 5rem 2rem;
    max-width: 1100px;
    margin: 0 auto;
  }

  /* ── HERO ── */
  .hero {
    min-height: 100vh;
    padding-top: 60px;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
  }

  .hero-bg {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,255,136,0.08) 0%, transparent 60%),
      radial-gradient(ellipse 40% 40% at 80% 60%, rgba(56,189,248,0.05) 0%, transparent 50%);
  }

  .hero-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(var(--border) 1px, transparent 1px),
      linear-gradient(90deg, var(--border) 1px, transparent 1px);
    background-size: 60px 60px;
    opacity: 0.3;
    mask-image: radial-gradient(ellipse at center, black 20%, transparent 70%);
  }

  .hero-content {
    position: relative;
    z-index: 1;
    max-width: 1100px;
    margin: 0 auto;
    padding: 4rem 2rem;
    width: 100%;
  }

  .hero-pre {
    font-family: var(--mono);
    font-size: 0.8rem;
    color: var(--green);
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .hero-pre::before {
    content: '';
    width: 32px;
    height: 1px;
    background: var(--green);
    display: block;
  }

  .hero-name {
    font-family: var(--sans);
    font-size: clamp(3rem, 8vw, 6rem);
    font-weight: 800;
    line-height: 1.0;
    margin-bottom: 0.5rem;
    letter-spacing: -0.02em;
  }

  .hero-name .accent { color: var(--green); }

  .hero-tagline {
    font-family: var(--mono);
    font-size: clamp(0.85rem, 2vw, 1rem);
    color: var(--text2);
    margin: 1.5rem 0 2.5rem;
    line-height: 1.8;
    max-width: 560px;
  }

  .hero-tagline .hl { color: var(--green); }

  .hero-cta {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 4rem;
  }

  .btn {
    font-family: var(--mono);
    font-size: 0.8rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    border: none;
  }

  .btn-primary {
    background: var(--green);
    color: var(--bg);
    font-weight: 700;
  }

  .btn-primary:hover {
    background: var(--green-dim);
    transform: translateY(-1px);
    box-shadow: 0 8px 24px rgba(0,255,136,0.25);
  }

  .btn-outline {
    background: transparent;
    color: var(--text2);
    border: 1px solid var(--border2);
  }

  .btn-outline:hover {
    border-color: var(--green);
    color: var(--green);
    background: var(--green-glow);
  }

  .hero-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
    border-radius: 8px;
    overflow: hidden;
    max-width: 700px;
  }

  .hero-stat {
    background: var(--bg2);
    padding: 1.25rem 1rem;
    text-align: center;
  }

  .hero-stat-val {
    font-family: var(--mono);
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--green);
    display: block;
  }

  .hero-stat-label {
    font-size: 0.7rem;
    color: var(--text3);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-top: 0.25rem;
    display: block;
  }

  /* ── SECTION HEADERS ── */
  .section-label {
    font-family: var(--mono);
    font-size: 0.7rem;
    color: var(--green);
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .section-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--border);
    max-width: 60px;
  }

  .section-title {
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    font-weight: 800;
    letter-spacing: -0.02em;
    margin-bottom: 0.75rem;
  }

  .section-desc {
    color: var(--text2);
    font-size: 0.95rem;
    max-width: 500px;
    margin-bottom: 3rem;
  }

  /* ── CARDS ── */
  .card {
    background: var(--bg2);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 1.5rem;
    transition: border-color 0.2s, transform 0.2s;
  }

  .card:hover {
    border-color: var(--border2);
    transform: translateY(-2px);
  }

  .card-accent {
    border-left: 3px solid var(--green);
  }

  /* ── STATUS BADGE ── */
  .status-badge {
    font-family: var(--mono);
    font-size: 0.65rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 0.2rem 0.6rem;
    border-radius: 3px;
    display: inline-block;
  }

  /* ── PROJECTS ── */
  .projects-grid {
    display: grid;
    gap: 1.5rem;
  }

  .project-card {
    background: var(--bg2);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 1.75rem;
    transition: all 0.2s;
    position: relative;
    overflow: hidden;
  }

  .project-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--green), transparent);
    opacity: 0;
    transition: opacity 0.2s;
  }

  .project-card:hover { border-color: var(--border2); transform: translateY(-2px); }
  .project-card:hover::before { opacity: 1; }
  .project-card.highlight { border-color: rgba(0,255,136,0.3); }
  .project-card.highlight::before { opacity: 1; }

  .project-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.75rem;
  }

  .project-name {
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: -0.01em;
  }

  .project-short {
    font-family: var(--mono);
    font-size: 0.72rem;
    color: var(--text3);
    margin-top: 0.2rem;
  }

  .project-desc {
    color: var(--text2);
    font-size: 0.9rem;
    line-height: 1.7;
    margin-bottom: 1.25rem;
  }

  .project-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-bottom: 1.25rem;
  }

  .stack-tag {
    font-family: var(--mono);
    font-size: 0.68rem;
    background: var(--bg3);
    border: 1px solid var(--border);
    color: var(--text2);
    padding: 0.2rem 0.55rem;
    border-radius: 3px;
  }

  .project-metrics {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    padding-top: 1rem;
    border-top: 1px solid var(--border);
    margin-bottom: 1rem;
  }

  .metric { text-align: center; }
  .metric-val {
    font-family: var(--mono);
    font-size: 1rem;
    font-weight: 700;
    color: var(--green);
    display: block;
  }
  .metric-label {
    font-size: 0.68rem;
    color: var(--text3);
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .project-link {
    font-family: var(--mono);
    font-size: 0.72rem;
    color: var(--blue);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    letter-spacing: 0.05em;
  }

  .project-link:hover { color: var(--green); }

  /* ── SKILLS ── */
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1rem;
  }

  .skill-group-title {
    font-family: var(--mono);
    font-size: 0.72rem;
    color: var(--green);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 0.75rem;
  }

  .skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .skill-tag {
    font-family: var(--mono);
    font-size: 0.72rem;
    background: var(--bg3);
    border: 1px solid var(--border);
    color: var(--text);
    padding: 0.3rem 0.7rem;
    border-radius: 3px;
    transition: all 0.15s;
    cursor: default;
  }

  .skill-tag:hover {
    border-color: var(--green);
    color: var(--green);
    background: var(--green-glow);
  }

  /* ── TIMELINE ── */
  .timeline { position: relative; padding-left: 1.5rem; }

  .timeline::before {
    content: '';
    position: absolute;
    left: 0; top: 0.5rem; bottom: 0;
    width: 1px;
    background: var(--border);
  }

  .timeline-item {
    position: relative;
    margin-bottom: 2rem;
  }

  .timeline-item::before {
    content: '';
    position: absolute;
    left: -1.5rem;
    top: 0.5rem;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--green);
    border: 2px solid var(--bg);
    box-shadow: 0 0 8px var(--green);
  }

  .timeline-period {
    font-family: var(--mono);
    font-size: 0.7rem;
    color: var(--text3);
    letter-spacing: 0.05em;
    margin-bottom: 0.3rem;
  }

  .timeline-role {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.15rem;
  }

  .timeline-org {
    font-family: var(--mono);
    font-size: 0.78rem;
    color: var(--green);
    margin-bottom: 0.5rem;
  }

  .timeline-desc {
    font-size: 0.88rem;
    color: var(--text2);
    line-height: 1.6;
  }

  .timeline-points { list-style: none; margin-top: 0.5rem; }
  .timeline-points li {
    font-size: 0.85rem;
    color: var(--text2);
    padding: 0.2rem 0;
    padding-left: 1rem;
    position: relative;
  }
  .timeline-points li::before {
    content: '›';
    position: absolute;
    left: 0;
    color: var(--green);
  }

  /* ── ACHIEVEMENTS TABLE ── */
  .achievements-list { display: grid; gap: 0.75rem; }

  .achievement-row {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 1rem;
    align-items: start;
    background: var(--bg2);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 1rem 1.25rem;
    transition: border-color 0.15s;
  }

  .achievement-row:hover { border-color: var(--border2); }

  .achievement-tag {
    font-family: var(--mono);
    font-size: 0.62rem;
    letter-spacing: 0.1em;
    color: var(--text3);
    text-transform: uppercase;
    white-space: nowrap;
    padding-top: 0.1rem;
  }

  .achievement-title {
    font-size: 0.92rem;
    font-weight: 600;
    margin-bottom: 0.15rem;
  }

  .achievement-detail {
    font-size: 0.8rem;
    color: var(--text2);
  }

  .achievement-year {
    font-family: var(--mono);
    font-size: 0.72rem;
    color: var(--text3);
    white-space: nowrap;
  }

  /* ── CERTIFICATIONS ── */
  .certs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 0.75rem;
  }

  .cert-card {
    background: var(--bg2);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 1rem 1.25rem;
    transition: border-color 0.15s;
  }

  .cert-card:hover { border-color: var(--border2); }

  .cert-name {
    font-size: 0.88rem;
    font-weight: 600;
    margin-bottom: 0.2rem;
  }

  .cert-provider {
    font-family: var(--mono);
    font-size: 0.7rem;
    color: var(--text3);
    margin-bottom: 0.4rem;
  }

  .cert-highlight {
    font-family: var(--mono);
    font-size: 0.68rem;
    color: var(--green);
    background: var(--green-glow);
    padding: 0.15rem 0.5rem;
    border-radius: 3px;
    display: inline-block;
  }

  /* ── CONTACT ── */
  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: start;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: var(--bg2);
    border: 1px solid var(--border);
    border-radius: 6px;
    text-decoration: none;
    color: var(--text);
    transition: all 0.2s;
    margin-bottom: 0.75rem;
  }

  .contact-item:hover {
    border-color: var(--green);
    background: var(--green-glow);
    color: var(--green);
  }

  .contact-icon {
    font-size: 1.2rem;
    width: 2rem;
    text-align: center;
    flex-shrink: 0;
  }

  .contact-label {
    font-family: var(--mono);
    font-size: 0.7rem;
    color: var(--text3);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .contact-value {
    font-size: 0.88rem;
    font-weight: 500;
  }

  /* ── TABS ── */
  .tabs {
    display: flex;
    gap: 0.25rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--border);
    padding-bottom: 0;
    flex-wrap: wrap;
  }

  .tab-btn {
    font-family: var(--mono);
    font-size: 0.72rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 0.6rem 1rem;
    background: none;
    border: none;
    color: var(--text3);
    cursor: pointer;
    border-bottom: 2px solid transparent;
    margin-bottom: -1px;
    transition: all 0.15s;
  }

  .tab-btn:hover { color: var(--text2); }
  .tab-btn.active { color: var(--green); border-bottom-color: var(--green); }

  /* ── FOOTER ── */
  footer {
    border-top: 1px solid var(--border);
    padding: 2rem;
    text-align: center;
  }

  .footer-text {
    font-family: var(--mono);
    font-size: 0.72rem;
    color: var(--text3);
  }

  .footer-text span { color: var(--green); }

  /* ── CURSOR BLINK ── */
  .cursor {
    display: inline-block;
    width: 2px;
    height: 1em;
    background: var(--green);
    margin-left: 2px;
    vertical-align: middle;
    animation: blink 1s step-end infinite;
  }

  @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

  /* ── FADE IN ── */
  .fade-in {
    animation: fadeIn 0.5s ease forwards;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 768px) {
    .nav-links { display: none; }
    .nav-links.open {
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 60px; left: 0; right: 0;
      background: var(--bg2);
      border-bottom: 1px solid var(--border);
      padding: 1rem;
      gap: 0.25rem;
    }
    .nav-mobile-btn { display: block; }
    .hero-stats { grid-template-columns: repeat(2, 1fr); }
    .contact-grid { grid-template-columns: 1fr; }
    .achievement-row { grid-template-columns: 1fr; gap: 0.3rem; }
    section { padding: 3rem 1.25rem; }
  }
`;

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function TerminalLine({ text, delay = 0 }) {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShown(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  if (!shown) return null;
  return (
    <div style={{ fontFamily: "var(--mono)", fontSize: "0.78rem", color: "var(--text3)", lineHeight: 1.8, animation: "fadeIn 0.3s ease forwards" }}>
      <span style={{ color: "var(--green)" }}>$ </span>{text}
    </div>
  );
}

function Nav({ page, setPage }) {
  const [open, setOpen] = useState(false);
  const pages = ["home", "projects", "experience", "achievements", "contact"];

  return (
    <nav>
      <div className="nav-logo">
        <span>~/</span>shrilekha<span>.sh</span>
      </div>
      <ul className={`nav-links${open ? " open" : ""}`}>
        {pages.map(p => (
          <li key={p}>
            <button
              className={page === p ? "active" : ""}
              onClick={() => { setPage(p); setOpen(false); window.scrollTo(0,0); }}
            >
              {p}
            </button>
          </li>
        ))}
      </ul>
      <button className="nav-mobile-btn" onClick={() => setOpen(o => !o)}>☰</button>
    </nav>
  );
}

// ─── PAGES ───────────────────────────────────────────────────────────────────

function Home({ setPage }) {
  return (
    <div className="page">
      <div className="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-content">
          <div className="hero-pre">Cybersecurity · AppSec · Ethical Hacking</div>
          <h1 className="hero-name">
            Mudunuri<br />
            <span className="accent">Shrilekha</span>
          </h1>
          <p className="hero-tagline">
            Final year CSE @ CMRIT Bengaluru · CGPA 9.27<br />
            <span className="hl">Top 27%</span> · Makatob IT Securities International Pentest Cohort<br />
            <span className="hl">Top 9%</span> · TryHackMe Global · <span className="hl">Top 50</span> · IEEE Asia-Pacific
          </p>

          <div style={{ fontFamily: "var(--mono)", fontSize: "0.88rem", color: "var(--text2)", marginBottom: "2rem", borderLeft: "3px solid var(--green)", paddingLeft: "1rem", maxWidth: "520px", lineHeight: 1.8 }}>
            I build firewalls. I break systems. I secure the stack.<span className="cursor" />
          </div>

          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => setPage("projects")}>
              ↗ View Projects
            </button>
            <button className="btn btn-outline" onClick={() => setPage("contact")}>
              → Get In Touch
            </button>
            <a className="btn btn-outline" href="mailto:shrilekha.cse@gmail.com">
              ✉ Email Me
            </a>
          </div>

          <div className="hero-stats">
            {PROFILE.stats.map((s, i) => (
              <div className="hero-stat" key={i}>
                <span className="hero-stat-val">{s.value}</span>
                <span className="hero-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Terminal intro */}
      <section>
        <div className="section-label">About</div>
        <h2 className="section-title">whoami</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "start" }}>
          <div>
            <p style={{ color: "var(--text2)", lineHeight: 1.8, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              {PROFILE.bio}
            </p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              {["Application Security", "Ethical Hacking", "Penetration Testing", "Secure System Design", "OWASP"].map(tag => (
                <span key={tag} className="skill-tag">{tag}</span>
              ))}
            </div>
          </div>
          <div style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: "8px", padding: "1.5rem" }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: "0.72rem", color: "var(--text3)", marginBottom: "1rem", display: "flex", justifyContent: "space-between" }}>
              <span>terminal</span>
              <span style={{ color: "var(--green)" }}>● live</span>
            </div>
            <TerminalLine text="whoami" delay={100} />
            <TerminalLine text="shrilekha — cybersecurity specialist" delay={400} />
            <TerminalLine text="cat specialisation.txt" delay={800} />
            <TerminalLine text="AppSec · Pentest · OWASP · WAF · PQC" delay={1100} />
            <TerminalLine text="cat certifications.txt | head -3" delay={1500} />
            <TerminalLine text="[1] Makatob IT Securities — Top 27% Pentest Track" delay={1800} />
            <TerminalLine text="[2] TryHackMe — Top 9% Globally" delay={2100} />
            <TerminalLine text="[3] CISCO — Junior Cybersecurity Analyst" delay={2400} />
            <TerminalLine text="echo $STATUS" delay={2800} />
            <TerminalLine text="Seeking final year cybersecurity internship ✓" delay={3100} />
          </div>
        </div>
      </section>

      {/* Featured projects teaser */}
      <section style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", maxWidth: "100%", padding: "4rem 2rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="section-label">Selected Work</div>
          <h2 className="section-title">Flagship Projects</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2rem" }}>
            {PROJECTS.filter(p => p.highlight).map(p => (
              <div className={`project-card highlight`} key={p.id}>
                <div className="project-header">
                  <div>
                    <div className="project-name">{p.name}</div>
                    <div className="project-short">{p.short}</div>
                  </div>
                  <span className="status-badge" style={{ background: `${p.statusColor}18`, color: p.statusColor, border: `1px solid ${p.statusColor}40` }}>{p.status}</span>
                </div>
                <p className="project-desc" style={{ WebkitLineClamp: 3, overflow: "hidden", display: "-webkit-box", WebkitBoxOrient: "vertical" }}>{p.description}</p>
                <div className="project-stack">
                  {p.stack.slice(0, 4).map(s => <span className="stack-tag" key={s}>{s}</span>)}
                </div>
              </div>
            ))}
          </div>
          <button className="btn btn-outline" onClick={() => setPage("projects")}>
            View All Projects →
          </button>
        </div>
      </section>
    </div>
  );
}

function Projects() {
  return (
    <div className="page fade-in">
      <section>
        <div className="section-label">Work</div>
        <h2 className="section-title">Projects</h2>
        <p className="section-desc">Security tools, research, and systems I've built — from OWASP-compliant firewalls to post-quantum cryptography architecture.</p>

        <div className="projects-grid">
          {PROJECTS.map(p => (
            <div className={`project-card${p.highlight ? " highlight" : ""}`} key={p.id}>
              <div className="project-header">
                <div>
                  <div className="project-name">{p.name}</div>
                  <div className="project-short">{p.short}</div>
                </div>
                <span className="status-badge" style={{ background: `${p.statusColor}18`, color: p.statusColor, border: `1px solid ${p.statusColor}40` }}>{p.status}</span>
              </div>
              <p className="project-desc">{p.description}</p>
              <div className="project-stack">
                {p.stack.map(s => <span className="stack-tag" key={s}>{s}</span>)}
              </div>
              {p.metrics.length > 0 && (
                <div className="project-metrics">
                  {p.metrics.map(m => (
                    <div className="metric" key={m.label}>
                      <span className="metric-val">{m.value}</span>
                      <span className="metric-label">{m.label}</span>
                    </div>
                  ))}
                </div>
              )}
              {p.github ? (
                <a className="project-link" href={p.github} target="_blank" rel="noopener noreferrer">
                  ↗ View on GitHub
                </a>
              ) : (
                <span style={{ fontFamily: "var(--mono)", fontSize: "0.72rem", color: "var(--text3)" }}>
                  🔒 Manuscript in preparation
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", maxWidth: "100%", padding: "4rem 2rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="section-label">Skills</div>
          <h2 className="section-title">Technical Stack</h2>
          <div className="skills-grid">
            {Object.entries(SKILLS).map(([group, tags]) => (
              <div className="card" key={group}>
                <div className="skill-group-title">{group}</div>
                <div className="skill-tags">
                  {tags.map(t => <span className="skill-tag" key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Experience() {
  const [tab, setTab] = useState("leadership");
  const tabs = ["leadership", "internship", "certifications"];

  return (
    <div className="page fade-in">
      <section>
        <div className="section-label">Experience</div>
        <h2 className="section-title">Experience & Leadership</h2>
        <p className="section-desc">Internships, leadership roles, and certifications that define my professional journey.</p>

        <div className="tabs">
          {tabs.map(t => (
            <button key={t} className={`tab-btn${tab === t ? " active" : ""}`} onClick={() => setTab(t)}>
              {t}
            </button>
          ))}
        </div>

        {tab === "leadership" && (
          <div className="fade-in">
            <div className="timeline">
              {LEADERSHIP.map((l, i) => (
                <div className="timeline-item" key={i}>
                  <div className="timeline-period">{l.period}</div>
                  <div className="timeline-role">{l.role}</div>
                  <div className="timeline-org">{l.org}</div>
                  <div className="timeline-desc">{l.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "internship" && (
          <div className="fade-in">
            {EXPERIENCE.map((e, i) => (
              <div className="card card-accent" key={i} style={{ marginBottom: "1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.75rem" }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "0.2rem" }}>{e.role}</div>
                    <div style={{ fontFamily: "var(--mono)", fontSize: "0.78rem", color: "var(--green)" }}>{e.org}</div>
                  </div>
                  <span className="status-badge" style={{ background: "rgba(56,189,248,0.1)", color: "var(--blue)", border: "1px solid rgba(56,189,248,0.3)" }}>{e.period}</span>
                </div>
                <ul className="timeline-points">
                  {e.points.map((pt, j) => <li key={j}>{pt}</li>)}
                </ul>
              </div>
            ))}
            <div style={{ marginTop: "2rem", padding: "1.25rem", background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: "8px" }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: "0.72rem", color: "var(--text3)", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>Professional Events & Memberships</div>
              {[
                "Women Only Cybersecurity Bootcamp — CysecK, Karnataka (2026)",
                "WE Local Bengaluru — SWE (2024, 2025, 2026)",
                "SWE Collegiate Leadership Institute 2024-25 Cohort",
                "Internet Society (ISOC) India Bengaluru Chapter",
                "ISC2 Member · Global Women in Digital Governance (GWIDG)",
              ].map((item, i) => (
                <div key={i} style={{ fontSize: "0.88rem", color: "var(--text2)", padding: "0.4rem 0", borderBottom: i < 4 ? "1px solid var(--border)" : "none", display: "flex", gap: "0.75rem", alignItems: "center" }}>
                  <span style={{ color: "var(--green)", fontFamily: "var(--mono)" }}>›</span> {item}
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "certifications" && (
          <div className="certs-grid fade-in">
            {CERTIFICATIONS.map((c, i) => (
              <div className="cert-card" key={i}>
                <div className="cert-name">{c.name}</div>
                <div className="cert-provider">{c.provider}</div>
                {c.highlight && <span className="cert-highlight">{c.highlight}</span>}
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function Achievements() {
  return (
    <div className="page fade-in">
      <section>
        <div className="section-label">Recognition</div>
        <h2 className="section-title">Achievements</h2>
        <p className="section-desc">Competitions, research recognition, and academic excellence — from Bengaluru to West Virginia.</p>

        <div className="achievements-list">
          {ACHIEVEMENTS.map((a, i) => (
            <div className="achievement-row" key={i}>
              <div className="achievement-tag">{a.tag}</div>
              <div>
                <div className="achievement-title">{a.title}</div>
                <div className="achievement-detail">{a.detail}</div>
              </div>
              <div className="achievement-year">{a.year}</div>
            </div>
          ))}
        </div>

        {/* Academic Excellence */}
        <div style={{ marginTop: "3rem" }}>
          <div className="section-label">Academic</div>
          <h3 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "1.5rem" }}>Academic Excellence</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "0.75rem" }}>
            {[
              "College Topper — Semester I, CMRIT",
              "Centum in Engineering Physics — Semester II",
              "Centum in CS with Python — Class 12",
              "Centum in Computer Applications — Class 10",
              "CGPA 9.27 — B.E. in C.S.E., CMRIT",
              "95.6% — Class 10 · 91.8% — Class 12",
            ].map((item, i) => (
              <div key={i} style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: "6px", padding: "0.875rem 1rem", fontSize: "0.85rem", color: "var(--text2)", display: "flex", gap: "0.75rem", alignItems: "center" }}>
                <span style={{ color: "var(--green)", fontFamily: "var(--mono)", fontSize: "0.8rem" }}>✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Contact() {
  return (
    <div className="page fade-in">
      <section>
        <div className="section-label">Contact</div>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-desc">Open to final year cybersecurity internships in AppSec, penetration testing, and SOC analyst roles.</p>

        <div className="contact-grid">
          <div>
            <div style={{ marginBottom: "2rem" }}>
              {[
                { icon: "✉", label: "Email", value: "shrilekha.cse@gmail.com", href: "mailto:shrilekha.cse@gmail.com" },
                { icon: "⌥", label: "GitHub", value: "github.com/Shrilekha-369", href: "https://github.com/Shrilekha-369" },
                { icon: "in", label: "LinkedIn", value: "in/shrilekha-mudunuri", href: "https://www.linkedin.com/in/shrilekha-mudunuri" },
              ].map((item, i) => (
                <a className="contact-item" key={i} href={item.href} target="_blank" rel="noopener noreferrer">
                  <span className="contact-icon">{item.icon}</span>
                  <div>
                    <div className="contact-label">{item.label}</div>
                    <div className="contact-value">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: "8px", padding: "1.5rem" }}>
              <div className="section-label" style={{ marginBottom: "1rem" }}>Status</div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--green)", display: "block", boxShadow: "0 0 8px var(--green)", flexShrink: 0, animation: "blink 2s ease infinite" }} />
                <span style={{ fontFamily: "var(--mono)", fontSize: "0.8rem", color: "var(--green)" }}>Available for internships</span>
              </div>
              {[
                "Application Security (AppSec)",
                "Penetration Testing",
                "SOC Analyst Roles",
                "Security Research Collaboration",
              ].map((item, i) => (
                <div key={i} style={{ fontFamily: "var(--mono)", fontSize: "0.75rem", color: "var(--text2)", padding: "0.3rem 0", display: "flex", gap: "0.75rem" }}>
                  <span style={{ color: "var(--green)" }}>›</span> {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: "8px", padding: "1.75rem" }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: "0.72rem", color: "var(--text3)", marginBottom: "1.5rem", display: "flex", justifyContent: "space-between" }}>
                <span>quick_profile.json</span>
                <span style={{ color: "var(--green)" }}>● ready</span>
              </div>
              <pre style={{ fontFamily: "var(--mono)", fontSize: "0.78rem", color: "var(--text2)", lineHeight: 1.8, whiteSpace: "pre-wrap", wordBreak: "break-word" }}>{JSON.stringify({
                name: "Mudunuri Shrilekha",
                role: "Final Year CSE · CMRIT",
                specialisation: ["AppSec", "Pentest", "Ethical Hacking"],
                tryHackMe: "Top 9% Global",
                makatob: "Top 27% — Pentest Track",
                cgpa: 9.27,
                openTo: "Cybersecurity Internships",
                location: "Bengaluru, India",
              }, null, 2)}</pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState("home");

  const pageMap = {
    home: <Home setPage={setPage} />,
    projects: <Projects />,
    experience: <Experience />,
    achievements: <Achievements />,
    contact: <Contact />,
  };

  return (
    <>
      <style>{CSS}</style>
      <Nav page={page} setPage={setPage} />
      {pageMap[page] || <Home setPage={setPage} />}
      <footer>
        <div className="footer-text">
          <span>Mudunuri Shrilekha</span> · Cybersecurity & AppSec · CMRIT Bengaluru · {new Date().getFullYear()}
        </div>
      </footer>
    </>
  );
}
