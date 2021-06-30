const { Router } = require("express");

const router = Router();

const controllers = require("../controllers/index");

router.get("/posts", controllers.getPosts);
router.get("/post/:id", controllers.getPostById);
router.post("/user/:id/post", controllers.addPost);
router.post("/post/:id/save", controllers.postSave);
router.post("/post/:id/like", controllers.postLike);
router.post('/post/:id', controllers.addImage)

module.exports = router;