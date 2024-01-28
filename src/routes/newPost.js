const express = require('express');
const router = express.Router(); // Create a router instance

// Import any necessary models or services
const postsController = require("../controllers/posts")

router.post('/', postsController.create)

module.exports = router;