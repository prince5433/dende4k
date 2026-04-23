# Full Stack Internship Assignment

This repository contains a full-stack web application built to fulfill the internship assignment requirements.

## Tech Stack
- **Frontend**: React (Vite), Tailwind CSS, React Router, Axios
- **Backend**: Node.js, Express.js, JSON Web Tokens (JWT), bcrypt
- **Database**: MongoDB (Mongoose)

## Features
- Real user authentication (Login & Signup)
- Protected Dashboard Route
- Modern, responsive UI with Tailwind CSS
- RESTful API architecture

## Local Development Setup

### 1. Database Setup
Make sure you have MongoDB running locally, or update the `MONGO_URI` in `backend/.env` with your MongoDB Atlas connection string.

### 2. Backend
```bash
cd backend
npm install
npm start
```
*(You can use `node server.js` to start the backend on port 5000)*

### 3. Frontend
```bash
cd frontend
npm install
npm run dev
```
*(The frontend will start on http://localhost:5173)*

## Deployment Instructions
1. **Frontend**: Deploy the `frontend` folder to Vercel or Netlify. Make sure to update the `axios.post` URLs in the frontend code to point to your deployed backend URL.
2. **Backend**: Deploy the `backend` folder to Render, Railway, or Heroku. Ensure you set the `MONGO_URI` and `JWT_SECRET` environment variables on the hosting platform.
3. **Database**: Use MongoDB Atlas for a free, hosted database.

## GitHub Submission
To push this code to your GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```
