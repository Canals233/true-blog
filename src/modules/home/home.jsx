import './home.css'

const Home = () => {
	return (
		<section id="home" class="rounded-xl text-2xl p-8 relative ">
			<div className="z-10">
				<img
                    id='home-avator'
					className="w-32 h-32 rounded-full mx-auto hover:scale-105 duration-200 "
					src={require("../../assets/avator.jpg")}
					alt=""
					width="384"
					height="512"
				/>
				<div class="pt-6 text-center space-y-4">
					<p class=" font-bold">
						调制代码，改变人生。
						
						欢迎您来到我的个人主页
					</p>

					<div class="font-bold">
						<div class="text-red-500 text-4xl">
							我是卡纳斯 / Canals
						</div>
						<div class="my-4">终端开发者，四川大学学生</div>
					</div>
				</div>
                <div class="pt-6 flex flex-col items-center justify-center space-y-4 font-bold ">
                    <div className='text-4xl w-max rounded-lg mb-5  text-blue-500 duration-300 hover:text-red-500 hover:scale-105'>
                        点此前往我的博客
                    </div>
                    <div className='text-4xl  text-red-500'>
                        向下继续浏览
                    </div>
                    <img className='updown' src={require("../../assets/down.png")} alt="" />
                </div>
			</div>
			{/* <div 
				className="z-0 top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 absolute linear-text opacity-20"
				
			>
				<p className='font-extrabold tracking-widest' style={{ fontSize: 300,borderTop:100,color:'transparent'}}>
                    Canals
                </p>
			</div> */}
            
		</section>
	);
};

export default Home;
