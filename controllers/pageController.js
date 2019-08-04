
// 获取前面的页面
function getIndexPage(req,res){
    res.render('index.ejs');
}

function getDetailPage(req,res){
    res.render('detail.ejs');
}

function getLIstPage(req,res){
    res.render('list.ejs');
}


// 获取后台的页面
function getAdminCategoriesPage(req, res) {
    res.render('admin/categories.ejs');
}

function getAdminCommentsPage(req, res) {
    res.render('admin/comments.ejs');
}

function getAdminIndexPage(req, res) {
    res.render('admin/index.ejs');
}

function getAdminLoginPage(req, res) {
    res.render('admin/login.ejs');
}

function getAdminNavMenusPage(req, res) {
    res.render('admin/nav-menus.ejs');
}

function getAdminPassworDresetPage(req, res) {
    res.render('admin/password-reset.ejs');
}




// 暴露
module.exports = {
    getIndexPage,getDetailPage,getLIstPage,
    getAdminCategoriesPage,getAdminCommentsPage,getAdminIndexPage,getAdminLoginPage,getAdminNavMenusPage,getAdminPassworDresetPage,
    
}