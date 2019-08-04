const express = require('express');
const app = express();
const router = require('./router');
app.listen(8888,()=>{
    console.log('http://127.0.0.1:8888');
})
// 处理静态资源
app.use('/assets',express.static('assets'));
app.use('/uploads',express.static('uploads'));

// 设值渲染引擎
app.set('view engine','ejs');

// 注册router中间件
app.use(router);