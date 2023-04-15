# 🚀 Welcome to your new awesome project!

Create DB then excute these queries

```
CREATE TABLE accounts (
  account_number VARCHAR(10) PRIMARY KEY,
  balance DECIMAL(10, 2)
);

INSERT INTO accounts (account_number, balance)
VALUES ('123456789', 1000.00), ('987654321', 500.00);
```



You can now run

```
npm install
```

then

```
npm run dev
```

to bundle your application

--curl -X POST -H "Content-Type: application/json" -d '{"sourceAccount": "123456789", "destinationAccount": "987654321", "amount": 100}' http://localhost:3000/transfer
