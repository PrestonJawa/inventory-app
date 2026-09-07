const pool = require("./pool");

async function getAllFamilies() {
	const { rows } = await pool.query("SELECT * FROM families");
	return rows;
}

module.exports = {
	getAllFamilies,
};
