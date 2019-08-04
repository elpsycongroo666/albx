
// 获取前面的页面
function getIndexPage(req,res){
    res.render('index.ejs');
}

function getDetailPage(req,res){
    res.render('detail.ejs');
}

// 获取后台的页面






// 暴露
module.exports = {
    getIndexPage,getDetailPage
}