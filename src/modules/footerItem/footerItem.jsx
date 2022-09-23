const FooterItem = ({ title, textList, hrefs, imgsrc }) => {
	let herflen = hrefs.length;
	return (
		<div
			className="m-5 p-6 md:w-1/3 flex flex-col items-center text-center border-b-4 border-red-500 duration-500 hover:border-yellow-200 hover:-translate-y-2"
			style={{ backgroundColor: "#F3F5F8" }}
		>
			<img src={imgsrc} alt="" className="w-6 h-6 block"></img>
			<h2 className="title-font font-bold  tracking-wider text-2xl border-b">
				{title}
			</h2>
			{textList.map((text, index) => {
				return (
					<p className="mt-1 text-xl font-bold" key={index}>
						{herflen ? (
							<a
								className={
									herflen
										? "text-blue-500 hover:text-red-500"
										: ""
								}
								href={hrefs[index]}
							>
								{text}
							</a>
						) : (
							<p>{text}</p>
						)}
					</p>
				);
			})}
		</div>
	);
};
export default FooterItem;
