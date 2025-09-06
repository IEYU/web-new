import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import SlideCard from "./SlideCard";

// image imports
import notepad from "../assets/images/project/notepad.png";
import doggie from "../assets/images/project/jumpingdog.jpg";
import uccmodule from "../assets/images/project/module.png";
import ai4all from "../assets/images/project/ai4all.png";
import abtech from "../assets/images/project/abtech.jpeg";
import edtutor from "../assets/images/project/edtutor.jpeg";
import robo from "../assets/images/project/robo.jpg";
import jobify from "../assets/images/project/jobify.svg";
import todolist from "../assets/images/project/todolist.png";
import display from "../assets/images/project/display.png";
import awt from "../assets/images/project/awt.png";

import Wrapper from "../assets/wrappers/ProjectSlider";

const responsive = {
	desktop: {
		breakpoint: {
			max: 3000,
			min: 1024,
		},
		items: 3,
		partialVisibilityGutter: 40,
	},
	mobile: {
		breakpoint: {
			max: 464,
			min: 0,
		},
		items: 1,
		partialVisibilityGutter: 30,
	},
	tablet: {
		breakpoint: {
			max: 1024,
			min: 464,
		},
		items: 2,
		partialVisibilityGutter: 30,
	},
};

const ProjectSlider = (props) => {
	const { deviceType } = props; // Destructure deviceType from props

	return (
		<Wrapper>
			<Carousel
				additionalTransfrom={0}
				arrows
				autoPlaySpeed={3000}
				centerMode={false}
				containerClass="container-with-dots"
				dotListClass=""
				draggable
				responsive={responsive}
				focusOnSelect={false}
				infinite
				itemClass=""
				keyBoardControl
				minimumTouchDrag={80}
				pauseOnHover
				renderArrowsWhenDisabled={false}
				renderButtonGroupOutside={false}
				renderDotsOutside={false}
				rewind={false}
				rewindWithAnimation={false}
				rtl={false}
				shouldResetAutoplay
				showDots={true}
				sliderClass=""
				slidesToSlide={1}
				swipeable
				className="slider-container"
				autoPlay
			>
				<SlideCard
					img={awt}
					link={
						"https://github.com/HAKUZ-Y/Parallel_AWT?tab=readme-ov-file"
					}
					text={"Parallel 2D Adaptive Wavelet Transformation"}
				/>
				<SlideCard
					img={display}
					link={
						"https://ieyu.github.io/2025/05/22/POV-LED-Display-Build18-2025/"
					}
					text={"3D Volumetric Hologram"}
				/>
				<SlideCard
					img={abtech}
					link={"https://abtech.org/"}
					text={"Event Planning and Entertainment Production!"}
				/>
				<SlideCard
					img={todolist}
					link={"https://github.com/IEYU/TodoList-Demo"}
					text={"Todoist-style To-Do List (React Native + Expo)"}
				/>
				<SlideCard
					img={jobify}
					link={"https://github.com/IEYU/Jobify"}
					text={"Tracking Web App (learning MERN Stack)"}
				/>
				<SlideCard
					img={doggie}
					link={"https://github.com/IEYU/Doggie"}
					text={"Pet Management App (learning Swift)"}
				/>
				<SlideCard
					img={uccmodule}
					link={
						"https://www.canva.com/design/DAGGB2hLYO0/HpcbJuZuDP-0uPcGl8jvYw/view?utm_content=DAGGB2hLYO0&utm_campaign=designshare&utm_medium=link&utm_source=editor"
					}
					text={"UCC x Module Consulting Project"}
				/>
				<SlideCard
					img={robo}
					link={"https://github.com/IEYU/2020-2021-Change-Up.git"}
					text={"VEX Robotics Change Up Season Team 1010X"}
				/>
			</Carousel>
		</Wrapper>
	);
};

export default ProjectSlider;
