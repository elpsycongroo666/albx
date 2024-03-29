<<<<<<< HEAD
$(function () {
    var pageNum = 1;
    var pageSize = 2;

    function init(search) {
        $.ajax({
            url: '/getAllPost',
            type: 'get',
            data: {
                pageNum: pageNum,
                pageSize: pageSize,
                ...search
            },
            success: function (result) {
                console.log(result);
                // console.log(res.data);
                // let result = res.data
                // let result = res.data
                // console.log(result);
                let html = template('postListTemp', result.data);
                $('tbody').html(html);
                // 生成分页结构
                setPagenation(Math.ceil(result.data.total / pageSize));
            }
        })
    }

    init();
    // 实现分页结构
    function setPagenation(total) {
        // 初始化
        $('.pagination').bootstrapPaginator({//因为bootstrap值提供了样式和结构 没有提供功能，所以要引用插件来实现功能 引入js文件
            bootstrapMajorVersion: 3,
            currentPage: pageNum,//当前页码
            totalPages: total,//总页数
            onPageClicked: function (event, originalEvent, type, page) {
                console.log(page);
                // page就是你当前想获取数据的页码
                // 修改全局 pageNum
                pageNum = page
                // 重新调用加载数据的方法
                init();
            }
        })
    }

    // 加载分类数据
    $.ajax({
        type:'get',
        url:'/getAllCate',
        dataType:'json',
        success:function(res){
            console.log(res)
            // 生成分类下拉列表动态结构
            var str = '<option value="all">所有分类</option>'
            for(var i = 0; i< res.data.length;i++){
                str += `<option value="${res.data[i].id}">${res.data[i].name}</option>`
            }
            $('.cateSelector').html(str)
        }
    })

    // 实现筛选功能
    $('.btn-search').on('click',function(){
        // 收集数据
        var obj = {
            cate : $('.cateSelector').val(),
            status : $('.statuSelector').val()
        }
        console.log(obj);
        // 发起ajax请求
        init(obj);
    })

=======
$(function(){
    $.ajax({
        url:'/getAllPosts',
        type:'get',
        success : function(res){
            let html = template('getAllPosts',res);
            console.log(res);
            $('tbody').html(html);
        }
    })
>>>>>>> 033b6497ff8c3855b01994b04e83f4277b7037e3
})