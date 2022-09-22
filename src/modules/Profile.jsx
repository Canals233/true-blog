import Home from "../modules/home/home";
import Info from "../modules/info/info";
import Project from "../modules/projects/projects";
import Tech from "../modules/tech/tech";
import Footer from "../modules/footer/footer";
function Profile() {
	return (
		<div className="Profile">
			<Home></Home>
			<Info />
			<Tech />
			<Project />
			<Footer></Footer>
		</div>
	);
}

export default Profile;
