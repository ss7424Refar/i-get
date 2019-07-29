### 关于 npm -g
1. 不加g为本地安装, 将安装包放在 ./node_modules 下（运行 npm 命令时所在的目录）,
   如果没有 node_modules 目录, 会在当前执行 npm 命令的目录下生成 node_modules目录. 
2. 加了g为全局安装, 将安装包放在 /usr/local 下或者你 node 的安装目录.


### 关于同域名多工程目录
1. vue@cli配置publicPath . 当为生产环境时候路径变为/itd-spa/
2. ngnix配置如下, 访问localhost/itd-spa/
   ```
    location /itd-spa {
        try_files $uri $uri/ /itd-spa/index.html;
    }
   ```
