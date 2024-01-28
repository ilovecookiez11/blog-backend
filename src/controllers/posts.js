const Post = require('../models/posts')

exports.create = async (req, res) => {
    try {
        console.log("my body: ", req.body)
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