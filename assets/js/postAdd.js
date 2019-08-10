$(function () {
<<<<<<< HEAD
    $('#feature').on('change', function () {
        // let file = this.files;
        // console.log(file);
        // FileList {0: File, length: 1}0: File {name: "avatar_1.jpg", lastModified: 1564903085130, lastModifiedDate: Sun Aug 04 2019 15:18:05 GMT+0800 (中国标准时间), webkitRelativePath: "", size: 2873, …}lastModified: 1564903085130lastModifiedDate: Sun Aug 04 2019 15:18:05 GMT+0800 (中国标准时间) {}name: "avatar_1.jpg"size: 2873type: "image/jpeg"webkitRelativePath: ""__proto__: Filelength: 1__proto__: FileList
        let file = this.files[0];
        // 创建formdata对象
        let formdata = new FormData();
        formdata.append('img', file);

=======
    // 一选择文件就实现文件的上传操作
    $('#feature').on('change', function () {
        let file = this.files[0];
        // 创建formdata对象
        let formdata = new FormData();
        // 在formdata中追加数据
        formdata.append('img', file);
        // formdata.append('username', '名字叫:jacklove');
        // 4.使用ajax发送请求
>>>>>>> 1fca373ee8451d2df8e9adc44e7765227035152e
        $.ajax({
            url: '/uploadFile',
            type: 'post',
            data: formdata,
<<<<<<< HEAD
            processData: false,
            contentType: false,
            dataType: 'json',
            success: function (res) {
                console.log(res);
                if (res.code == 200) {
                    // 预览效果
                    $('.thumbnail').attr('src','/uploads/' + res.img).show();
                    // 设置隐藏域
                    $('[name="feature"]').val(res.img);
                } else {
                    $('.alert-danger > span').text(res.msg);
                    $('.alert-danger').fadeIn(300).dalay(2000).fadeOut(300);
                }
            }
        })

=======
            contentType: false,
            processData: false,
            dataType: 'json',
            success: function (res) {
                // console.log(res);
                if (res.code == 200) {
                    // 实现预览效果
                    $('.thumbnail').attr('src', '/uploads/' + res.img).show();
                    // 将图片名称存储到指定的隐藏域中
                    $('[name="feature"]').val(res.img);
                }else{
                    $('.alert-danger > span').text(res.msg)
                    $('.alert-danger').fadeIn(500).delat(3000).fadeOut(500);
                }
            }
        })
    })

    // 获取分类
    $.ajax({
        type : 'get',
        url : '/getAllCate',
        dataType : 'json',
        success : function(res){
            console.log(res);
            let str = `<option value="all">所有分类</option>`
            for(let i = 0; i < res.data.length; i++){
                str += `<option value="${res.data[i].id}">${res.data[i].name}</option>`
            }
            $('#category').html(str);
        }
    })

    // 创建ckeditor富文本域控件替换页面中的textarea
    // 它会创建一个富文本框对象
    CKEDITOR.replace('content')

    $('.btnsave').on('click',function(){
        // 同步数据到textarea
        CKEDITOR.instances.content.updateElement()
        // serialize;可以直接获取当前表单中所有拥有name属性的表单元素的value值
        // var data = $(form).serialize()
        console.log($('form').serialize())
        $.ajax({
            type : 'post',
            url : '/addPost',
            data : $('form').serialize(),
            dataType : 'json',
            success : function(res){
                if(res.code == 200){
                    // 提示
                    alert(res.msg);
                    // 跳转
                    location.href = '/admin/posts'
                }else{
                    alert(res.msg);
                }
            }
        })
>>>>>>> 1fca373ee8451d2df8e9adc44e7765227035152e
    })
})