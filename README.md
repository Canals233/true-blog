# 开始使用

- 本网站使用create react app初始化

- 使用github进行代码托管

- 使用netlify进行网页托管

**您可访问https://canals-self-and-blog.netlify.app/进行查看**

## 构建项目

- 您可以直接clone https://github.com/Canals233/true-blog也可以下载并解压压缩包
- 在根目录中 `npm install`安装依赖
- `npm start`即可在您的机器上上的浏览器看到网页

## 依赖说明

本项目基本都使用`tailWindCSS`进行样式编写，且没有按照官网的安装步骤，使用`postcss`的最新版和`tailwind`的最新版，并将`craco.config`的`postcss`改为`postcssOptions`

字体使用谷歌字体的`MaShanZheng-Regular`，如您需要替换字体，请变更`src\index.css`中的`font-family`

使用`craco`修改CRA的部分设置

本项目react和react-router-dom都是较新的版本（18.2.0/6.4.1），与旧版有较多的不同方法

markdown使用`"react-markdown": "^8.0.3"`解析文件`"remark-gfm": "^3.0.1"`解析更多md语法

`"markdown-navbar": "^1.4.3"`得到md目录

`"@tailwindcss/typography"`稳定md样式

## 数据源

由于开发时间有限，且本项目主要采用数组map方法渲染重复的组件，因此选择了重复组件所在的数组嵌入父组件中的形式

如header组件中嵌入了headerItem有关的信息

您通常可以在组件函数的头部直接看见这些数组

图标和图片在`src\assets\`下

---

博客源markdown文件`public\static`文件夹中

博客渲染数据`src\assets\bloglist.jsx`

# 个人主页介绍

本人设计水平较有限，且项目工期较短，主要是结构部分的展示

主要分为五个部分

- header导航栏
  - 点击左上角图标可以收起Header，Header右侧的内容是HeaderItem列表渲染而来，可以点击跳转到博客或者主页内的各部分

- 个人信息和简介
- 技术能力
- 项目展示
- footer 联系部分

# 博客页面

主要使用了react-markdown解析器

header通过react-router-dom共享

博客列表可以看到所有博客

点击即可通过动态路由，请您注意的是，作者为便于路径解析在`blogDetail`中将`useParams()`得到的参数的第一个'-'修改为了'/'

