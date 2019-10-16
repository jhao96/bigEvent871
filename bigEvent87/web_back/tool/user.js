// 管理用户进行所有的接口请求操作
var user = {
    // login方法用来管理用户登录接口的操作方法
    login: function (options) {
        $.ajax({
            type: 'post',
            url: USER_LOGIN,
            data: options.data,
            success: options.callback,
            // success:function(res){
            //     options.callback.res
            // }
        })
    },
    // logout方法用来管理用户退出登录接口的操作方式
    logout:function(options){
        $.ajax({
            type:'post',
            url:USER_LOGOUT,
            success:options.callback,
        })
    },
    // getinfo用来管理用户简单信息获取接口的管理
    getinfo:function(options){
        $.ajax({
            type:'get',
            url:USER_INFO,
            success:options.callback,
        })
    },
    // getAllInfo方法用来管理用户的详细信息接口
    getAllInfo:function(options){
         $.ajax({
            type: 'get',
            url: USER_INFO_GET,
            success: options.callback,
        })
    },
    edit:function(opsions){
        $.ajax({
            type: 'post',
            url: USER_INFO_EDTI,
            data: opsions.data,//获取options中数据
            contentType: false,
            processData: false,
            success: opsions.callback,//获取options中的回调函数
        })

    }


}