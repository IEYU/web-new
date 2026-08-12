import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/TabIcon";

const TabIcon = ({ img1, img2, link, externalLink }) => {
	if (externalLink) {
		return (
			<Wrapper>
				<a
					href={externalLink}
					className="icon-container external"
					target="_blank"
					rel="noreferrer"
				>
					<img src={img1} className="icon" alt="" />
				</a>
			</Wrapper>
		);
	}

	return (
		<Wrapper>
			<NavLink
				to={link}
				className={({ isActive }) =>
					isActive ? "icon-container active" : "icon-container"
				}
				end /* This ensures that only exact matches are active */
			>
				{({ isActive }) => (
					<img
						src={isActive ? img2 : img1}
						className="icon"
						alt=""
					/>
				)}
			</NavLink>
		</Wrapper>
	);
};
export default TabIcon;
