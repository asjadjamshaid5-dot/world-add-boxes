# Setup Guide - BoxesWorld (Local)

## Backend
1. cd backend
2. npm install
3. copy .env.example to .env and set values (STRIPE_SECRET, DATABASE_URL, etc)
4. node index.js
5. Backend will run at http://localhost:3000

## Frontend (demo React)
1. cd frontend
2. npm install (uses parcel bundler)
3. npm start (will serve index.html)

## Database
Run the SQL file at /db/schema.sql on a Postgres instance and set DATABASE_URL accordingly.

## Postman
Import /postman/BoxesWorld.postman_collection.json and use the environment /postman/BoxesWorld.postman_environment.json
