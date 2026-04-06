import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

function getDatabaseUrl() {
  if (process.env.DATABASE_URL) {
    return process.env.DATABASE_URL;
  }
  const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
  if (PGHOST && PGDATABASE && PGUSER && PGPASSWORD) {
    return `postgresql://${encodeURIComponent(PGUSER)}:${encodeURIComponent(PGPASSWORD)}@${PGHOST}/${PGDATABASE}?sslmode=require`;
  }
  return null;
}

const databaseUrl = getDatabaseUrl();
if (!databaseUrl) {
  throw new Error(
    "Set DATABASE_URL or PGHOST, PGDATABASE, PGUSER, and PGPASSWORD in .env"
  );
}

export const sql = neon(databaseUrl);
