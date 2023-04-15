require("dotenv").config();
import pg from 'pg';

const dbName = process.env.DBNAME || "FundTransfer";

const pool = new pg.Pool({
    user: 'postgres',
    password: '.',
    host: 'localhost',
    port: '5432',
    database: `${dbName}`
  });

export class DatabaseService {
    constructor() {
    }
    private async excuteQuery(query:string, params: any[]): Promise<any> {
        return await pool.query(query, params);
    }
    getMatchedAccounts(sourceAccount: any, destinationAccount: any): Promise<any> {
        return this.excuteQuery('SELECT * FROM accounts WHERE account_number in ($1, $2)', [sourceAccount, destinationAccount])
    }
    withdraw(accountNumber: any, amount: any): Promise<any> {
        return this.excuteQuery('UPDATE accounts SET balance = balance - $1 WHERE account_number = $2', [amount, accountNumber])
    }
    deposit(accountNumber: any, amount: any): Promise<any> {
        return this.excuteQuery('UPDATE accounts SET balance = balance + $1 WHERE account_number = $2', [amount, accountNumber])
    }
};