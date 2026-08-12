import { useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/HomeIcon";

const HomeIcon = ({ img, text, linkto, externalLink }) => {
	const [isHovered, setIsHovered] = useState(false);
	const content = isHovered ? (
		<img src={text} alt="" className="home-text" />
	) : (
		<img src={img} alt="" className="home-img" />
	);

	if (externalLink) {
		return (
			<Wrapper>
				<a
					href={externalLink}
					className="home-icon-container"
					target="_blank"
					rel="noreferrer"
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					{content}
				</a>
			</Wrapper>
		);
	}

	return (
		<Wrapper>
			<Link
				to={linkto}
				className="home-icon-container"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				{content}
			</Link>
		</Wrapper>
	);
};

export default HomeIcon;
