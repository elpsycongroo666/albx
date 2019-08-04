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
    .get('/admin/comments',pageController.getAdminCommentsPage)
    .get('/admin/index',pageController.getAdminIndexPage)
    .get('/admin/login', pageController.getAdminLoginPage)
    .get('/admin/navMenus',pageController.getAdminNavMenusPage)
    .get('/admin/passworDreset',pageController.getAdminPassworDresetPage)
    .get('/admin/postAdd',pageController.getAdminPostAddPage)
    .get('/admin/posts',pageController.getAdminPostsPage)
    .get('/admin/profile',pageController.getAdminProfilePage)
    .get('/admin/settings',pageController.getAdminSettingsPage)
    .get('/admin/slides',pageController.getAdminSlidesPage)
    .get('/admin/users',pageController.getAdminUsersPage)
// 暴露
module.exports = router;