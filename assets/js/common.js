
var itcase = {
    getRouterName(str) {
        // 那就先获取路由名称
        let index = str.indexOf('?')//查询参数标记
        let routerName = ''
        if (index == -1) {//说明没有参数
            routerName = str.substring(str.lastIndexOf('/') + 1)
        } else {
            routerName = str.substring(str.lastIndexOf('/') + 1, str.indexOf('?'))
        }
        return routerName;
    }
}