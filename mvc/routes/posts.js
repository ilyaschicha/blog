var express = require('express');
var router = express.Router();

const ctrlPosts = require("../controllers/post");

router.get('/', ctrlPosts.getPosts);
router.get('/:postid', ctrlPosts.getPost);












module.exports = router;