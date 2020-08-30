var express = require('express');
var router = express.Router();
const ctrlPage = require("../controllers/index");

/* GET home page. */
router.get('/', ctrlPage.getIndex);
router.get('/shop', ctrlPage.getShop);
router.get('/stats', ctrlPage.getStats);
router.get('/ticketes', ctrlPage.getTicketes);
router.get('/register', ctrlPage.getRegister);
router.post('/register', ctrlPage.registerJSON);
router.get('/example', ctrlPage.getExample);

router.get('/*', ctrlPage.render404);
module.exports = router;
