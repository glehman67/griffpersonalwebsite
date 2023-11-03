import React from "react";

function article_1() {
	return {
		date: "7 May 2023",
		title: "Radically Efficient Cannabis Cultivation Facility Design",
		link: "https://engineering.dartmouth.edu/news/students-conduct-first-of-its-kind-independent-study-on-energy-efficiency-in-cannabis-cultivation",
		description:
			"Worked with team of BE students on a first-of-its-kind research project to design an indoor cannabis grow facility using the most energy efficient practices.",
		keywords: [
			"Radically Efficient",
			"Griff Lehman",
			"Dartmouth College",
			"Thayer School of Engineering",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://engineering.dartmouth.edu/news/students-conduct-first-of-its-kind-independent-study-on-energy-efficiency-in-cannabis-cultivation"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "7 May 2023",
		title: "Artificial Intelligence in Healthcare",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
