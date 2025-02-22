# Recipe Finder Application
A modern web application built with Next.js 14/15 that allows users to search for recipes with advanced filters and view detailed recipe information.
## Features
- :mag: Advanced recipe search with multiple filters
- :earth_americas: Cuisine-based filtering
- :stopwatch: Preparation time filtering
- :iphone: Responsive design
- :rocket: Server-side rendering
- :computer: TypeScript support
- :art: Tailwind CSS styling
- :arrows_counterclockwise: 1-minute API response caching
- :zap: Fast page loads with React Suspense
## Tech Stack
- **Framework**: Next.js 14/15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **API**: Spoonacular Food API
- **State Management**: React Hooks
- **Caching**: Next.js built-in caching
- **Linting**: ESLint
- **Code Formatting**: Prettier
## Prerequisites
Before you begin, ensure you have installed:
- Node.js 18.17 or later
- npm or yarn package manager
- A Spoonacular API key (get one at [Spoonacular API](https://spoonacular.com/food-api))
## Installation
1. Clone the repository:
```bash
git clone https://github.com/raufGarayev/recipes
cd recipes
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Create a .env.local (already in repository) file in the root directory and add your Spoonacular API KEY:
```env
NEXT_PUBLIC_SPOONACULAR_API_KEY=your_api_key_here
```

Running the application

Development Mode
```bash
npm run dev
# or
yarn dev
```

The application will be available at http://localhost:3000

Production Build
```bash
# Create production build
npm run build
# or
yarn build

# Start production server
npm run start
# or
yarn start
```

Project Structure
```bash
src/
├── app/                    # Next.js App Router directory
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page component
│   └── recipes/           # Recipe routes
│       ├── page.tsx       # Recipe list route
│       └── [id]/          # Dynamic recipe detail route
│           └── page.tsx   # Recipe detail page
├── lib/                   # Shared utilities
│   ├── api.ts            # API functions
│   └── types.ts          # TypeScript interfaces
└── screens/              # Feature-based components
    ├── searchPage/       # Search page feature
    │   └── index.tsx     # Search page component
    ├── recipeList/       # Recipe list feature
    │   └── index.tsx     # Recipe list component
    └── recipeDetails/    # Recipe details feature
        └── index.tsx     # Recipe details component
```

Features Overview
Search Page (screens/searchPage)
    Recipe name search input
    Cuisine type dropdown selection
    Maximum preparation time input
    Dynamic form validation
    Responsive design
Recipe List (screens/recipeList)
    Server-side rendered recipe results
    Grid layout with recipe cards
    Recipe image and title display
    Loading states with Suspense
    Error handling
Recipe Details (screens/recipeDetails)
    Detailed recipe information
    Ingredient list
    Cooking instructions
    Preparation time and servings
    High-quality recipe images

Architecture

Feature-based Organization
The application follows a feature-based structure using the screens directory:
    Each feature is isolated in its own directory
    Components are organized by feature rather than type
    Shared utilities and types are kept in the lib directory

Server Components

The application uses React Server Components for:
    Recipe list fetching
    Recipe details fetching
    Initial page rendering

Client Components

Client-side interactivity is used for:

    Search form (screens/searchPage)
    Navigation
    User interactions


Data Flow

    User inputs search criteria in searchPage
    Client-side validation
    URL parameters updated
    Server-side data fetching in recipeList
    SSR of recipe results
    Client-side hydration

Caching Strategy

    API responses cached for 1 minute
    Static assets cached by Next.js
    Automatic page optimization

Error Handling
The application implements comprehensive error handling:

    API failure handling in lib/api.ts
    Loading states with Suspense
    User input validation in search form
    Network error recovery


Development Guidelines

Code Style
    Use TypeScript for all components
    Follow ESLint configuration
    Format with Prettier
    Use feature-based component organization

Component Structure
    Keep components in feature-specific directories
    Use index.tsx as the main component file
    Separate business logic from UI components
    Share types and utilities through lib directory

Building for Production
```bash
# Create production build
npm run build

# Start production server
npm run start
```