
module.exports = {
    lintOnSave: false,
    devServer: {
        proxy: {
            //配置跨域
            '/api': {
                target: "http://wx.gkapay.com",
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': '/api'
                }
            }
        }
    }


}