import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/TabIcon";

const TabIcon = ({ img1, img2, link, externalLink }) => {
	return (
		<Wrapper>
			<NavLink
				to={externalLink ? externalLink : `./${link}`}
				className="icon-container"
				end /* This ensures that only exact matches are active */
			>
				{({ isActive }) => (
					<img
						src={isActive ? img2 : img1}
						className="icon"
						alt="icon"
					/>
				)}
			</NavLink>
		</Wrapper>
	);
};
export default TabIcon;
