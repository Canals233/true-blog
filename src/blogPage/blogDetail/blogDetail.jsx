import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown"; // 解析 markdown
import remarkGfm from "remark-gfm"; // markdown 对表格/删除线/脚注等的支持
import MarkNav from "markdown-navbar"; // markdown 目录
import "markdown-navbar/dist/navbar.css";
import axios from "axios";
import { useParams } from "react-router";

const BlogDetail=()=>{
    const [SourceData,setSourceData]=useState('');
    let {link}=useParams()
    link=link.replace('-','/')
    console.log(link)
	useEffect(()=>{
        const asyncGet=async ()=> {
            
            let response=await axios('/'+link)
            console.log(response)
            if(response.status>=200 && response.status<400){
                setSourceData(response.data)
            }
        }

        asyncGet()
    },[link])

	
		return (
            <section className="w-full">
<div className="pl-10 BlogHome prose w-full self-end flex max-w-none flex-col">
				<div>
					<MarkNav
						className=" my-5 border-b-2"
						source={SourceData}
						ordered={true}
					/>
				</div>
				<div className="text-xl mb-5 border-b-2">
					<ReactMarkdown
						children={SourceData}
						remarkPlugins={[remarkGfm]}
					/>
                    
				</div>
                <p className="text-xl pb-10">本文已结束，感谢您的阅读</p>
			</div>
            </section>
			
		);
	
}

export default BlogDetail