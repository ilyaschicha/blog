var express = require('express');
var router = express.Router();
const crtlIndex = require("../controllers/index");

/* GET home page. */
router.get('/', crtlIndex.getHomePage);
router.get('/about', crtlIndex.getAbout);
router.get('/contact', crtlIndex.getContact);
router.get('/filter', crtlIndex.getFilter);
router.get('/posts/:postid', crtlIndex.getBlogPost);
router.get('/404', crtlIndex.get404);
router.get('*', crtlIndex.redirect404);
module.exports = router;