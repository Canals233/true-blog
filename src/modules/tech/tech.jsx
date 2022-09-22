const Tech = () => {
	const techs = ["HTML+CSS+JS","微信小程序开发","React全家桶","flutter跨端"];

	return (
		<section id="tech">
			<div className="container px-5 py-10 mx-auto text-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
					class="w-10 inline-block mb-4"
				>
					<path d="M13 7H7v6h6V7z"></path>
					<path
						fill-rule="evenodd"
						d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z"
						clip-rule="evenodd"
					></path>
				</svg>
				<div className="text-center mb-20">
					<h1 className="sm:text-4xl text-3xl font-bold title-font  mb-4">
						技术能力
					</h1>
					<p className="text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
						您可以据此对我的技术能力进行简单评估
					</p>
				</div>
				<div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
					{techs.map((tech, index) => (
						<div key={index} className="p-2 text-3xl sm:w-1/2 w-full">
							<div
								className="rounded flex p-4 h-full items-center tracking-widest bg-red-500"
								style={index%2?{ backgroundColor: '#F3F5F8' }:{}}
							>
								<span className={`title-font ${index%2?'text-black':"text-white"}`}>
									{tech}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Tech;
