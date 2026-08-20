import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/TabIcon";

const TabIcon = ({ image, label, link, externalLink }) => {
	const content = (
		<>
			<img src={image} className="tab-pikmin" alt="" aria-hidden="true" />
			<span>{label}</span>
		</>
	);

	if (externalLink) {
		return (
			<Wrapper>
				<a
					href={externalLink}
					className="icon-container external"
					target="_blank"
					rel="noreferrer"
				>
					{content}
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
				{content}
			</NavLink>
		</Wrapper>
	);
};
export default TabIcon;
