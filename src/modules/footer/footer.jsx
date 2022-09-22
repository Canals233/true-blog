import React from "react";
import FooterItem from "../footerItem/footerItem";

const footerItems = [
	{
		title: "地址 / Address",
		textList: ["四川省成都市双流区川大路二段2号", "四川大学(江安校区)"],
		hrefs: [],
	},
	{
		title: "邮箱 / Email",
		textList: ["1552043941@qq.com", "canalsoxo@gmail.com"],
		hrefs: [],
	},
	{
		title: "代码网站 / Code Webs",
		textList: ["LeetCode个人主页", "Github仓库", "Gitee仓库"],
		hrefs: [
			"https://leetcode.cn/u/canals/",
			"https://github.com/Canals233",
			" https://gitee.com/Karasu114",
		],
	},
];

export default function Footer() {
	return (
		<section id="contact">
            <div className="w-full flex flex-col items-center  mt-20">
            <h1 className="text-5xl font-bold tracking-widest mb-5">
                与<span className="text-red-400">我</span>联系
            </h1>
            <img src={require("../../assets/scrool-down-line.png")} alt=""  />
            </div>
			<div className=" flex justify-evenly p-6 rounded flex-col md:flex-row">
				{footerItems.map((item,index) => {
					return (
						<FooterItem
							title={item.title}
							textList={item.textList}
							hrefs={item.hrefs}
                            key={index}
						/>
					);
				})}
			</div>
		</section>
	);
}
