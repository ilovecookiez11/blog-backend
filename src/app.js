const express = require('express');
const cors = require('cors');

const postRouter = require('./routes/post');
const postsRouter = require('./routes/posts')
const searchRouter = require('./routes/search')

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/post', postRouter);
app.use('/api/posts', postsRouter);
app.use('/api/search', searchRouter);

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});