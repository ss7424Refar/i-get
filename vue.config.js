module.exports = {
    // publicPath: '/dist/'
    // 判断是否为生产环境，如果是改成/spa/路径
    // ngnix 修改为
    publicPath: process.env.NODE_ENV === 'production' ? '/spa/' : '/'
}
