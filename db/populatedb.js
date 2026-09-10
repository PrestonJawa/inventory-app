#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS families (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  family VARCHAR ( 255 ) UNIQUE
);

CREATE TABLE IF NOT EXISTS instruments (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  instrument VARCHAR(100) UNIQUE,
  family_id INTEGER REFERENCES families(id),
  price NUMERIC(10, 2) NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 0
);

INSERT INTO families (family) 
VALUES
  ('Strings'),
  ('Woodwind'),
  ('Brass');

INSERT INTO instruments (instrument, family_id, price, quantity)
VALUES
  ('Viola', 1, 1100, 1),
  ('Alto Sax', 2, 1800, 1),
  ('Trumpet', 3, 900, 1);
`;

async function main() {
	console.log("seeding...");
	const client = new Client({
		connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
	});
	await client.connect();
	await client.query(SQL);
	await client.end();
	console.log("done");
}

main();
