import React, { useState } from "react";
import "../index.css";
import { Link, NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/HomeIcon";

const HomeIcon = ({ img, text, linkto, externalLink }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Wrapper>
			<Link
				to={externalLink ? externalLink : `./${linkto}`}
				// to={`./${linkto}`}
				className="home-icon-container"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				// Ensure block display for full coverage
			>
				{isHovered ? (
					// <span className="home-text">{text}</span>
					<img src={text} alt="home icon" className="home-text" />
				) : (
					<img src={img} alt="home icon" className="home-img" />
				)}
			</Link>
		</Wrapper>
	);
};

export default HomeIcon;
