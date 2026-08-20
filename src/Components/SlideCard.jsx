import Wrapper from "../assets/wrappers/SlideCard";
import { urlFor } from "../sanity/image";

const SlideCard = ({ image, isPlaceholder = false, technologies = [], title, url }) => {
	const projectTechnologies = Array.isArray(technologies) ? technologies : [];
	const imageUrl = image
		? urlFor(image)
				.width(800)
				.height(600)
				.fit("crop")
				.auto("format")
				.url()
		: null;

	return (
		<Wrapper>
			{isPlaceholder ? (
				<div className="card placeholder-card" aria-label={title}>
					<div className="card-img-top placeholder-image" aria-hidden="true">
						<span>?</span>
					</div>
					<div className="card-img-overlay">
						<h2 className="card-hover-text">{title}</h2>
					</div>
				</div>
			) : (
				<a href={url} className="card" target="_blank" rel="noreferrer">
					<img
						src={imageUrl}
						alt={image.alt || title}
						className="card-img-top"
						loading="lazy"
						width="800"
						height="600"
					/>
					<div className="card-img-overlay">
						<h2 className="card-hover-text">{title}</h2>
					</div>
					<div className="card-skills-overlay" aria-label="Skills used">
						<p>Skills used</p>
						{projectTechnologies.length > 0 ? (
							<ul>
								{projectTechnologies.map((technology) => (
									<li key={technology}>{technology}</li>
								))}
							</ul>
						) : (
							<span className="skills-fallback">Details coming soon</span>
						)}
					</div>
				</a>
			)}
		</Wrapper>
	);
};

export default SlideCard;
