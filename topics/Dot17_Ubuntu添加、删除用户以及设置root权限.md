# Ubuntu添加、删除用户以及设置root权限



## 一、添加用户

```
xxx:~# sudo adduser web
[sudo] password for root:
```



输入root用户的密码之后，出现如下信息

```
Adding user `web' ...
Adding new group `web' (1000) ...
Adding new user `web' (1000) with group `web' ...
Creating home directory `/home/web' ...
Copying files from `/etc/skel' ...
Enter new UNIX password:
Retype new UNIX password:
```



设置web用户的密码，两次确认之后出现如下信息

```
passwd: password updated successfully
Changing the user information for web
Enter the new value, or press ENTER for the default
	Full Name []:
	Room Number []:
	Work Phone []:
	Home Phone []:
	Other []:
Is the information correct? [Y/n] Y
```



web用户添加完成。



## 二、设置web用户权限

要让web用户拥有root权限，执行下面命令：

```
xxx:~# sudo vim /etc/sudoers
```



 修改文件如下：

```
# User privilege specification
root    ALL=(ALL:ALL) ALL
web    ALL=(ALL:ALL) ALL
```



保存退出，web用户就拥有了root权限。



## 三、删除用户

执行命令：

```
xxx:~# su root
xxx:~# userdel -r -f web
```



会提示error，不用管它，已经删除完毕！