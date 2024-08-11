import Wrapper from "../assets/wrappers/Portfolio";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ProjectSlider from "../Components/ProjectSlider";

const Portfolio = () => {
	return (
		<Wrapper>
			<Navbar />
			<ProjectSlider />
			<Footer
				text={
					"Life, liberty, and the pursuit of happiness. We fought for these ideals we shouldn't settle for less."
				}
			/>
		</Wrapper>
	);
};

export default Portfolio;
