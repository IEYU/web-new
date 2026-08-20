import "../index.css";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/HomeIcon";

const HomeIcon = ({ img, text, textClassName = "", linkto, externalLink }) => {
	const content = (
		<>
			<img src={img} alt="" className="home-img" />
			<img
				src={text}
				alt=""
				className={`home-text ${textClassName}`.trim()}
			/>
		</>
	);

	if (externalLink) {
		return (
			<Wrapper>
				<a
					href={externalLink}
					className="home-icon-container"
					target="_blank"
					rel="noreferrer"
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
			>
				{content}
			</Link>
		</Wrapper>
	);
};

export default HomeIcon;
