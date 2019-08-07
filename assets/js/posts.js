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
})