import { CodeIcon } from "@heroicons/react/solid";
import ProjectItem from "../projectItem/projectItem";

const projects = [
	{
		title: `微信小程序应用开发赛西南赛区奖
    <br />
    识食拼饭`,
		text: `项目简介：提供约饭，地图poi定位，想法分享的高完成度微信小程序，可微信搜索“识食拼饭”使用程序
<br />
主要工作：
项目规划，程序制作，上线发布，文档攥写等全过程的绝大部分工作。通过竞品分析，实际访谈，技术选型，从无到有地，基本独立一人构建了整个项目。
从数据管理和降本增效的需求出发，构建本地代码与微信云云端数据库体系，实现数据与业务代码有序分离
从用户隐私和通信便捷的出发，构建了一对多的通讯模式，达成了隐私和便捷并重
<br />
技术栈：WXML,WXSS,JS，微信小程序API，微信云数据库`,
		style: "grey",
        imgsrc:require("../../assets/project/know2eat-show.gif")
	},
	{
		title: `皇冠服装`,
		text: `
        这是一个实验性项目，主要使用服务器在国外的API和服务，如您希望访问，请使用支持国外网络的环境使用
        <br/>主要工作：使用React及其衍生技术搭建整个项目，通过谷歌firebase存储数据，使用Stripe模拟支付，借助Netfily和Git Page托管网页
        <br/>技术栈：React ,Redux, React Saga ,React Thunk , Firebase 数据库
        `,
		style: "red",
        imgsrc:require("../../assets/project/crwn.gif")
	},
];

const Project = () => {
	return (
		<section id="project">
			<div className="flex flex-col  w-full mb-20 text-center">
				<CodeIcon className="mx-auto  w-10 mb-4" />
				<h1 className="sm:text-4xl text-3xl font-bold   ">项目展示</h1>
			</div>
			<div className=" justify-center">
				{projects.map((project, index) => {
					return (
						<ProjectItem
							key={index}
							title={project.title}
							text={project.text}
							style={project.style}
                            imgsrc={project.imgsrc}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Project;
