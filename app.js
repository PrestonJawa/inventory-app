const express = require("express");
const path = require("node:path");
const app = express();
const indexRouter = require("./routes/indexRouter");
const categoryRouter = require("./routes/categoryRouter");
const instrumentRouter = require("./routes/instrumentRouter");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/category", categoryRouter);
app.use("/instrument", instrumentRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
	if (error) {
		throw error;
	}
	console.log(`Express app listening on port ${PORT}!`);
});
