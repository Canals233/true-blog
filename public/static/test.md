# 安装时卡顿或缓慢问题
## 较通用解决方案：设置环境变量
设置npm electron默认安装路径的环境变量
`npm config set ELECTRON_MIRROR  http://npmmirror.com/mirrors/electron/`
能大概率解决electron安装缓慢或卡顿

删除变量`npm config delete ELECTRON_MIRROR`

查看npm 变量 `npm config ls`
## 使用淘宝源时卡住
### electron 本体卡住
![请添加图片描述](https://img-blog.csdnimg.cn/e10ea8c48d3f482cbcec6798d3db1984.png)
主要卡在`reify:lodash:timing reify:audit`

这是由于npm换下载源为国内源导致的问题，在作者网络寻找解决时也发现有其他人遇见此问题，且尤其是淘宝源在作者的机器上绝对会卡顿

除设置环境变量，将npm换回原来的下载源解决外

`npm install cnpm -g`安装cnpm后使用cnpm安装electron也可解决

---

### npm install --save-dev @electron-forge/cli卡住
![请添加图片描述](https://img-blog.csdnimg.cn/9e841b6cd77a49e78bc17c42ba5ab93a.png)
主要卡在`reify:rxjs: timing reifyNode:node_modules/lodash`
同样出现在使用淘宝源时候，和上面的本体一样可以通过cnpm和设置变量解决

---

## npx electron-forge import报错
![请添加图片描述](https://img-blog.csdnimg.cn/5c476f3e5499421db7e0c663c3a8620c.png)
基本报错都有`"electron-squirrel-startup"`这个包安装失败
报错信息多种多样，包括但不限于

 1. 网络重置
 2. 超时
 3. lockfile的版本错误
第三个会告诉你本地和依赖的lockfile版本对不上，但其实本地已经是2版本了
---

由于是npx安装，cnpm用不上，npm国内源基本报错，npm官方源等半小时都不一定安装完

由于`electron-forge import`的作用是修改package.json的开发依赖并且帮你安装上依赖

手动安装即可解决这个问题，**请一定先设置环境变量**，否则将会导致国内网络环境打包安装非常缓慢
将下面内容复制进package.json文件

```JavaScript
{
    "name": "problem-test",
    "version": "1.0.0",
    "author": {
      "name": "canals"
    },
    "description": "demo-electron",
    "main": "main.js",
    "scripts": {
      "start": "electron-forge start",
      "package": "electron-forge package",
      "make": "electron-forge make",
      "e-start": "electron ."
    },
    "devDependencies": {
      "@electron-forge/cli": "^6.0.0-beta.65",
      "@electron-forge/maker-deb": "^6.0.0-beta.65",
      "@electron-forge/maker-rpm": "^6.0.0-beta.65",
      "@electron-forge/maker-squirrel": "^6.0.0-beta.65",
      "@electron-forge/maker-zip": "^6.0.0-beta.65",
      "electron": "^20.1.0"
    },
    "dependencies": {
      "electron-squirrel-startup": "^1.0.0"
    },
    "config": {
      "forge": {
        "packagerConfig": {},
        "makers": [
          {
            "name": "@electron-forge/maker-squirrel",
            "config": {
              "name": "electron_demo"
            }
          },
          {
            "name": "@electron-forge/maker-zip",
            "platforms": [
              "darwin"
            ]
          },
          {
            "name": "@electron-forge/maker-deb",
            "config": {}
          },
          {
            "name": "@electron-forge/maker-rpm",
            "config": {}
          }
        ]
      }
    }
  }
  
```

"devDependencies"的版本后缀都是一样的

可以安装最新版本的@electron-forge/cli，把版本号复制到下面几个

然后npm install或cnpm install，把依赖装上

**一定设置环境变量**
`npm run make`即可成功快速安装打包依赖并且打包成功