module.exports = {
    //输出文件目录, 这样不用重新命名, itd-spa为项目名字
    outputDir: 'itd-spa',
    // 判断是否为生产环境，如果是改成/spa/路径
    publicPath: process.env.NODE_ENV === 'production' ? '/itd-spa/' : '/',
    configureWebpack:{  // 覆盖webpack默认配置的都在这里
        resolve:{   // 配置解析别名
            alias:{
                vue$:'vue/dist/vue.esm.js'
            }
        }
    }
}
