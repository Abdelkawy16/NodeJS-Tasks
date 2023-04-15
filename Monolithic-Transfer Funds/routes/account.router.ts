import express from 'express';
import { checkAccountExists, checkAccountFunds } from '../middleware/accout.middleware';
import { transferFunds } from '../controllers/account.controller';

export const accountRouter = express.Router();

accountRouter.post('/transfer', checkAccountExists, checkAccountFunds, transferFunds);