const { Router } = require("express");
const fc = require("../controllers/familyController");

const familyRouter = Router();

familyRouter.get("/", fc.familyGet);
// familyRouter.get("/:id", fc.familyGet); hmmmmmmmmmmmmm...

familyRouter.get("/new", fc.familyNewGet);
// familyRouter.post("/new", fc.familyNewPost);

familyRouter.get("/edit", fc.familyEditGet);
// familyRouter.post("/edit", fc.familyEditPost);

familyRouter.get("/delete", fc.familyDeleteGet);
// familyRouter.post("/delete".fc.familyDeletePost);

module.exports = familyRouter;
