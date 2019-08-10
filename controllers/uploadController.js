<<<<<<< HEAD
// 这个模专门来实现文件上传功能
const formidable = require('formidable');
const path = require('path');

exports.uploadFile = (req, res) => {

    // 创建文件上传对象
    var form = new formidable.IncomingForm();
    //这个设不设置 都与文件上传无关 只是这个模块也可以用来传递普通键值对
    form.encoding = 'utf-8';
    // 设置文件存储路径
    form.uploadDir = __dirname + "/../uploads";
    // 设置保留文件拓展名
    form.keepExtensions = true;
    // 调用方法实现文件上传
    // req：请求报文，传递的文件数据就是在请求报文的 请求体中的
    // err：错误信息对象
    // fields：普通键值对
    // files：文件上传完成之后的相关信息，主要是存储上传成功之后的信息
    form.parse(req, function (err, fields, files) {
        if(err){
            res.json({
                code : 400,
                msg : '文件上传失败'
            })
        }else{
            // 文件上传成功之后，我们要将图片的路径返回 以便二次请求
            //  console.log(files)--> {img: File {...}}
            // console.log(files.img.path);F:\lianxi\albx\8.10(2)\uploads\upload_ca630550e6bc84a722936dc0263996bf.jpg
            let imgDir = path.basename(files.img.path);
            res.json({
                code : 200,
                msg : '文件获取成功',
                img:imgDir
            })
        }
    });
=======
// 这个模块专门来实现文件上传功能
const formidable = require('formidable')
var path = require('path')

exports.uploadFile = (req,res) => {
    // 使用Formidable来实现文件上传
    // 1.创建文件上传对象
    var form = new formidable.IncomingForm()
    // 2.设置编码:这个编码的设置与文件上传没有本质的关系，只不过formidable可以传递普通的键值对，所以需要设置对这些参数的编码
    form.encoding = 'utf-8'
    // 3.设置文件存储目录
    form.uploadDir = __dirname + '/../uploads'
    // 4.设置保留文件扩展名
    form.keepExtensions = true
    // 5.调用方法实现文件上传 
    // req:请求报文，传递的文件数据就是在请求报文 的请求体中
    // 回调函数的三个参数
    // Err:错误信息对象
    // fields:普通键值对
    // files：文件上传完成之后的相关信息，主要是存储上传成功之后的信息
    form.parse(req,(err,fields,files) =>{
        if(err){
            res.json({
                code:400,
                msg:'文件上传失败'
            })
        }else{
            // console.log(fields)
            // console.log(files.img.path)
            var imgname = path.basename(files.img.path)
            // console.log(imgname)
            res.json({
                code:200,
                msg:'文件上传成功',
                img:imgname
            })
        }
    })
>>>>>>> 1fca373ee8451d2df8e9adc44e7765227035152e
}