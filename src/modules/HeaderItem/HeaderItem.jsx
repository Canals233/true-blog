import { useState } from "react";

const HeaderItem = (params) => {
	const { text, imgsrc,activeImgSrc,link } = params;
	const [hoverState, setHoverState] = useState(false);
	const overHandler = () => {
		setHoverState(true);
	};
	const outHandler = () => {
		setHoverState(false);
	};
	return (
		<div
			className={`h-20 pt-4  flex-col flex items-center ${hoverState?'text-red-500':''} `}
			onMouseOver={overHandler}
			onMouseOut={outHandler}
		>
			<img src={hoverState?activeImgSrc:imgsrc} alt="" className="w-5 h-5" />
			<a href={link} className="font-bold text-2xl whitespace-nowrap  tracking-wider  md:px-2 lg:px-3 xl:px-6 underline">
				{text}{" "}
			</a>
		</div>
	);
};

export default HeaderItem;
