const postsmodel = require('../models/postsmodel')
function getAllPosts(req,res){
        // 通过model获取数据
    postsmodel.getAllPosts((err,data)=>{
        if(err){
            res.json({code : 400 , msg : '获取数据出错'})
        }else{
            res.json({
                code:200,
                data,
                msg:'获取成功'
            })
        }
    })
}


module.exports = {
    getAllPosts
}