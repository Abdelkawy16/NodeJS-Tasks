import express from 'express';
import { checkAccountsExist, checkBalance } from '../services/accout.service';
import { transferFunds } from '../controllers/account.controller';

export const accountRouter = express.Router();

accountRouter.post('/transfer', checkAccountsExist, checkBalance, transferFunds);