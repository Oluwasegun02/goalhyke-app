# GoalHyke - Project Documentation

Set your Goal and make it Happen

## Project Overview

GoalHyke is a goal-tracking application with a **separate frontend and backend** architecture. The project uses two main branches:

1. **frontend** - Next.js application
2. **backend** - Node.js/Express API

## Branch Structure

### Frontend Branch (`frontend`)

Contains a complete Next.js application with:
- Modern React UI with Tailwind CSS
- Goal creation, editing, and deletion
- Local storage for data persistence
- TypeScript for type safety
- API client ready for backend integration

**Tech Stack:**
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- ESLint

### Backend Branch (`backend`)

Contains a RESTful API built with:
- Express.js server
- Goal CRUD operations
- CORS enabled for frontend
- In-memory data storage (easily replaceable)
- TypeScript for type safety

**Tech Stack:**
- Node.js
- Express
- TypeScript
- CORS
- dotenv

## Getting Started

### Working with Frontend

```bash
# Switch to frontend branch
git checkout frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Frontend will run on: `http://localhost:3000`

### Working with Backend

```bash
# Switch to backend branch
git checkout backend

# Install dependencies
npm install

# Start development server
npm run dev

# Build TypeScript
npm run build

# Start production server
npm start
```

Backend will run on: `http://localhost:3001`

## Running Both Applications

To run the full application:

1. Open two terminal windows

2. In terminal 1 (Backend):
```bash
git checkout backend
npm install
npm run dev
```

3. In terminal 2 (Frontend):
```bash
git checkout frontend
npm install
npm run dev
```

4. Access the application at `http://localhost:3000`

## API Integration

The frontend includes an API client (`lib/api-client.ts`) that can be used to connect to the backend.

To enable backend integration:

1. Ensure both servers are running
2. Frontend will automatically connect to `http://localhost:3001/api`
3. Update the frontend code to use the API client instead of localStorage

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/goals` | Get all goals |
| GET | `/api/goals/:id` | Get a single goal |
| POST | `/api/goals` | Create a new goal |
| PATCH | `/api/goals/:id` | Update a goal |
| DELETE | `/api/goals/:id` | Delete a goal |

## Project Features

### Current Features

- ✅ Create goals with title and description
- ✅ Mark goals as completed
- ✅ Delete goals
- ✅ Persistent storage (localStorage in frontend)
- ✅ RESTful API with full CRUD operations
- ✅ CORS enabled for frontend-backend communication
- ✅ TypeScript for type safety
- ✅ Responsive UI design

### Future Enhancements

- 🔄 Database integration (MongoDB/PostgreSQL)
- 🔄 User authentication
- 🔄 Goal categories and tags
- 🔄 Progress tracking and statistics
- 🔄 Due dates and reminders
- 🔄 Sharing goals with others

## Development Workflow

### Making Changes to Frontend

```bash
git checkout frontend
# Make your changes
git add .
git commit -m "Your commit message"
git push origin frontend
```

### Making Changes to Backend

```bash
git checkout backend
# Make your changes
git add .
git commit -m "Your commit message"
git push origin backend
```

## Environment Variables

### Frontend (.env.local)

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

### Backend (.env)

```env
PORT=3001
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

## Deployment

### Frontend (Vercel)

1. Connect your repository to Vercel
2. Set the branch to `frontend`
3. Add environment variable: `NEXT_PUBLIC_API_URL`
4. Deploy

### Backend (Heroku/Railway/DigitalOcean)

1. Choose your deployment platform
2. Set the branch to `backend`
3. Add environment variables
4. Deploy

## Troubleshooting

### Port Already in Use

If you get "Port already in use" errors:

```bash
# Kill process on port 3000 (frontend)
lsof -ti:3000 | xargs kill -9

# Kill process on port 3001 (backend)
lsof -ti:3001 | xargs kill -9
```

### CORS Issues

Ensure the backend's `CORS_ORIGIN` matches your frontend URL.

### Module Not Found

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## Contributing

1. Choose the appropriate branch (frontend/backend)
2. Make your changes
3. Test thoroughly
4. Create a pull request

## License

ISC

## Support

For issues or questions, please open an issue on GitHub.

---

**Happy Goal Setting! 🎯**
