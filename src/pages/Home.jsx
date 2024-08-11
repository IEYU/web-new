import coins from "../assets/images/coins.png";
import mushroom from "../assets/images/mushroom.png";
import mushroom2 from "../assets/images/mushroom2.png";
import carnivorousPlant from "../assets/images/carnivorous-plant.png";
import HomeIcon from "../Components/HomeIcon";
import Wrapper from "../assets/wrappers/Home";
import name from "../assets/images/name.png";
import portfolio from "../assets/images/portfolio.png";
import skills from "../assets/images/skills.png";
import about from "../assets/images/about.png";
import star from "../assets/images/star.png";
import blog from "../assets/images/blog.png";
import GithubCorner from "react-github-corner";
import AnimatedCursor from "react-animated-cursor";

const Home = () => {
	return (
		<Wrapper>
			<AnimatedCursor
				innerSize={8}
				outerSize={35}
				innerScale={1}
				outerScale={2}
				outerAlpha={0}
				hasBlendMode={true}
				innerStyle={{
					backgroundColor: "var(--cursor-color)",
				}}
				outerStyle={{
					border: "3px solid var(--cursor-color)",
				}}
			/>
			{/* <MouseTrail strokeColor={"#e72d12"} lineWidthStart={5} lag={0.7} /> */}

			<GithubCorner
				href="https://github.com/IEYU"
				target="blank"
				octoColor="#fcfbf7"
			/>
			<img src={name} alt="Name" className="title" />
			<div className="icon-row">
				<HomeIcon img={coins} text={portfolio} linkto="portfolio" />
				<HomeIcon img={mushroom2} text={about} linkto="about" />
				<HomeIcon
					img={carnivorousPlant}
					text={skills}
					linkto="skills"
				/>
				<HomeIcon
					img={star}
					text={blog}
					externalLink={"https://blog.maggie-gong.com"}
				/>
			</div>
		</Wrapper>
	);
};
export default Home;
