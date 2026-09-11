const queries = require("../db/queries");

exports.familyGet = async (req, res) => {
	const families = await queries.getAllFamilies();
	res.render("family", { title: "Instrument Family", families });
};

exports.familyNewGet = (req, res) => {
	res.render("addFamily", { title: "Instrument Family" });
};

exports.familyInstrumentGet = async (req, res) => {
	const instruments = await queries.getInstrumentsByFamily(req.params.id);

	res.render("instrumentsFamily", { instruments, title: "Family_NAME" });
};

exports.familyNewPost = async (req, res) => {
	const { family } = req.body;
	const result = await queries.addFamily(family);
	res.redirect("/family");
};

exports.familyEditGet = (req, res) => {
	res.render("editFamily", { title: "Instrument Family" });
};

exports.familyDeleteGet = (req, res) => {
	res.render("deleteFamily", { title: "Instrument Family", id: req.params.id });
};

exports.familyDeletePost = async (req, res) => {
	const result = await queries.deleteFamily(req.params.id);
	res.redirect("/family");
};
