const path = require('path');
const Post = require("../models/Post");

const getPosts = async(req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const posts = await Post.find()
            .limit(limit * 1)
            .skip((page - 1) * limit);
        res.json({ total: posts.length, posts });
    } catch (e) {
        console.log(e.message);
    }
};

const getPostById = async(req, res) => {
    const post = await Post.findById(req.params.id);
    res.json(post);
};

const addPost = async(req, res) => {
    try {
        const post = await new Post({
            desc: req.body.desc,
            user: req.params.id
        });
        post.save();
        res.json("Post add");
    } catch (e) {
        console.log(e.message);
    }
};

const postSave = async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        const { user } = req.body;
        const userSave = {
            user,
        };
        post.savePost.push(userSave.user);
        post.save();
        res.json("Сохранить ди ахь");
    } catch (e) {
        console.log(e.message);
    }
};

const postLike = async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        const { user } = req.body;
        const userSave = {
            user
        };
        post.like.push(userSave.user);
        post.save();
        res.json("Лайк хот йи ахь");
    } catch (e) {
        console.log(e.message);
    }
};

const addImage = async(req, res) => {
    const { image } = req.files;
    const fileName = path.resolve(__dirname, `../public/images/${image.name}`);
    const url = `/images/${  image.name}`;
    image.mv(fileName, async(e) => {
        if (e) {
            console.log(e.message);
        } else {
            const post = await Post.findById(req.params.id);

            post.img = url;

            post.save();
            res.json('file added')
        }
    })
}

module.exports = {
    getPostById,
    addPost,
    getPosts,
    postSave,
    postLike,
    addImage
};