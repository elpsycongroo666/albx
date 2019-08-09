const express = require('express');
const router = express.Router();
// 处理页面的控制器
const pageController = require('./controllers/pageController');
// 处理业务逻辑的控制器
const userController = require('./controllers/userController');
<<<<<<< HEAD
const postController = require('./controllers/postController');
const cateController = require('./controllers/cateController')
const uploadController = require('./controllers/uploadController')

=======
const postsController = require('./controllers/postsController')
>>>>>>> 033b6497ff8c3855b01994b04e83f4277b7037e3
router
    // 约定好获取前面页面的请求
    .get('/', pageController.getIndexPage)
    .get('/detail', pageController.getDetailPage)
    .get('/list', pageController.getLIstPage)
    // 后台页面请求
    .get('/admin/categories', pageController.getAdminCategoriesPage)
    .get('/admin/comments',pageController.getAdminCommentsPage)
    .get('/admin/',pageController.getAdminIndexPage)
    .get('/admin/login', pageController.getAdminLoginPage)
    .get('/admin/nav-menus',pageController.getAdminNavMenusPage)
    .get('/admin/password-reset',pageController.getAdminPassworDresetPage)
    .get('/admin/post-add',pageController.getAdminPostAddPage)
    .get('/admin/posts',pageController.getAdminPostsPage)
    .get('/admin/profile',pageController.getAdminProfilePage)
    .get('/admin/settings',pageController.getAdminSettingsPage)
    .get('/admin/slides',pageController.getAdminSlidesPage)
    .get('/admin/users',pageController.getAdminUsersPage)

    // 业务处理路由
    .post('/login',userController.login)
<<<<<<< HEAD

    .get('/getAllPost',postController.getAllPost)

    .get('/getAllCate',cateController.getAllCate)
    // 实现文件上传
    .post('/uploadFile',uploadController.uploadFile)
    // 实现新增
    .post('/addPost',postController.addPost)

=======
    .get('/getAllPosts',postsController.getAllPosts)
>>>>>>> 033b6497ff8c3855b01994b04e83f4277b7037e3
// 暴露
module.exports = router;