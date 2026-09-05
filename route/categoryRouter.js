const { Router } = require("express");
const cc = require("../controller/categoryController");

const categoryRouter = Router();

categoryRouter.get("/", cc.homeGet);

categoryRouter.get("/new", cc.newGet);
categoryRouter.post("/new", cc.newPost);

categoryRouter.post("/edit", cc.editGet);
categoryRouter.post("/edit", cc.editPost);

categoryRouter.post("/delete".cc.deleteGet);
categoryRouter.post("/delete".cc.deletePost);

categoryRouter.get("/:id");

module.exports = categoryRouter;
