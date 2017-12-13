## Mac中常用到的Docker命令

### 1.如何进入容器

查看所有运行的容器：
> docker ps

```
antarts@Antarts-MacBook-Pro ⮀ ~/xxx ⮀ docker ps
CONTAINER ID        IMAGE                COMMAND                  CREATED                  STATUS              PORTS                      NAMES
5d34311184ae        iwhyer/node:latest   "npm start"              Less than a second ago   Up 58 seconds       0.0.0.0:8888->8888/tcp     iwebapp
4dffcc8a8551        mongo                "docker-entrypoint..."   2 weeks ago              Up 2 weeks          0.0.0.0:32768->27017/tcp   unruffled_bose
```

通过容器id进入该容器：
> sudo docker exec -it 5d34311184ae /bin/bash

