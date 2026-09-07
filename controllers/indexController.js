exports.homeGet = (req, res) => {
	res.render("index", { title: "Homepage" });
};
