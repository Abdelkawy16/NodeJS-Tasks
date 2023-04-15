require("dotenv").config();
import pg from 'pg';

const dbName = process.env.DBNAME || "FundTransfer";

export const pool = new pg.Pool({
    user: 'postgres',
    password: '.',
    host: 'localhost',
    port: '5432',
    database: `${dbName}`
  });