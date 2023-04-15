import {pool} from '../db/dbConnection';

// transfer funds
export const transferFunds = async (req, res) => {
    const sourceAccount = req.body.sourceAccount;
    const destinationAccount = req.body.destinationAccount;
    const amount = req.body.amount;
    // Deduct the transferred amount from the source account
    await pool.query('UPDATE accounts SET balance = balance - $1 WHERE account_number = $2', [amount, sourceAccount], async (error, result) => {
        if (error) {
          res.status(500).json({ error: 'Error deducting funds from source account' });
          return;
        }
  
        // Add the transferred amount to the destination account
        await pool.query('UPDATE accounts SET balance = balance + $1 WHERE account_number = $2', [amount, destinationAccount], (error, result) => {
          if (error) {
            res.status(500).json({ error: 'Error adding funds to destination account' });
            return;
          }
  
          res.status(200).json({ message: 'Funds transferred successfully' });
        });
      });
};
