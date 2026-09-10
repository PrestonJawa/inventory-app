const { Router } = require("express");
const fc = require("../controllers/familyController");

const familyRouter = Router();

familyRouter.get("/", fc.familyGet);

familyRouter.get("/new", fc.familyNewGet);
familyRouter.post("/new", fc.familyNewPost);

familyRouter.get("/:id/edit", fc.familyEditGet);
// familyRouter.post("/edit", fc.familyEditPost);

familyRouter.get("/:id/delete", fc.familyDeleteGet);
familyRouter.post("/:id/delete", fc.familyDeletePost);

module.exports = familyRouter;
