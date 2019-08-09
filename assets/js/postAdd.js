$(function () {
    // 一选择文件就实现文件的上传操作
    $('#feature').on('change', function () {
        let file = this.files[0];
        // 创建formdata对象
        let formdata = new FormData();
        // 在formdata中追加数据
        formdata.append('img', file);
        // formdata.append('username', '名字叫:jacklove');
        // 4.使用ajax发送请求
        $.ajax({
            url: '/uploadFile',
            type: 'post',
            data: formdata,
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
    })
})