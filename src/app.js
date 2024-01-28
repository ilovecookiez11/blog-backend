const express = require('express');
const newPostRouter = require('./routes/newPost');
const getAllPosts = require('./routes/posts')

const app = express();

app.use(express.json());


app.use('/api/post', newPostRouter);
app.use('/api/posts', getAllPosts);

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});