const blogList = [
	{
		title: "ElectronJS Crash Course 2022学习笔记",
		date: "2022-08-26 16:19:17",
		tags: ["Electron", " 学习笔记"],
        link:"static-electron_learn.md",
		summary: `electron快速入门笔记,同时这是youtube课程[ElectronJS Crash Course 2022]的学习笔记
`,
	},
    {
		title: "使用npm安装electron及electron-forge安装中出现的卡顿、缓慢、报错问题的个人解决办法",
		date: "2022-08-25 21:58:02",
		tags: ["Electron", "问题解决",'技术博客'],
        link:"static-使用npm安装electron及electron-forge安装中出现的卡顿、缓慢、报错问题的个人解决办法.md",
		summary: `设置npm electron默认安装路径的环境变量
即npm config set ELECTRON_MIRROR  http://npmmirror.com/mirrors/electron/
        ,能大概率解决electron安装缓慢或卡顿
`,
	},

];

export default blogList;
