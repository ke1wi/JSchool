CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL
);

INSERT INTO users (username, email, first_name, last_name, password)
VALUES ('ke1wi', 'ke1wi.ua@gmail.com', 'Voloydymyr', 'Klimchuk', 'd817d5aa66f97a660db8776173eb86720b3ab4daaec0fcf4081373923439418e')
RETURNING *;
