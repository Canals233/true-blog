import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import HeaderItem from "../HeaderItem/HeaderItem";

const headItems = [
	{
		text: "回到顶部",
		imgsrc: require("../../assets/blog-imgs/home.png"),
		activeImgSrc: require("../../assets/blog-imgs/home-red.png"),
		link: "#header",
	},
	{
		text: "个人简介",
		imgsrc: require("../../assets/blog-imgs/about.png"),
		activeImgSrc: require("../../assets/blog-imgs/about-red.png"),
		link: "#info",
	},
	{
		text: "技术能力",
		imgsrc: require("../../assets/blog-imgs/tech.png"),
		activeImgSrc: require("../../assets/blog-imgs/tech-red.png"),
		link: "#tech",
	},
	{
		text: "项目展示",
		imgsrc: require("../../assets/blog-imgs/project.png"),
		activeImgSrc: require("../../assets/blog-imgs/project-red.png"),
		link: "#project",
	},
	{
		text: "与我联系",
		imgsrc: require("../../assets/blog-imgs/email.png"),
		link: "#contact",
		activeImgSrc: require("../../assets/blog-imgs/email-red.png"),
	},
];

const Header = () => {
	const [showheader, setShowHeader] = useState(true);
	const [inHome, setInHome] = useState(true);
	const triggerHander = () => setShowHeader(!showheader);

	let { pathname } = useLocation();
   
	useEffect(() => setInHome(!pathname.includes("/blog")),[pathname]);

	return (
		<section id="header" className="z-10 ">
			<div
				className={`duration-500 w-full p-8 flex  justify-between border-b border-red-500 ${
					showheader ? " " : "border-transparent"
				}  flex-col md:flex-row  `}
			>
				<div className="flex">
					<div className=" rounded-lg  h-20 ">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-16 h-20 text-red-500"
							onMouseDown={triggerHander}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</div>
					<a
						
						href={inHome ? "/blog" : "/"}
						className="font-bold text-4xl align-middle pl-4 pt-5 tracking-wider whitespace-nowrap hover:text-red-500"
					>
						{inHome ? "前往博客" : "前往主页"}
					</a>
				</div>

				{
					<div
						className={`${
							showheader
								? ""
								: "hidden opacity-0 translate-x-full"
						} md:flex duration-500`}
					>
						{headItems.map((item, index) => {
							return (
								<HeaderItem
									text={item.text}
									imgsrc={item.imgsrc}
									activeImgSrc={item.activeImgSrc}
									key={index}
									link={item.link}
									// 作为子组件参数需要先require，不然报错
								/>
							);
						})}
					</div>
				}
			</div>
			<Outlet />
		</section>
	);
};
export default Header;
