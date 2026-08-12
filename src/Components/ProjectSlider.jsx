import SlideCard from "./SlideCard";

// image imports
import uccmodule from "../assets/images/project/module.png";
import abtech from "../assets/images/project/abtech.jpeg";
import robo from "../assets/images/project/robo.jpg";
import display from "../assets/images/project/display.png";
import awt from "../assets/images/project/awt.png";

import Wrapper from "../assets/wrappers/ProjectSlider";

const projects = [
	{
		img: awt,
		link: "https://github.com/HAKUZ-Y/Parallel_AWT?tab=readme-ov-file",
		text: "Parallel 2D Adaptive Wavelet Transformation",
	},
	{
		img: display,
		link: "https://ieyu.github.io/2025/05/22/POV-LED-Display-Build18-2025/",
		text: "3D Volumetric Hologram",
	},
	{
		img: abtech,
		link: "https://abtech.org/",
		text: "Event Planning and Entertainment Production!",
	},
	// {
	// 	img: todolist,
	// 	link: "https://github.com/IEYU/TodoList-Demo",
	// 	text: "Todoist-style To-Do List",
	// },
	// {
	// 	img: jobify,
	// 	link: "https://github.com/IEYU/Jobify",
	// 	text: "Tracking Web App",
	// },
	// {
	// 	img: doggie,
	// 	link: "https://github.com/IEYU/Doggie",
	// 	text: "Pet Management App",
	// },
	{
		img: uccmodule,
		link: "https://www.canva.com/design/DAGGB2hLYO0/HpcbJuZuDP-0uPcGl8jvYw/view?utm_content=DAGGB2hLYO0&utm_campaign=designshare&utm_medium=link&utm_source=editor",
		text: "Trying Consulting 🤔",
	},
	{
		img: robo,
		link: "https://github.com/IEYU/2020-2021-Change-Up.git",
		text: "Vex was a big part of my life b4 college :D",
	},
];

const ProjectSlider = () => {
	return (
		<Wrapper>
			<div className="portfolio-grid">
				{projects.map((project) => (
					<SlideCard key={project.text} {...project} />
				))}
			</div>
		</Wrapper>
	);
};

export default ProjectSlider;
