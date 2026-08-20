import Wrapper from "../assets/wrappers/Bio";

const bioLines = [
	"Hi,",
	"My name is Maggie.",
	"I'm an Electrical and Computer Engineering student at Carnegie Mellon University.",
	"I love building random but cool things!",
	"Check out the portfolio page to see what I've been working on (･ω<)☆",
];

const Bio = () => {
	return (
		<Wrapper>
			<div className="bio-lines">
				{bioLines.map((line, index) => (
					<p
						className="bio-line"
						key={line}
						style={{ "--line-index": index }}
					>
						{line}
					</p>
				))}
			</div>
		</Wrapper>
	);
};
export default Bio;
