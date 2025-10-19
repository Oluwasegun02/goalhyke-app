# GoalHyke - Frontend

Set your Goal and make it Happen

This is the frontend application for GoalHyke, built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- 🎯 Create and manage goals
- ✅ Mark goals as completed
- 🗑️ Delete goals
- 💾 Local storage persistence
- 🎨 Modern, responsive UI with Tailwind CSS
- ⚡ Built with Next.js 15 and React 19

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository and switch to the frontend branch:
```bash
git checkout frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file (optional, for backend integration):
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Root layout component
│   ├── page.tsx         # Home page with goal management
│   └── globals.css      # Global styles
├── lib/                 # Utility libraries
│   └── api-client.ts    # API client for backend integration
├── public/              # Static assets
├── .env.example         # Environment variables template
├── next.config.ts       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies

```

## Backend Integration

The app is designed to work with the GoalHyke backend API. To connect to the backend:

1. Ensure the backend server is running (see backend branch)
2. Update `NEXT_PUBLIC_API_URL` in `.env.local` to point to your backend API

The API client in `lib/api-client.ts` provides methods for:
- `getGoals()` - Fetch all goals
- `getGoal(id)` - Fetch a single goal
- `createGoal(data)` - Create a new goal
- `updateGoal(id, data)` - Update a goal
- `deleteGoal(id)` - Delete a goal

## Technologies Used

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting

## Development

The application currently uses localStorage for data persistence. To integrate with the backend API:

1. Uncomment the API client usage in `app/page.tsx`
2. Replace localStorage calls with API client methods
3. Add error handling and loading states

## License

ISC

