# Professional Portfolio Website - Shrilekha Mudunuri

## Overview

This is a professional portfolio website for Shrilekha Mudunuri, a pre-final year Computer Science Engineering student specializing in Cybersecurity and Threat Intelligence. The application showcases academic achievements, hackathon wins, certifications, projects, and professional experience through a clean, modern interface.

The website features multiple pages including Home (landing), Resume, Bio-data, Experience, and Contact, all designed with a professional aesthetic that emphasizes readability and credential display.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript
- Single Page Application (SPA) using Wouter for client-side routing
- Component-based architecture with reusable UI components
- No Server-Side Rendering (RSC disabled)

**UI Component Library**: Shadcn/UI (New York style variant)
- Radix UI primitives for accessible, unstyled components
- Custom styled components using Tailwind CSS
- Extensive component library including forms, dialogs, navigation, cards, tabs, etc.

**Styling System**:
- Tailwind CSS for utility-first styling
- CSS variables for theming (light/dark mode support)
- Custom design tokens defined in index.css
- Typography: Inter/IBM Plex Sans (primary), JetBrains Mono (technical elements)
- Neutral color scheme with blue primary accent (#217 hue)

**State Management**:
- TanStack Query (React Query v5) for server state management
- React Context for theme state (light/dark mode)
- Local component state with React hooks

**Form Handling**:
- React Hook Form for form state management
- Zod for schema validation
- Hookform Resolvers for integration

### Backend Architecture

**Server Framework**: Express.js (Node.js)
- RESTful API architecture
- HTTP server with middleware-based request handling
- Custom logging middleware for request/response tracking

**API Endpoints**:
- `POST /api/contact` - Submit contact form messages
- `GET /api/resume/download` - Download resume PDF file

**Development Server**:
- Vite development server with HMR (Hot Module Replacement)
- Custom Vite middleware integration with Express
- Development-specific Replit plugins (cartographer, dev banner, error overlay)

**Build Process**:
- Vite for client-side bundling
- esbuild for server-side bundling
- Separate build outputs: `dist/public` (client), `dist/index.cjs` (server)
- Server dependency bundling for improved cold start times

### Data Storage Solutions

**Database**: PostgreSQL (via Drizzle ORM configuration)
- Schema-first approach using Drizzle ORM
- Migration support via drizzle-kit
- Database connection via environment variable `DATABASE_URL`

**Schema Design**:
- `users` table: User authentication (id, username, password)
- `contact_messages` table: Contact form submissions (id, name, email, subject, message, createdAt)

**In-Memory Fallback**: MemStorage class
- Implements IStorage interface for development/testing
- Map-based storage for users and contact messages
- Provides same interface as database storage layer

**Storage Abstraction**:
- IStorage interface defines contract for data operations
- Allows switching between memory and database implementations
- Methods: getUser, getUserByUsername, createUser, createContactMessage, getContactMessages

### Authentication and Authorization

**Current State**: Basic user schema defined but not actively implemented
- User table with username/password fields exists in schema
- No active authentication middleware or session management in routes
- Passport.js and session dependencies installed but not configured

### File Storage

**Static Assets**:
- Resume PDF stored in `attached_assets` directory
- Direct file serving via Express static middleware
- Streaming download for resume file

## External Dependencies

### Third-Party UI Libraries
- **Radix UI**: Accessible component primitives (accordion, dialog, dropdown, popover, tabs, tooltip, etc.)
- **Embla Carousel**: Carousel/slider functionality
- **cmdk**: Command menu component
- **Lucide React**: Icon library
- **class-variance-authority**: Component variant styling utilities
- **Tailwind Merge & clsx**: Utility class management

### Data & Validation
- **Zod**: Schema validation for forms and API data
- **Drizzle ORM**: Type-safe SQL query builder
- **Drizzle Zod**: Integration between Drizzle schemas and Zod validation
- **date-fns**: Date manipulation utilities

### Build Tools & Development
- **Vite**: Frontend build tool and dev server
- **TypeScript**: Type-safe JavaScript
- **PostCSS & Autoprefixer**: CSS processing
- **esbuild**: Fast JavaScript bundler for server code
- **tsx**: TypeScript execution for Node.js

### Backend Services
- **Express**: Web application framework
- **pg**: PostgreSQL client (configured but may not be provisioned)
- **connect-pg-simple**: PostgreSQL session store
- **Passport.js**: Authentication middleware (installed, not configured)

### Replit-Specific Integrations
- **@replit/vite-plugin-runtime-error-modal**: Error overlay in development
- **@replit/vite-plugin-cartographer**: Replit development tools
- **@replit/vite-plugin-dev-banner**: Development mode banner

### Google Fonts
- Architects Daughter
- DM Sans
- Fira Code
- Geist Mono
- (Loaded via HTML link tags)

### Asset Management
- Resume PDF: `attached_assets/Mudunuri_Shrilekha_Resume_1764867241323.pdf`
- Favicon: `/favicon.png`

### Environment Variables Required
- `DATABASE_URL`: PostgreSQL connection string (required for Drizzle configuration)
- `NODE_ENV`: Environment mode (development/production)
- `REPL_ID`: Replit environment identifier (optional, for Replit-specific features)