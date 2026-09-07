const { Router } = require("express");
const cc = require("../controllers/categoryController");

const categoryRouter = Router();

categoryRouter.get("/", cc.categoryGet);
// categoryRouter.get("/:id", cc.categoryGet); hmmmmmmmmmmmmm...

categoryRouter.get("/new", cc.categoryNewGet);
// categoryRouter.post("/new", cc.categoryNewPost);

categoryRouter.get("/edit", cc.categoryEditGet);
// categoryRouter.post("/edit", cc.categoryEditPost);

categoryRouter.get("/delete", cc.categoryDeleteGet);
// categoryRouter.post("/delete".cc.categoryDeletePost);

module.exports = categoryRouter;
