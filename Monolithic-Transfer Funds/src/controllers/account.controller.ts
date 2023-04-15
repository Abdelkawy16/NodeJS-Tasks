import { DatabaseService } from "../db/dbConnection";

const databaseService = new DatabaseService();

// transfer funds
export const transferFunds = async (req, res) => {
  const sourceAccount = req.body.sourceAccount;
  const destinationAccount = req.body.destinationAccount;
  const amount = req.body.amount;

  // Deduct the transferred amount from the source account
  databaseService.withdraw(sourceAccount, amount).then((result) => {
    databaseService
      .deposit(destinationAccount, amount)
      .then((result) => {
        res.status(200).json({ message: "Funds transferred successfully" });
      })
      .catch((err) => {
        res
          .status(500)
          .json({ error: "Error adding funds to destination account" });
      })
      .catch((err) => {
        res.status(500).json({ error: "Error adding funds to source account" });
      });
  });
};
