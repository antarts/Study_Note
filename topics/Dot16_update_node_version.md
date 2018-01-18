## Nvm使用指南

nvm(Node Version Manager)是一款node.js版本管理软件，支持io.js。

具体安装方法参考[Github](https://github.com/creationix/nvm#installation)

### 安装
* nvm install node = nvm install stable - 安装最新稳定版node.js
* nvm install unstable - 安装最新版node.js （不稳定版）
* nvm install iojs - 安装最新版io.js
* nvm install $version - 安装指定版本

### 删除
* nvm uninstall $version - 删除指定版本

### 查看
* nvm ls - 查看本地安装的版本
* nvm ls-remote - 查看所有可以安装的版本

### 使用
* nvm use $version - 使用指定版本

### 默认版本
* nvm default $version - 指定默认版本



[参考文章](http://www.cnblogs.com/zhaoyao91/p/4569539.html)