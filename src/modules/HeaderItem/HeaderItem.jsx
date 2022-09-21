const HeaderItem = (params) => {
	const { text, imgsrc } = params;

	return (
		<div  className="  h-20 pt-4  flex-col flex items-center">
			<img src={imgsrc} alt="" className="w-5 h-5" />
			<p className="font-bold text-2xl  tracking-wider  md:px-2 lg:px-3 xl:px-6 underline">
				{text}{" "}
			</p>
		</div>
	);
};

export default HeaderItem;
