
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






// 暴露
module.exports = {
    getIndexPage,getDetailPage,getLIstPage,
    getAdminCategoriesPage
}