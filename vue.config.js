module.exports = {
    devServer: {
        disableHostCheck: true,
        proxy: {
            // 代理 websocket 请求
            '/ws': {
                // 目标服务器的 ip 端口
                target: 'http://localhost:6767',
                // 是否要代理 websocket 节点
                ws: true,
                // 需要虚拟主机站点
                changeOrigin: true,
                pathRewrite: {
                    '^/ws': ''
                }
            }
        }
    }
}