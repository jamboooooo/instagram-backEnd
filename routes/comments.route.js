const { Router } = require("express");

const router = Router();
const controllers = require("../controllers/index");

router.get("/post/:id/comment", controllers.getComment);
router.post("/post/:id/comment", controllers.addComment);

module.exports = router;