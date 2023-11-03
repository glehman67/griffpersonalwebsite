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
								src="./array.png"
								alt="array"
								className="work-image"
							/>
							<div className="work-title">Array Corp</div>
							<div className="work-subtitle">
								Senior Data Engineer
							</div>
							<div className="work-duration">2022 - Present</div>
						</div>

						<div className="work">
							<img
								src="./dartmouth.png"
								alt="dartmouth"
								className="work-image"
							/>
							<div className="work-title">Dartmouth College</div>
							<div className="work-subtitle">
								Teaching Assistant, Research Assistant
							</div>
							<div className="work-duration">2019 - 2022</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
