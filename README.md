# Inventory Management App

A full-stack inventory/product management app built with the PERN stack.

## Highlights

- PERN stack (PostgreSQL, Express, React, Node.js)
- TailwindCSS + DaisyUI frontend
- Global state management with Zustand
- API security and rate limiting with Arcjet
- CRUD operations for products

## Tech Stack

- Backend: Node.js, Express, Neon Postgres, Arcjet
- Frontend: React, Vite, TailwindCSS, DaisyUI, Zustand

## Environment Setup

Create a `.env` file in the project root:

```env
PORT=3000
DATABASE_URL=postgresql://<user>:<password>@<host>/<database>?sslmode=require&channel_binding=require
ARCJET_KEY=your_arcjet_key
ARCJET_ENV=development
```

`DATABASE_URL` is recommended.  
Alternatively, you can use `PGUSER`, `PGPASSWORD`, `PGHOST`, and `PGDATABASE`.

## Install Dependencies

```bash
npm install
cd frontend
npm install
```

## Run Locally

Backend (from project root):

```bash
npm run dev
```

Frontend (new terminal):

```bash
cd frontend
npm run dev
```

## App URLs

- Frontend: `http://localhost:5174`
- Backend API: `http://localhost:3000`
- Products endpoint: `http://localhost:3000/api/products`