const { Router } = require("express");
const ic = require("../controllers/instrumentController");

const instrumentRouter = Router();

instrumentRouter.get("/", ic.instrumentHomeGet);

instrumentRouter.get("/new", ic.instrumentNewGet);
// instrumentRouter.post("/", ic.instrumentNewPost);

instrumentRouter.get("/", ic.instrumentEditGet);
// instrumentRouter.post("/", ic.instrumentEditPost);

instrumentRouter.get("/:id/delete", ic.instrumentDeleteGet);
instrumentRouter.post("/:id/delete", ic.instrumentDeletePost);

module.exports = instrumentRouter;
