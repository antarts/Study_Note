## docker image删不掉的解决办法

执行: docker images 查看所有镜像；

```
✘ antarts@Antarts-MacBook-Pro ⮀ ~/xxx ⮀ ⭠ master± ⮀ docker images
REPOSITORY                  TAG                 IMAGE ID            CREATED             SIZE
<none>                      <none>              78bc427f4ef9        5 minutes ago       676MB
node                        carbon              f9e6e2b63af8        16 hours ago        676MB
hello-world                 latest              f2a91732366c        2 weeks ago         1.85kB
ubuntu                      latest              20c44cd7596f        3 weeks ago         123MB
mongo                       latest              d22888af0ce0        4 weeks ago         361MB
readytalk/nodejs            latest              09f94b5069ce        5 weeks ago         288MB
steffenbrem/mango           latest              839b2759048f        19 months ago       1.26GB
daocloud.io/library/mongo   2.7.6               18400f87db91        3 years ago         381MB
```

删除镜像images时出现下面情况：
```
antarts@Antarts-MacBook-Pro ⮀ ~xxx ⮀ ⭠ master± ⮀ docker rmi 839b2759048f
Error response from daemon: conflict: unable to delete 839b2759048f (must be forced) - image is being used by stopped container 0c68ea35606e
```

### 解决办法：

1. 先查询记录，执行：docker ps -a
2. 把该镜像的记录全部删除掉，如果删除所有镜像的记录，执行: docker ps -a|awk '{print $1}'|xargs docker rm
3. 再执行：docker rmi 839b2759048f 就可以了