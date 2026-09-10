const { familyDeleteGet } = require("../controllers/familyController");
const pool = require("./pool");

async function getAllInstruments() {
	const { rows } = await pool.query(`
		SELECT instruments.*, families.family AS family
		FROM instruments
		JOIN families ON instruments.family_id = families.id
    `);
	return rows;
}

async function deleteInstrument(id) {
	const { rows } = await pool.query(
		`
		DELETE FROM instruments 
		WHERE id=$1
	`,
		[id],
	);

	return rows[0];
}

async function getAllFamilies() {
	const { rows } = await pool.query(`
		SELECT * FROM families
	`);

	return rows;
}

async function addFamily(family) {
	const { rows } = await pool.query(
		`
		INSERT INTO families (family)
		VALUES ($1)
	`,
		[family],
	);

	return rows[0];
}

async function deleteFamily(id) {
	await pool.query("DELETE FROM instruments WHERE family_id = $1", [id]);

	const { rows } = await pool.query(
		`
		DELETE FROM families 
		WHERE id=$1
	`,
		[id],
	);

	return rows[0];
}

module.exports = {
	getAllInstruments,
	deleteInstrument,
	getAllFamilies,
	addFamily,
	deleteFamily,
};
