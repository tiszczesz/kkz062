-- SQLite
CREATE TABLE products(
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    price DECIMAL(10,2),
    date DATE
);
INSERT INTO products(name,price,date)
VALUES('marchewka',23.99,'2023-12-12');
INSERT INTO products(name,price,date)
VALUES('pietruszka',12.99,'2023-09-23');
INSERT INTO products(name,price,date)
VALUES('ziemniaki',13.99,'2023-08-09');
INSERT INTO products(name,price,date)
VALUES('jabłka',12.99,'2024-02-12');
SELECT strftime('%Y:%m',date) FROM products;