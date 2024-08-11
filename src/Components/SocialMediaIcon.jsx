import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/SocialMediaIcon";
import { FaGithub } from "react-icons/fa6";

const SocialMediaIcon = ({ icon: Icon, link }) => {
	return (
		<Wrapper>
			<Link to={link} target="blank" className="icon-container">
				<Icon className={"icon"} />
			</Link>
		</Wrapper>
	);
};
export default SocialMediaIcon;
