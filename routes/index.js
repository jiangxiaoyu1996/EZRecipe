var express = require('express');
var router = express.Router();
var userCntl = require("../controllers/user");
var mainCntl = require("../controllers/index");
var recipeCntl = require("../controllers/recipe");

/* GET home page. */

router.get('/', mainCntl.index);
router.get('/login',mainCntl.get_login);
router.post('/login', mainCntl.post_login);
router.get('/user/index', userCntl.index)
router.get('/recipes', recipeCntl.get_search);
router.post('/recipes', recipeCntl.post_search);
module.exports = router;
