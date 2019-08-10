# i-get (mini样机管理系统)


### 界面

![登录界面](/home/refar/WebstormProjects/i-get/doc/img/login.png)

![首页](/home/refar/WebstormProjects/i-get/doc/img/home.png)

![主界面](/home/refar/WebstormProjects/i-get/doc/img/main.png)



### 接口

1. 因为是单页面所以比较简单地写在一个Repo: `ats-rebuild`下的一个[MachineSever.php](https://github.com/ss7424Refar/ats-rebuild/blob/master/application/services/controller/MachineSever.php)文件中



### 打包

1. npm run build . 会生成/itd-spa文件夹



### 部署ngnix

`端口可以自定，或者默认80`

```
location /itd-spa {
    try_files $uri $uri/ /itd-spa/index.html;
}
```