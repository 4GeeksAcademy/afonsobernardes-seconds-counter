import React from "react";

//include images into your bundle
import Clock from "./clock.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container d-flex vh-100 align-items-center text-center">
			
			<span className="col-12">
				<Clock />
			</span>
			{/*<p>
				Made by{" "}
				<a href="https://github.com/AfonsoBernardes">Afonso Bernardes</a>, with
				love!
			</p>*/}
		</div>
	);
};

export default Home;
