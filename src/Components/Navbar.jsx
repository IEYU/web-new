import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Navbar";
import SocialMediaIcon from "./SocialMediaIcon";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import snoopy from "../assets/images/snoopy.png";
import TabIcon from "./TabIcon";
import about_white from "../assets/images/navbar/about_white.png";
import about_colour from "../assets/images/navbar/about_colour.png";
import home_white from "../assets/images/navbar/home_white.png";
import home_colour from "../assets/images/navbar/home_colour.png";
import portfolio_white from "../assets/images/navbar/portfolio_white.png";
import portfolio_colour from "../assets/images/navbar/portfolio_colour.png";
import skills_white from "../assets/images/navbar/skills_white.png";
import skills_colour from "../assets/images/navbar/skills_colour.png";
import blog_white from "../assets/images/navbar/blog_white.png";
import blog_colour from "../assets/images/navbar/blog_colour.png";
import AnimatedCursor from "react-animated-cursor";

const Navbar = () => {
	return (
		<Wrapper>
			{/* brand image */}
			<Link to={"../"}>
				<img src={snoopy} className="navbar-brand" alt="snoopy" />
			</Link>
			{/* tab buttons */}
			<div className="tab-bar">
				<TabIcon img1={home_white} img2={home_colour} link={"../"} />
				<TabIcon
					img1={about_white}
					img2={about_colour}
					link={"../about"}
				/>
				<TabIcon
					img1={skills_white}
					img2={skills_colour}
					link={"../skills"}
				/>
				<TabIcon
					img1={portfolio_white}
					img2={portfolio_colour}
					link={"../portfolio"}
				/>
				<TabIcon
					img1={blog_white}
					img2={blog_colour}
					externalLink={"https://blog.maggie-gong.com"}
				/>
			</div>
			{/* social media links */}
			<div className="icon-bar">
				<SocialMediaIcon
					icon={FaGithub}
					link={"https://github.com/IEYU"}
				/>
				<SocialMediaIcon
					icon={FaLinkedin}
					link={"https://www.linkedin.com/in/yiyugong"}
				/>
				<SocialMediaIcon
					icon={FaInstagram}
					link={"https://www.instagram.com/mag_gyy_g"}
				/>
			</div>
		</Wrapper>
	);
};
export default Navbar;
