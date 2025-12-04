# Design Guidelines: Shrilekha Mudunuri - Professional Portfolio Website

## Design Approach
**Hybrid Approach**: Modern professional portfolio combining LinkedIn's clean information architecture with contemporary portfolio aesthetics (Behance/Dribbble). Emphasis on readability, credential display, and professional credibility suitable for cybersecurity/tech recruiting.

## Core Design Principles
- **Professional Authority**: Establish immediate credibility through clean, organized presentation
- **Information Clarity**: Complex achievement data presented in digestible, scannable formats
- **Subtle Technical Identity**: Minimal cyber/tech theming without clichés—think precision over decoration
- **Progressive Disclosure**: Layer information depth across pages logically

## Typography System
**Primary Font**: Inter or IBM Plex Sans (Google Fonts)
**Secondary Font**: JetBrains Mono (for code/technical elements)

**Hierarchy**:
- H1: 3xl to 5xl, font-bold (page titles, name on home)
- H2: 2xl to 3xl, font-semibold (section headings)
- H3: xl to 2xl, font-medium (subsections)
- Body: base to lg, font-normal (main content)
- Small: sm to base (metadata, dates, labels)
- Technical/Code: mono font family for skills, tools

## Layout System
**Spacing Primitives**: Tailwind units of 2, 4, 6, 8, 12, 16, 20
- Component padding: p-4 to p-8
- Section spacing: py-12 to py-20
- Card gaps: gap-6 to gap-8
- Content containers: max-w-7xl with px-6 to px-8

**Grid Strategy**:
- Desktop: 2-3 column layouts for skills, achievements, projects
- Tablet: 2 columns maximum
- Mobile: Single column stack

## Component Library

### Navigation
- Sticky header with logo/name, horizontal menu, social icons
- Mobile: Hamburger menu with slide-in drawer
- Active page indicator with subtle underline/accent

### Home/Landing Page
- Professional hero: Large name/title, brief tagline, profile image (professional headshot), primary CTA buttons
- Quick stats grid: CGPA, Hackathon wins, Global rankings (3-4 columns)
- Featured achievements carousel/grid
- Recent highlights section
- CTA section with LinkedIn/GitHub/contact

### Resume Page
- Timeline layout for education (vertical timeline with cards)
- Skills grid: Categorized with visual tags/badges, not progress bars
- Projects: Card layout with title, description, tech stack badges, GitHub links
- Internships: Detailed cards with bullet achievements

### Bio-data Page
- Structured sections: Career objective, personal info, awards grid
- Achievement cards with icons and descriptions
- Photo gallery option for competitions/events (if available)

### Experience & Activities Page
- Tabbed or accordion sections: Hackathons, Certifications, Leadership
- Certification badges displayed prominently
- Timeline view for chronological activities
- Rich cards with dates, descriptions, outcomes

### Contact Page
- Clean contact form (name, email, subject, message)
- Social media icon links (large, accessible)
- Email/phone display with copy-to-clipboard functionality
- Optional: Downloadable resume PDF button

### UI Elements
- **Cards**: Rounded corners (rounded-lg), subtle shadows, hover lift effect
- **Buttons**: Solid primary (cybersecurity blue/teal accent), outlined secondary, consistent padding (px-6 py-3)
- **Badges**: Pill-shaped for skills/technologies (rounded-full, px-3 py-1)
- **Icons**: Heroicons or Font Awesome via CDN
- **Links**: Underline on hover, accent on active states
- **Forms**: Clear labels above inputs, focus states with accent borders

## Images
**Hero Section**: Professional headshot or workspace setup photo (1920x1080 or larger)
- Placement: Top of Home page, either left/right split or centered with overlay
- Treatment: If using overlay design, ensure buttons have blurred backgrounds

**Profile Image**: Circular professional headshot (300x300 minimum)
- Placement: Home page hero, About/Bio section

**Achievement Photos** (if available): Competition photos, conference attendance, team events
- Placement: Experience & Activities page in grid or gallery format

**Icons/Graphics**: Use icon libraries for skills, certifications, social media—no custom SVGs needed

## Animations & Interactions
- **Minimal**: Smooth page transitions (fade), scroll-triggered content reveals (fade-up)
- **Hover states**: Card lift (transform scale-105), button brightness, link underlines
- **No**: Complex animations, parallax effects, distracting motion

## Page-Specific Layouts

**Home**: Hero (60vh) → Stats Grid → Featured Achievements (2-3 cards) → Quick Bio → CTA Section
**Resume**: Page Header → Timeline Education → Skills Grid → Projects Grid → Internships
**Bio-data**: Header → Career Objective → Personal Details → Awards Grid (3 columns) → Gallery
**Experience**: Tabbed Interface → Content Cards for each category
**Contact**: Split layout (Form 60% | Info 40%) or centered single column

## Accessibility & Quality
- High contrast text-to-background ratios
- Semantic HTML structure
- ARIA labels for navigation and interactive elements
- Focus indicators on all interactive elements
- Mobile-first responsive design (breakpoints: sm, md, lg, xl)

## Technical Integration
- jQuery for smooth scrolling between sections
- Form validation with JavaScript
- Responsive navigation toggle
- Print-friendly stylesheet for resume page
- PDF download functionality using browser print or library

This design balances professional credibility with modern web aesthetics, ensuring Shrilekha's impressive credentials are showcased effectively for recruiters and academic opportunities.