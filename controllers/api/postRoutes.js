const Post = require('../models/Post');

exports.createPost = async (req, res) => {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id,
        });
        res.status(200).json(newPost);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.updatePost = async (req, res) => {
    try {
        const updatedPost = await Post.update(req.body, {
            where: { id: req.params.id },
        });
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.deletePost = async (req, res) => {
    try {
        await Post.destroy({
            where: { id: req.params.id },
        });
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (err) {
        res.status(500).json(err);
    }
};