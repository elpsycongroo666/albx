const postmodel = require('../models/postmodel')
const moment = require('moment');
function getAllPost(req,res){
    // 我们要获得pageSize 和 pageNum
    let obj = req.query;
    // 调用数据模块
    postmodel.getAllPost(obj,(err,data)=>{
        if(err){
            res.json({code : 400, msg : '数据查询失败'})
        }else{
            // 为了日期的格式 改为 YYYY-MM-DD HH-mm-ss的格式
            // for(let i = 0; i < result.length; i++){
            //     // moment() 如果没有传递参数，就获取当前日期，如果需要转换成指定的日期，则需要传递参数
            //     // format：进行格式化，里面进行自定义的格式化设置
            //     result[i].created = moment(result[i].created).format('YYYY-MM-DD HH-mm-ss')
            // }
            res.json({
                code : 200,
                msg : '查询数据成功',
                data : data
            })
        }
    })
}


module.exports = {
    getAllPost
}