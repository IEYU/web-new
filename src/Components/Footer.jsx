import styled from "styled-components";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import SocialMediaIcon from "./SocialMediaIcon";
import Quote from "./Quote";

const FooterWrapper = styled.footer`
	position: relative;
	isolation: isolate;
	text-align: center;
	color: #2a272a;
	background: linear-gradient(135deg, #fffbea, #f6e4ae);
	border-top: 2px solid #2a272a;
	box-shadow:
		0 -3px 0 rgba(216, 174, 92, 0.72),
		0 -10px 22px rgba(42, 39, 42, 0.1);
	padding: 1.4rem clamp(1rem, 4vw, 3rem) 1rem;

	&::before {
		content: "";
		position: absolute;
		inset: 0.55rem;
		z-index: -1;
		border: 1px dashed rgba(42, 39, 42, 0.28);
		border-radius: 18px;
		pointer-events: none;
	}

	.signature {
		font-size: 0.82rem;
		font-weight: 700;
		letter-spacing: 0;
		color: rgba(42, 39, 42, 0.82);
		opacity: 1;
	}

	.signature p {
		margin: 0;
	}

	.icon-bar {
		justify-content: center;
		display: flex;
		gap: 0.85rem;
		margin-bottom: 0.9rem;
	}

	.icon-bar .icon-container {
		width: 2.9rem;
		height: 2.9rem;
		background: #8abfd1;
		border: 2px solid #2a272a;
		border-radius: 50%;
		box-shadow: 0 3px 0 #2a272a;
		transition:
			transform 0.16s ease,
			background-color 0.16s ease,
			box-shadow 0.16s ease;
	}

	.icon-bar .icon-container:hover {
		background: #eaa09a;
		transform: translateY(-3px);
		box-shadow: 0 5px 0 #2a272a;
	}

	.icon-bar > :nth-child(4n + 1) .icon-container:hover {
		background: #8abfd1;
	}

	.icon-bar > :nth-child(4n + 2) .icon-container:hover {
		background: #f4d77e;
	}

	.icon-bar > :nth-child(4n + 3) .icon-container:hover {
		background: #eaa09a;
	}

	.icon-bar > :nth-child(4n) .icon-container:hover {
		background: #b8d88f;
	}

	.icon-bar .icon {
		width: 58%;
		height: 58%;
		color: #fffaf0;
	}

	.quote {
		display: flex;
		justify-content: center;
		margin: 0 auto 1.1rem;
		max-width: 58rem;
		padding: 0 clamp(0.25rem, 2vw, 1rem);
	}

	@media (max-width: 760px) {
		padding: 1.15rem 0.85rem 0.85rem;

		.icon-bar {
			gap: 0.55rem;
		}

		.icon-bar .icon-container {
			width: 2.55rem;
			height: 2.55rem;
		}
	}
`;

const Footer = ({ text }) => {
	return (
		<FooterWrapper>
			{/* Quote */}
			<div className="quote">
				<Quote text={text} />
			</div>

			{/* Icons */}
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
				<SocialMediaIcon
					icon={FaEnvelope}
					link={"mailto:maggiegongsh@gmail.com"}
				/>
			</div>

			{/* Signature */}
			<div className="signature">
				<p>© 2026 Maggie Gong. All Rights Reserved</p>
			</div>
		</FooterWrapper>
	);
};

export default Footer;
