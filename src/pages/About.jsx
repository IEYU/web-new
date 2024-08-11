import Bio from "../Components/Bio";
import Navbar from "../Components/Navbar";
import Wrapper from "../assets/wrappers/About";
import selfie from "../assets/images/selfie.jpeg";
import Footer from "../Components/Footer";

const About = () => {
	return (
		<Wrapper>
			<Navbar />
			<div className="content-container">
				<img src={selfie} className="img-fluid" alt="Selfie" />
				<div className="text-content">
					<Bio />
				</div>
			</div>
			<Footer
				text={
					"You are here, at the start of a moment, on the edge of the world. Where the river meets the sea."
				}
				className="footer"
			/>
		</Wrapper>
	);
};
export default About;
