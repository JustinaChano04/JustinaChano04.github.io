import React from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";
import resume from "../../images/justin-chan-resume.pdf";

const NavBar = (props) => {
	const { active } = props;

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/personal-website">Home</Link>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/projects">Projects</Link>
							</li>
							<li
								className={
									active === "resume"
										? "nav-item active"
										: "nav-item"
								}
							>
								 {/* <iframe src='../images/justin-chan-resume.pdf' width='100%' height='500px' /> */}
								 <a href={resume} target="_blank">Resume</a>
								 
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
