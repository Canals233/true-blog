import { Route, Routes } from "react-router";
import BlogDetail from "../blogDetail/blogDetail";
import BlogPreview from "../blogPreview/blogPreview";

const BlogHome = () => {

   

	return (
		<Routes>
            <Route index element={<BlogPreview/>}/>
            <Route path=":link" element={<BlogDetail/>} />
        </Routes>
	);
};

export default BlogHome;
