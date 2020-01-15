
module.exports = {
    lintOnSave: false,
    devServer: {
        proxy: {
            //配置跨域
            '/api': {
                target: "https://wx.gkapay.com",
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': '/api'
                }
            }
        }
    }


}