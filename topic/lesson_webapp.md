## WebApp和NativeApp之间的特点

1. NativeApp和WebApp都能在手机上完美显示，NativeApp使用操作系统提供的UI框架构建页面，WebApp使用HTML和CSS技术构建页面。
2. NativeApp的运行依赖设备操作系统，WebApp依赖浏览器运行。
3. NativeApp有独立的安装包，WebApp的页面需要从服务端获取并在浏览器运行。
4. NativeApp在无网络的情况下也可以单机运行，WebApp没有网络页面无法都打开。
5. NativeApp不一定需要server的支持，WebApp一定需要一个server提供页面和数据。

## 开发WebApp都需要做什么？

1. 处理路由了力。
2. 构建页面能力。
3. 操作浏览器能力。 cookie和storage是浏览器的存储技术，查阅HTML5 API文档获得。
4. 提供页面和数据能力。 server端提供页面和数据，以及存储用户操作带来的变化数据。
5. 持久化数据能力。 server端存储数据基本的能力，一般采用第三方数据库来完成。有mysql、sqlite、monggodb等。（分关系数据库和非关系数据库）

## 课程中介绍WebApp

WebApp => page & data

WebApp =(data)=> android + IOS 

WebApp ~>req <~res 函数 express(req res)

requese => { http ftp mailto ... }

协议传输data

html(构建html) 
data(add delete update show) 
Server(WebApp) express(nodejs) 中间件（中间插层）

底层 中间层 应用层


域名 备案 server

端口：0~65535
 
个人blog 个人服务器 个人域名 个人网站




