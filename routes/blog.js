const express  = require('express');
const router = express.Router();
const blogController = require("../controllers/blog");

router.post('/create', blogController.createBlog);

router.get('/', blogController.getBlogs);
router.get('/all', blogController.getBlogs);

router.get('/:title', blogController.getOneBlog);

module.exports = router;