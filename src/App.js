import "./App.css";

import Header from "./modules/Header/Header";
import Profile from "./modules/Profile.jsx";
import Spinner from "./modules/spinner/spinner";
import BlogHome from "./blogPage/blogHome/blogHome";

import { Routes, Route } from "react-router-dom";



function App() {
	return (
		<div className="App">
			
				<Routes>
					<Route path="/" element={<Header />}>
						<Route index element={<Profile></Profile>} />
						<Route path="blog/*" element={<BlogHome />} />
					</Route>
				</Routes>
			
		</div>
	);
}

export default App;
