const { Router } = require("express");
const ic = require("../controllers/instrumentController");

const instrumentRouter = Router();

instrumentRouter.get("/", ic.instrumentHomeGet);

instrumentRouter.get("/", ic.instrumentNewGet);
// instrumentRouter.post("/", ic.instrumentNewPost);

instrumentRouter.get("/", ic.instrumentEditGet);
// instrumentRouter.post("/", ic.instrumentEditPost);

instrumentRouter.get("/", ic.instrumentDeleteGet);
// instrumentRouter.post("/", ic.instrumentDeletePost);

module.exports = instrumentRouter;
