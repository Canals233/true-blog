 import './App.css'
import Footer from './modules/footer/footer';
import Header from './modules/Header/Header';
import Home from './modules/home/home';
import Info from './modules/info/info';
import Project from './modules/projects/projects';
import Tech from './modules/tech/tech';

function App() {
	return (
		<div className="App">
            <Header></Header>
            <Home></Home>
            <Info/>
            <Tech/>
            <Project/>
            <Footer></Footer>
		</div>
	);
}

export default App;
