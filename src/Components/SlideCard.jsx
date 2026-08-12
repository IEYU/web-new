import Wrapper from "../assets/wrappers/SlideCard";

const SlideCard = ({ img, link, text }) => {
	return (
		<Wrapper>
			<a href={link} className="card" target="_blank" rel="noreferrer">
				<img src={img} alt="project" className="card-img-top" />
				<div className="card-img-overlay">
					<h2 className="card-hover-text">{text}</h2>
				</div>
			</a>
		</Wrapper>
	);
};

export default SlideCard;
