# electron快速入门笔记

这是youtube课程

[ElectronJS Crash Course 2022](https://www.youtube.com/watch?v=kBtYon8KmdU)的学习笔记

大部分内容其实都是官方文档的解说



安装时候出现问题的解决方案已写成一篇技术博客

[解决方案](https://www.yuque.com/canals/solve-problem/mkzl2k)



## 安装electron*这一段都是官方文档*



```shell
mkdir my-electron-app && cd my-electron-app
npm init
```



快速入门时，使用`npm init -y`即可



```
package.json`文件中main改为`main:"main.js"
```



```json
{
  "scripts": {
    "start": "electron ."
  }
}
```



直接能用`npm start`启动electron



## hello world



复制文档html到创建的index.html



复制js到main.js



```javascript
const { app, BrowserWindow } = require('electron')//node.js环境

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })//创建一个新窗口对象

  win.loadFile('index.html')//将在窗口显示的文件
}
```



在 Electron 中，浏览器窗口只能在`app`模块 `ready`事件触发后创建。`app.whenReady()`您可以使用API等待此事件 。 在完成它的 Promise `createWindow()`之后调用whenReady()



在Windows 和 Linux关闭所有窗口会完全退出



实现在macOS上关闭所有窗口而不退出



```javascript
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
```



## meun



结构



```javascript
const template=[
  {
    label: app.name,//菜单块标题
    submenu: []//click时的下拉选项
  },
]
//模板不代表空白，是已经有完整的内容的模板

submenu中，{ type: 'separator' }对象是分割线
对象的label是显示名字
click里面写箭头函数，提供功能

role是label和click直接绑定的封装功能

//以下会覆盖原来的meun
const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
```



### loadurl



```javascript
const { BrowserWindow } = require('electron')
const win = new BrowserWindow({ show: false })
win.once('ready-to-show', () => {
  win.show()
})
```



win3.webContents.openDevTools()



手动启动开发者工具



### 获取相机权限



```javascript
const video=document.getElementById('camera')


navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
	console.log(stream)
    video.srcObject=stream
});

相机权限获取并显示
```



### 截图



```javascript
const imageTag=document.getElementById('image')

captureBtn.addEventListener('click',()=>{
    const canvas=document.createElement('canvas')
    canvas.width=video.videoWidth
    canvas.height=video.videoHeight

    canvas.getContext('2d').drawImage(video,0,0,canvas.width,canvas.height)

    const dataURL=canvas.toDataURL()
    imageTag.src=dataURL
})
```



## 进程间通信



通常是一个主进程和多个渲染进程



主进程是于渲染进程独立的，渲染进程可以理解为一个一个窗口，主进程是背后的东西



### 传输截图图像到主进程



主进程监听事件main.js中



```javascript
ipcMain.on('set-title', (event, title) => {
    const webContents = event.sender
    const win = BrowserWindow.fromWebContents(webContents)
    win.setTitle(title)
  })
监听渲染进程触发settitle
```



渲染窗口1进程预加载文件，创建接口和方法



```javascript
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    setTitle: (title) => ipcRenderer.send('set-title', title)
})
通过上下文暴露到主进程的接口'electronAPI'，提供setTitle方法
```



渲染窗口2进程



```javascript
const setButton = document.getElementById('btn')
const titleInput = document.getElementById('title')
setButton.addEventListener('click', () => {
    const title = titleInput.value
    window.electronAPI.setTitle(title)
});
```



这个过程可以理解为



进程2send主进程监听事件1



主进程执行一些操作



主进程send进程1监听事件1



进程1得到数据



### 通知



```
new Notification('image captured',{body:"image c!"})
```