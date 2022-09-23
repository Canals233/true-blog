import {  useNavigate } from "react-router-dom";
import blogList from "../../assets/bloglist";


const BlogPreview = () => {
    const navigate=useNavigate()
        const onClickHanlder=(route)=>{
            
            return navigate(route)
        }
	return (
		<div className=" flex flex-col  items-center ">
				{blogList.map((blogprofile, index) => {
					return (
						<div
							className="bg-slate-100 w-11/12 m-10 p-5 rounded-xl shadow-xl"
							key={index}
						>
							<h1 className="text-3xl font-bold">
								{blogprofile.title}
							</h1>
							<h2 className="text-lg py-2 italic">
								{blogprofile.date}
							</h2>
							<h2 className="text-xl">
								标签：
								{blogprofile.tags.map((tag) => {
									return (
										<p className="inline-block px-4 text-xl">
											{tag}
										</p>
									);
								})}
							</h2>
							<p className="text-lg font-semibold py-4">
								{blogprofile.summary}
							</p>
							<p
								onClick={()=>onClickHanlder(blogprofile.link)}
								className="float-right py-3 px-1 text-2xl max-w-max font-bold block rounded-lg bg-blue-400 text-white hover:scale-105 duration-200"
							>
								查看内容
							</p>
						</div>
					);
				})}
			</div>
	);
};

export default BlogPreview
