module.exports = {
    devServer: {
        disableHostCheck: true,
        proxy: {
            '/xuegao': {
                target: 'http://127.0.0.1:12000',
                changeOrigin: true,
                pathRewrite: {
                    '^/xuegao': ''
                },
                ws: false
            }
            //   '/ws': {
            //     target: 'http://localhost:6767',
            //     ws: true,
            //     changeOrigin: true,
            //     pathRewrite:{
            //         '^/ws':''
            //     }
            //   },
            //   '/oss': {
            //     target: 'http://192.168.42.131:9000',
            //     changeOrigin: true,
            //     pathRewrite:{
            //         '^/oss':'/oss'
            //     }
        }
    }
}