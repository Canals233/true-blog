const ProjectItem=({title,text,style,imgsrc})=>{
    return (
        <div
					className="flex w-full py-10 flex-col sm:flex-row "
					style={{ backgroundColor: `${style=='grey'?'#F3F5F8':'#EF4444'}` }}
				>
					<div
						id="project-image"
						className="mb-10 sm:w-1/2 w-full h-96 bg-center bg-contain bg-no-repeat"
						style={{
							backgroundImage: `url(${imgsrc})`,
							//这样才能正确显示
						}}
					></div>
					<div id="project-info" className={`tracking-widest sm:w-1/2 w-full pl-4 ${style=='grey'?'text-black':'text-white'}`}>
						<h1
							dangerouslySetInnerHTML={{
								__html: title,
							}}
							className="text-4xl  text-center"
						></h1>
						<p
							dangerouslySetInnerHTML={{
								__html: text,
							}}
							className="text-xl text-left leading-9 "
						></p>
					</div>
				</div>
    )
}
export default ProjectItem