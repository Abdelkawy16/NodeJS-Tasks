# This is simple Monolotic Application!
This application implements financial transaction from one account to another

## Features
This Application has one REST API to transfer money from one account to another

## Technologies Used
- ExpressJS
- PostgreSQL
- NodeJS

## Get Started
- Clone this repository to your local machine.

- Create DB FundTransfer then excute these queries

```
CREATE TABLE accounts (
  account_number VARCHAR(10) PRIMARY KEY,
  balance DECIMAL(10, 2)
);

INSERT INTO accounts (account_number, balance)
VALUES ('123456789', 1000.00), ('987654321', 500.00);
```

- You can now run

```
npm install
```
to install packages

then

```
npm run dev
```

to bundle your application
