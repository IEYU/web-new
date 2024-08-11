import { useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/SlideCard";

const SlideCard = ({ img, link, text }) => {
	return (
		<Wrapper>
			<Link to={link} className="card" target="blank">
				<img src={img} alt="project" className="card-img-top" />
				<div className="card-img-overlay">
					<h2 className="card-hover-text">{text}</h2>
				</div>
			</Link>
		</Wrapper>
	);
};

export default SlideCard;
