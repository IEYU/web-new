import Wrapper from "../assets/wrappers/SocialMediaIcon";

const SocialMediaIcon = ({ icon: Icon, link }) => {
	return (
		<Wrapper>
			<a
				href={link}
				target="_blank"
				rel="noreferrer"
				className="icon-container"
			>
				<Icon className={"icon"} />
			</a>
		</Wrapper>
	);
};
export default SocialMediaIcon;
