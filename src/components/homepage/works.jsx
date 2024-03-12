import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src=""
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Transglobe Insurance</div>
							<div className="work-subtitle">
								Machine Learning Engineer Intern
							</div>
							<div className="work-duration">May 2023 - July 2023</div>
						</div>

						<div className="work">
							<img
								src=""
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">PricewaterhouseCoopers. (PwC)</div>
							<div className="work-subtitle">
								Data and Tech Intern
							</div>
							<div className="work-duration">June 2022 - Aug 2022</div>

						</div>

						<div className="work">
							<img
								src=""
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Merck&Co. </div>
							<div className="work-subtitle">
								Software Engineer Intern
							</div>
							<div className="work-duration">Aug 2021 - Mau 2022</div>

						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
