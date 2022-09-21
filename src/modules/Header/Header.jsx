import HeaderItem from "../HeaderItem/HeaderItem";

const Header = () => {
	const headItems = [
		{
			text: "回到顶部",
			imgsrc: require("../../assets/blog-imgs/home.png"),
		},
		{
			text: "关于我的",
			imgsrc: require("../../assets/blog-imgs/about.png"),
		},
		{
			text: "技术能力",
			imgsrc: require("../../assets/blog-imgs/tech.png"),
		},
		{
			text: "项目展示",
			imgsrc: require("../../assets/blog-imgs/project.png"),
		},
		{
			text: "与我联系",
			imgsrc: require("../../assets/blog-imgs/email.png"),
		},
	];

	return (
		<div>
			<div className="fixed w-full p-8 flex  justify-between border-b border-red-400 ">
				<div className="flex">
					<div className=" rounded-lg bg-white h-20">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-16 h-20 text-red-400"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</div>
					<p className="font-bold text-4xl align-middle pl-4 pt-5 tracking-wider">
						前往博客
					</p>
				</div>

				<div className=" md:flex items-end justify-end">
					{headItems.map((item) => {
						return (
							<HeaderItem
								text={item.text}
								imgsrc={item.imgsrc}
								// 作为子组件参数需要先require，不然报错
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default Header;
