// create injectable class for database
export class DatabaseService {
    private connection: any;
    constructor(connection) {
        this.connection = connection;
    }
    private async excuteQuery(query:string, params: any[]): Promise<any> {
        return await this.connection.query(query, params);
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