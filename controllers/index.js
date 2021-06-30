const { addUser, getUsers, getAllUsers } = require("./users.controller");
const {
    getPostById,
    addPost,
    getPosts,
    postLike,
    postSave,
    addImage
} = require("./posts.controller");
const { addComment, getComment } = require("./comments.controller");

module.exports = {
    addUser,
    getUsers,
    getAllUsers,
    getPostById,
    addPost,
    getPosts,
    addComment,
    getComment,
    postLike,
    postSave,
    addImage
};