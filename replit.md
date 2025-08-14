# Overview

Denver Day Trips is a specialized travel discovery platform focused on day trip adventures in and around Denver, Colorado. The application showcases curated day experiences from mountain adventures to cultural explorations, designed for locals and visitors wanting to explore Colorado's natural beauty and local attractions. Built as a fully responsive full-stack TypeScript application, it features a React frontend with shadcn/ui components and an Express.js backend with PostgreSQL database integration.

## Recent Changes (January 2025)
- **Design Simplification**: Streamlined color palette from complex travel-themed gradients to clean Colorado mountain blue primary colors
- **Enhanced Search Experience**: Implemented comprehensive search bar with real-time filtering by duration, price range, and location
- **Mobile-First Responsive Design**: Optimized for mobile devices with improved touch targets and responsive grid layouts
- **Denver-Focused Content**: Updated all sample itineraries to showcase authentic Denver-area day trips including Red Rocks, Garden of the Gods, Boulder, and historic mining towns
- **Improved User Experience**: Added search result counters, empty states, and clear filter functionality

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Library**: shadcn/ui components built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom design tokens for travel-themed branding (warm sunset colors, ocean blues, earth tones)
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and caching
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API structure with `/api` prefix for all endpoints
- **Development**: Hot reload enabled with tsx for development server
- **Build Process**: esbuild for production bundling with external package handling

## Data Storage
- **Database**: PostgreSQL with Neon serverless driver (@neondatabase/serverless)
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Validation**: Drizzle-Zod integration for runtime schema validation
- **Fallback Storage**: In-memory storage implementation for development/testing

## Design System
- **Component Library**: Custom implementation using shadcn/ui with travel-specific theming
- **Color Palette**: HSL-based design tokens with travel-inspired colors (sunset oranges, sky blues, earth tones)
- **Typography**: Responsive typography with careful attention to readability
- **Spacing**: Consistent spacing system using Tailwind's design tokens
- **Interactive Elements**: Smooth transitions and hover effects for enhanced user experience

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe SQL query builder and ORM
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight React router

### UI Component Dependencies
- **@radix-ui/react-***: Accessible UI primitive components (dialog, dropdown, select, etc.)
- **class-variance-authority**: Type-safe variant API for component styling
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library for consistent iconography

### Development Dependencies
- **vite**: Fast build tool and development server
- **@vitejs/plugin-react**: React support for Vite
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **tsx**: TypeScript execution environment for Node.js

### Form and Validation
- **react-hook-form**: Performant forms with minimal re-renders
- **@hookform/resolvers**: Validation resolvers for react-hook-form
- **zod**: Schema validation library

### Utility Libraries
- **clsx**: Conditional className utility
- **date-fns**: Date manipulation and formatting
- **embla-carousel-react**: Carousel/slider functionality
- **sonner**: Toast notification system