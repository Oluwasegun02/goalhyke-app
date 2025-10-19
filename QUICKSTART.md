# GoalHyke - Quick Start Guide

## 🎯 What is GoalHyke?

GoalHyke is a goal-tracking application with:
- **Frontend**: Modern Next.js 15 app with React 19
- **Backend**: RESTful API built with Express and TypeScript

## 🌳 Branch Structure

This repository uses a **branch-based architecture** where each branch contains a complete, independent application:

```
Repository: GoalHyke
│
├── frontend branch
│   ├── Next.js 15 application
│   ├── React 19 components
│   ├── Tailwind CSS styling
│   └── TypeScript type safety
│
└── backend branch
    ├── Express.js API server
    ├── RESTful endpoints
    ├── In-memory data storage
    └── TypeScript type safety
```

## 🚀 Quick Start (Choose One)

### Option 1: Frontend Only (Standalone)

```bash
# Clone and switch to frontend
git clone <repository-url>
cd GoalHyke
git checkout frontend

# Install and run
npm install
npm run dev
```

Open http://localhost:3000 - Goals are stored in browser's localStorage.

### Option 2: Backend Only (API Server)

```bash
# Clone and switch to backend
git clone <repository-url>
cd GoalHyke
git checkout backend

# Install and run
npm install
npm run dev
```

API runs on http://localhost:3001 - Test with curl or Postman.

### Option 3: Full Stack (Frontend + Backend)

**Terminal 1 - Backend:**
```bash
git checkout backend
npm install
npm run dev
```

**Terminal 2 - Frontend:**
```bash
git checkout frontend
npm install
npm run dev
```

Access at http://localhost:3000 - Full app with API integration.

## 📋 Available Commands

### Frontend Commands

```bash
npm run dev      # Start development server (port 3000)
npm run build    # Build for production
npm start        # Run production build
npm run lint     # Run ESLint
```

### Backend Commands

```bash
npm run dev      # Start dev server with hot reload (port 3001)
npm run build    # Compile TypeScript to JavaScript
npm start        # Run production server
```

## 🔌 API Endpoints

When backend is running on http://localhost:3001:

| Method | Endpoint | Description | Example |
|--------|----------|-------------|---------|
| GET | `/api/goals` | Get all goals | `curl http://localhost:3001/api/goals` |
| GET | `/api/goals/:id` | Get single goal | `curl http://localhost:3001/api/goals/123` |
| POST | `/api/goals` | Create goal | `curl -X POST http://localhost:3001/api/goals -H "Content-Type: application/json" -d '{"title":"My Goal"}'` |
| PATCH | `/api/goals/:id` | Update goal | `curl -X PATCH http://localhost:3001/api/goals/123 -H "Content-Type: application/json" -d '{"completed":true}'` |
| DELETE | `/api/goals/:id` | Delete goal | `curl -X DELETE http://localhost:3001/api/goals/123` |

## 💡 Testing the Application

### Test Frontend (Standalone)

1. Checkout frontend branch
2. Run `npm run dev`
3. Open http://localhost:3000
4. Create a goal - it saves to localStorage
5. Refresh page - data persists
6. Mark goals complete/incomplete
7. Delete goals

### Test Backend (Standalone)

1. Checkout backend branch
2. Run `npm run dev`
3. Test with curl:

```bash
# Create a goal
curl -X POST http://localhost:3001/api/goals \
  -H "Content-Type: application/json" \
  -d '{"title":"Learn TypeScript","description":"Master TypeScript basics"}'

# Get all goals
curl http://localhost:3001/api/goals

# Update a goal (use ID from previous response)
curl -X PATCH http://localhost:3001/api/goals/[ID] \
  -H "Content-Type: application/json" \
  -d '{"completed":true}'

# Delete a goal
curl -X DELETE http://localhost:3001/api/goals/[ID]
```

### Test Full Stack

1. Start backend in Terminal 1
2. Start frontend in Terminal 2
3. Update frontend to use API (see Integration section below)
4. Create goals in the UI
5. Check data persists via API calls

## 🔗 Integration Guide

To connect frontend to backend:

1. **Start both servers** (frontend and backend)

2. **Update frontend to use API** (in `app/page.tsx`):

```typescript
// Import the API client
import { apiClient } from '@/lib/api-client';

// Replace localStorage calls with API calls
// Example:
const fetchGoals = async () => {
  const goals = await apiClient.getGoals();
  setGoals(goals);
};

const addGoal = async (title: string, description: string) => {
  const newGoal = await apiClient.createGoal({ title, description });
  setGoals([newGoal, ...goals]);
};
```

3. **Environment variables** (optional):

Frontend `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

Backend `.env`:
```
PORT=3001
CORS_ORIGIN=http://localhost:3000
```

## 📚 Documentation Files

- **README.md** - Main project overview (this file)
- **DOCS.md** - Detailed setup and configuration
- **SUMMARY.md** - Implementation details and test results

## 🛠️ Tech Stack

**Frontend:**
- Next.js 15 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4
- ESLint

**Backend:**
- Node.js
- Express 5
- TypeScript 5
- CORS
- dotenv

## ❓ Common Issues

### Port Already in Use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Kill process on port 3001
lsof -ti:3001 | xargs kill -9
```

### Cannot Find Module

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### CORS Errors

Make sure backend's `CORS_ORIGIN` matches frontend URL:
```env
CORS_ORIGIN=http://localhost:3000
```

### Data Not Persisting

- **Frontend standalone**: Uses localStorage (clears on browser data clear)
- **Backend**: Uses in-memory storage (clears on server restart)
- **Solution**: Add database (MongoDB/PostgreSQL) for persistence

## 🎓 Learning Path

1. **Start with Frontend** - See the UI and basic functionality
2. **Explore Backend** - Understand the API structure
3. **Test API** - Use curl or Postman
4. **Connect them** - Integrate frontend with backend
5. **Add Database** - Replace in-memory storage
6. **Add Auth** - User login and registration
7. **Deploy** - Put it in production

## 🚢 Deployment

### Frontend (Vercel)

```bash
# Connect to Vercel
vercel

# Set branch to 'frontend'
# Deploy
```

### Backend (Railway/Heroku)

```bash
# For Railway
railway init
railway up

# For Heroku
heroku create
git push heroku backend:main
```

## 📝 Next Steps

1. ✅ Clone repository
2. ✅ Choose a branch (frontend/backend/both)
3. ✅ Install dependencies
4. ✅ Run the application
5. ⬜ Customize for your needs
6. ⬜ Add database integration
7. ⬜ Deploy to production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

- Check DOCS.md for detailed documentation
- Check SUMMARY.md for implementation details
- Open an issue on GitHub for bugs

---

**Made with ❤️ for goal tracking enthusiasts!**
