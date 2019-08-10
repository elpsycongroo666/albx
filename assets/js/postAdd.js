$(function () {
    $('#feature').on('change', function () {
        // let file = this.files;
        // console.log(file);
        // FileList {0: File, length: 1}0: File {name: "avatar_1.jpg", lastModified: 1564903085130, lastModifiedDate: Sun Aug 04 2019 15:18:05 GMT+0800 (中国标准时间), webkitRelativePath: "", size: 2873, …}lastModified: 1564903085130lastModifiedDate: Sun Aug 04 2019 15:18:05 GMT+0800 (中国标准时间) {}name: "avatar_1.jpg"size: 2873type: "image/jpeg"webkitRelativePath: ""__proto__: Filelength: 1__proto__: FileList
        let file = this.files[0];
        // 创建formdata对象
        let formdata = new FormData();
        formdata.append('img', file);

        $.ajax({
            url: '/uploadFile',
            type: 'post',
            data: formdata,
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

    })
})