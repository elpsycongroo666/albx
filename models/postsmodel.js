// 创建数据库连接
const mysql = require('mysql');
const connection = mysql.createConnection({
    hots : '127.0.0.1',
    user : 'root',
    password : 'root',
    database : 'baixiu',
    // 将日期格式转换
    dateStrings :true
})

function getAllPosts(callback){
    let sql = `select posts.*,users.nickname,categories.name
    from posts
    join users on posts.user_id = users.id
    join categories on posts.category_id = categories.id`;
    connection.query(sql,(err,result)=>{
        if(err){
            callback(err);
        }else{
            callback(null,result)
        }
    })
}


module.exports = {
    getAllPosts
}