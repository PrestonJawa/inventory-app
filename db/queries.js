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

module.exports = {
	getAllInstruments,
	deleteInstrument,
};
