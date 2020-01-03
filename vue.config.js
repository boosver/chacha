
module.exports = {
    lintOnSave: false,
    proxy: {
        //配置跨域
        '/api': {
            target: "http://wx.gkapay.com/api",
            ws: true,
            changOrigin: true,
            pathRewrite: {
                '^/api': '/'
            }
        }
    }

}