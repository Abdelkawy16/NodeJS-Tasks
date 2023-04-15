import {pool} from '../db/dbConnection';

// check if account exists
export const checkAccountExists =  async (req, res, next)=> {
    await pool.query('SELECT * FROM accounts WHERE account_number =$1', [req.body.sourceAccount], async (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send({
                message: 'Error retrieving account'
            });
        } else {
            if (await result.rows.length > 0) {
                res.locals.balance = await result.rows[0].balance;
                console.log('Account exists');
                next();
            } else {
                return res.status(404).send({
                    message: 'Account doesn\'t exist'
                });
            }
        }
    });
}

// check if account has enough funds
export const checkAccountFunds = (req, res, next)=> {
    const balance = res.locals.balance;
    const amount = req.body.amount;
    if (balance < amount) {
        return res.status(400).send({
            message: 'Insufficient funds in source account'
        });
    }
    next();
}

