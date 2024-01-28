const Post = require('../models/posts')

exports.create = async (req, res) => {
    try {
        const { title, author, content } = req.body;
        const newPostId = await Post.create(title, author, content);
        res.status(201).json({ message: 'Post created successfully', id: newPostId });
    } catch (error) {
        console.error('Error in controller:', error);
        res.status(501).json({ error: '500 Server error'});
    }
}

exports.getAllPosts = async (req, res) => {
    try {
        const myPosts = await Post.getAllPosts();
        res.status(201).json(myPosts)
    } catch (error){
        console.error('Error in controller:', error);
        res.status(501).json({ error: '500 Server error'});
    }
}

exports.getPostById = async (req, res) => {
    try {
        const myPost = await Post.getPostById(req.params.id);
        if(myPost.length) {
            res.status(201).json(myPost)
        } else {
            res.status(404).json({ error: '404 Not Found'})
        }
    } catch (error){
        console.error('Error in controller:', error);
        res.status(501).json({ error: '500 Server error'});
    }
}

exports.search = async (req, res) => {
    try {
        const query = req.query;
        const myPosts = await Post.search(query);
        if(myPosts.length) {
            res.status(201).json(myPosts)
        } else {
            res.status(404).json({ error: '404 Not Found'})
        }
    } catch (error){
        console.error('Error in controller:', error);
        res.status(501).json({ error: '500 Server error'});
    }
}