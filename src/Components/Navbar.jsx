import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Navbar";
import bluePikmin from "../assets/images/bluePikmin.png";
import redPikmin from "../assets/images/redPikmin.png";
import yellowPikmin from "../assets/images/yellowPikmin.png";
import rockPikmin from "../assets/images/rockPikmin.png";
import tree from "../assets/images/tree.png";
import TabIcon from "./TabIcon";

const Navbar = () => {
	return (
		<Wrapper>
			<Link to="/" className="brand" aria-label="Home">
				<img src={tree} className="navbar-brand" alt="Return home" />
			</Link>
			<nav className="tab-bar" aria-label="Primary navigation">
				<TabIcon image={yellowPikmin} label="About me" link="/about" />
				<TabIcon
					image={redPikmin}
					label="Portfolio"
					link="/portfolio"
				/>
				<TabIcon image={rockPikmin} label="Recently" link="/recently" />
				<TabIcon
					image={bluePikmin}
					label="Blog"
					externalLink={"https://ieyu.github.io"}
				/>
			</nav>
			<div className="nav-balance" aria-hidden="true" />
		</Wrapper>
	);
};
export default Navbar;
