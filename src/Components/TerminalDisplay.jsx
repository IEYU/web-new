import styled from "styled-components";
import React, { useState } from "react";
import { motion } from "framer-motion";
import cursor1 from "../assets/images/marioCursor2Smaller.png";
import cursor2 from "../assets/images/marioCursorSmaller.png";
import {
	DiReact,
	DiNodejsSmall,
	DiMongodb,
	DiJsBadge,
	DiPython,
	DiJava,
	DiSwift,
	DiBootstrap,
	DiHtml5,
	DiCss3,
	DiGit,
} from "react-icons/di";
import { FaRaspberryPi } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";
import {
	SiOpencv,
	SiFlask,
	SiRubyonrails,
	SiExpress,
	SiSpringboot,
} from "react-icons/si";
import { TbHexagonLetterC } from "react-icons/tb";
import Wrapper from "../assets/wrappers/TerminalDisplay";

const bounceAnimation = {
	initial: { y: 0 },
	hover: {
		y: [-10, -20, 10, -10, 0],
	},
};

const AnimatedIcon = styled(motion.div)`
	font-size: 5rem;
	/* cursor: ${(props) =>
		props.isHovered ? `url(${cursor1}), auto` : `url(${cursor2}), auto`};
	transition: cursor 0.2s ease-in-out; */
`;

const IconList = () => {
	const [hoveredSoftware, setHoveredSoftware] = useState(null);
	const [hoveredOther, setHoveredOther] = useState(null);

	const softwareIcons = [
		<DiReact key="react" color="rgb(0,113,153)" />,
		<SiExpress key="express" />,
		<DiNodejsSmall key="nodejs" color="rgb(56,113,52)" />,
		<DiMongodb key="mongodb" color="rgb(0,115,20)" />,
		<DiJsBadge key="js" color="rgb(254,215,39)" />,
		<TbHexagonLetterC key="c" color="rgb(79,96,182)" />,
		<DiPython key="python" color="rgb(41,100,150)" />,
		<DiJava key="java" color="rgb(0,95,131)" />,
		<DiSwift key="swift" color="rgb(241,80,52)" />,
	];

	const otherIcons = [
		<DiGit key="git" color="rgb(254,79,40)" />,
		<FcLinux key="linux" />,
		<SiRubyonrails key="rubyonrails" color="rgb(208,32,13)" />,
		<DiHtml5 key="html5" color="rgb(255,90,50)" />,
		<DiCss3 key="css3" color="rgb(20,100,158)" />,
		<DiBootstrap key="bootstrap" color="rgb(98,46,244)" />,
		<FaRaspberryPi key="raspberrypi" color="rgb(201,45,75)" />,
		<SiSpringboot key="springboot" color="rgb(97,168,62)" />,
		<SiFlask key="flask" />,
	];

	return (
		<Wrapper>
			<div className="icon-grid">
				{softwareIcons.map((icon) => (
					<AnimatedIcon
						key={icon.key}
						initial={bounceAnimation.initial}
						animate={
							hoveredSoftware === icon.key
								? bounceAnimation.hover
								: bounceAnimation.initial
						}
						isHovered={hoveredSoftware === icon.key}
						onMouseEnter={() => setHoveredSoftware(icon.key)}
						onMouseLeave={() => setHoveredSoftware(null)}
						whileTap={{
							scale: 0.5,
							borderRadius: "100%",
						}}
					>
						{icon}
					</AnimatedIcon>
				))}
			</div>
			<div className="icon-grid">
				{otherIcons.map((icon) => (
					<AnimatedIcon
						key={icon.key}
						initial={bounceAnimation.initial}
						animate={
							hoveredOther === icon.key
								? bounceAnimation.hover
								: bounceAnimation.initial
						}
						isHovered={hoveredOther === icon.key}
						onMouseEnter={() => setHoveredOther(icon.key)}
						onMouseLeave={() => setHoveredOther(null)}
						whileTap={{
							scale: 0.5,
							borderRadius: "100%",
						}}
					>
						{icon}
					</AnimatedIcon>
				))}
			</div>
		</Wrapper>
	);
};

export default IconList;
