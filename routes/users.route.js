const { Router } = require("express");

const router = Router();
const controllers = require("../controllers/index");

router.get("/users", controllers.getUsers);
router.get("/user/:id/posts", controllers.getAllUsers);
router.post("/user", controllers.addUser);

module.exports = router;