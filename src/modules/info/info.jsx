const Info = () => {
	return (
		<section id="info">
			<div className="bg-red-500 flex flex-col items-center p-8 text-center">
				<div id="info-title">
					<h1 className="text-white text-5xl">
						{" "}
						个人<span className="text-yellow-300">简介</span>{" "}
					</h1>
				</div>
				<img
					className="mt-3 mb-10"
					src={require("../../assets/scrool-down-line.png")}
					alt=""
				/>

				<div id="info-detail" className=" w-4/5 text-white text-xl">
					我是四川大学计算机学院计算机科学与技术就读的2021级学生，主要方向是大前端（终端）React，flutter，小程序。对衍生的Redux，Saga，Thunk都有所了解与应用，对多种API，运营商服务（地图，云数据库）也有较多应用。有较广的大前端知识面和工程能力。
					<br />
					欢迎您与我交流联系，烦请您在添加时候说明您的来意
				</div>
			</div>
		</section>
	);
};
export default Info;
