import {DatabaseService} from '../db/dbConnection';

const databaseService = new DatabaseService();

// check if account exists
export const checkAccountsExist =  async (req, res, next)=> {
    databaseService.getMatchedAccounts(req.body.sourceAccount, req.body.destinationAccount).then((result) => {
        if (result.rows.length > 1) {
            res.locals.balance = (result.rows as any[]).find(e=>e.account_number === req.body.sourceAccount).balance;
            console.log('Accounts exist');
            next();
        } else {
            return res.status(404).send({
                message: 'Account doesn\'t exist'
            });
        }
    }).catch((err) => {
        console.log(err);
        return res.status(500).send({
            message: 'Error retrieving account'
        });
    });
}

// check if account has enough funds
export const checkBalance = (req, res, next)=> {
    const balance = res.locals.balance;
    const amount = req.body.amount;
    if (balance < amount) {
        return res.status(400).send({
            message: 'Insufficient funds in source account'
        });
    }
    next();
}
