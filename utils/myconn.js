const mysql = require('mysql');
// 创建链接
const connection = mysql.createConnection({
    hots: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'baixiu',
    // 将日期格式进行转换
    dateStrings : true
})

module.exports = connection;  //别用对象的形式传{connection}
