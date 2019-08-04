const express = require('express');
const router = express.Router();
const pageController = require('./controllers/pageController');


router
    // 约定好获取前面页面的请求
    .get('/', pageController.getIndexPage)
    .get('/detail', pageController.getDetailPage)
    .get('/list', pageController.getLIstPage)
    // 后台页面请求
    .get('/admin/categories', pageController.getAdminCategoriesPage)
// 暴露
module.exports = router;