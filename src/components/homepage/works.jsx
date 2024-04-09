import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";
import IMAGES from '../../data/images.js'
import INFO from "../../data/user";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<div className="work-title">{INFO.work[3].company}</div>
							<div className="work-subtitle">
								{INFO.work[3].title}
							</div>
							<div className="work-duration">{INFO.work[3].date}</div>
						</div>
						<div className="work">

							<div className="work-title">{INFO.work[0].company}</div>
							<div className="work-subtitle">
								{INFO.work[0].title}
							</div>
							<div className="work-duration">{INFO.work[0].date}</div>
						</div>

						<div className="work">
							<div className="work-title">PricewaterhouseCoopers. (PwC)</div>
							<div className="work-subtitle">
								Data and Tech Intern
							</div>
							<div className="work-duration">June 2022 - Aug 2022</div>

						</div>

						<div className="work">
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
