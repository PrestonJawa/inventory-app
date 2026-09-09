const queries = require("../db/queries");

exports.instrumentHomeGet = async (req, res) => {
	const instruments = await queries.getAllInstruments();
	res.render("instrument", { title: "Instruments", instruments });
};

exports.instrumentNewGet = (req, res) => {
	res.render("instrument", { title: "Add" });
};

exports.instrumentEditGet = (req, res) => {
	res.render("EditInstrument", { title: "Edit" });
};

exports.instrumentDeleteGet = (req, res) => {
	res.render("deleteInstrument", { title: "Delete", id: req.params.id });
};

exports.instrumentDeletePost = async (req, res) => {
	const deleted = await queries.deleteInstrument(req.params.id);

	// Error handling to be added

	res.redirect("/instrument");
};
