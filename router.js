const express = require('express');
const router = express.Router();
const pageController = require('./controllers/pageController');

// 约定好获取前面页面的请求
router
    .get('/', pageController.getIndexPage)


// 暴露
module.exports = router;