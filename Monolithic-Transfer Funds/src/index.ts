require("dotenv").config();
import express from "express";
import { accountRouter } from "../routes/account.router";

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.use("/", accountRouter);
app.listen(port, () => {
  console.log(`Server on http://localhost:${port}`);
});
