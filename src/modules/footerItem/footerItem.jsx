const FooterItem = ({ title, textList, hrefs }) => {
	console.log(hrefs);
	let herflen = hrefs.length;
	return (
		<div
			className="m-5 p-6 md:w-1/3 flex flex-col justify-center text-center border-b-4 border-red-400 duration-500 hover:border-yellow-200 hover:-translate-y-2"
			style={{ backgroundColor: "#F3F5F8" }}
		>
			<h2 className="title-font font-bold  tracking-wider text-2xl border-b">
				{title}
			</h2>
			{textList.map((text, index) => {
				return (
					<p className="mt-1 text-xl font-bold" key={index}>
						<a className={herflen?'text-blue-600 hover:text-red-400':''} href={herflen ? hrefs[index] : "javascript:;"}>
							{text}
						</a>
					</p>
				);
			})}
		</div>
	);
};
export default FooterItem;