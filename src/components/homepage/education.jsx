import React from "react";
import { faSchool, faSchoolCircleExclamation } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Education = () => {
	return (
		<Card
			icon={faSchool}
			title="Education"
			body={
				<div className="education">
					<div className="education-school">Purdue University</div>
					<div className="education-degree">
						B.Engr Computer Engineering & Minor in Data Science
					</div>
					<div className="education-duration">2019 - 2024</div>
				</div>
			}
		/>
	);
};

export default Education;
