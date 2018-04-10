# xxxx平台-开发架构
Emergency Commond System：[ecs-mobile地址](https://github.com/bill1012/ecs-mobile)

xxxx平台基于`framework7`+`Cordova`的hybird解决方案，framework7作为前端UI为android提供Material design，同时在ios下性能表现优异，接近原生应用效果，通过在Cordova下打包后，分别在android和ios下运行，可节省开发工作量，提高效率。

- framework7的文档见：[https://framework7.io/docs/introduction.html](https://framework7.io/docs/introduction.html)
- Cordova的文档见：[http://cordova.apache.org/docs/en/latest/](http://cordova.apache.org/docs/en/latest/)

本项目的分包结构如下，更多的Cordova项目结构说明见：
[http://cordova.apache.org/docs/en/latest/reference/cordova-cli/index.html#directory-structure](http://cordova.apache.org/docs/en/latest/reference/cordova-cli/index.html#directory-structure) 

## 1）项目分包

- hooks 
- merges  
    - android
    - ios
- platforms
- plugins
- res 
- www
    - api *与后台的通信接口写在对应的业务js上，以构建前后端分离的开发方式*
        - consultation  *视频会商*
        - contact     *通讯录*
        - decision    *辅助决策*
        - duty        *值班安排*
        - plan        *应急预案*
        - process     *突发事件*
        - resource    *资源管理*
        - system      *系统设置*
    - components *第三方手动引入的组件包*
    - css *项目样式文件*
    - fonts  *项目字体文件*
    - framework7 *前端基础文件*
        - components 
        - css
        - js
        - less
        - modules
        - pages
        - utils
    - img *图片*
    - js *项目js*
    - utils *工具js包*
    - views *前端视图（页面）*
        - consultation  *视频会商*
        - contact     *通讯录*
        - decision    *辅助决策*
        - duty        *值班安排*
        - plan        *应急预案*
        - process     *突发事件*
        - resource    *资源管理*
        - system      *系统设置*
    - index.html *入口文件、系统首页*
- config.xml
- package.json

## 2）项目运行（demo)

以`Linux`系统为例

安装Cordova

```
npm install -g cordova
```

在项目根目录下执行如下命令启动项目
```
cordova run browser
```
## 3）数据交互与安全

如果不采用vue等MVVM框架的话，所有的与后台交互的接口统一写在`api`中，以便实现前后分离，同时更好地管理代码。通过`$$.post`或者`$$.get`方式同后台交互，同时前端构建统一拦截器，对用户操作进行登录拦截、权限拦截。

- 后台通过`JWT`进行session管理，前端缓存`token`方式同后台交互，以支持多终端适配
- 前端通过统一拦截器鉴权（主要是否登录）
- 后端通过拦截器再次鉴权（主要是菜单、资源权限）
- 移动端路由在前端控制，后端通过restful方式提供数据交互接口
-  通过后端配置菜单过滤前端路由，达到前后完全分离


## 4）开发协作和代码管理

- **开发依据**： 根据需求文档和原型设计进行软件设计和开发
- **任务分配**： 通过`Teambition`（或者Jira）进行任务分配和进度管理，通过`Moxtra`（或者qq）进行沟通和协作
- **代码管理**：通过`Git`（或者svn）进行代码管理，（最好建立私有代码库或者有自己的仓库）

## 5）后端架构

后端框架暂定，推荐使用AdminEAP，地址见：[https://github.com/bill1012/AdminEAP](https://github.com/bill1012/AdminEAP)，不过鉴权方式需要由spring-shiro改成jwt。

视频会商将采用第三方的商用产品






