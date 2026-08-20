import styled from "styled-components";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import SocialMediaIcon from "./SocialMediaIcon";
import Quote from "./Quote";

const FooterWrapper = styled.footer`
	position: relative;
	isolation: isolate;
	text-align: center;
	color: var(--ink);
	background: linear-gradient(
		135deg,
		rgba(250, 244, 228, 0.9),
		rgba(255, 251, 242, 0.94)
	);
	border-top: 1px solid var(--line);
	box-shadow: 0 -12px 32px rgba(37, 34, 42, 0.07);
	backdrop-filter: blur(18px) saturate(1.2);
	-webkit-backdrop-filter: blur(18px) saturate(1.2);
	padding: 1.15rem clamp(1rem, 4vw, 3rem) 0.9rem;

	&::before {
		content: none;
	}

	.signature {
		font-size: 0.78rem;
		font-weight: 650;
		letter-spacing: 0;
		color: var(--ink-muted);
	}

	.signature p {
		margin: 0;
	}

	.icon-bar {
		justify-content: center;
		display: flex;
		gap: 0.75rem;
		margin-bottom: 0.85rem;
	}

	.icon-bar .icon-container {
		width: 2.6rem;
		height: 2.6rem;
		background: rgba(121, 191, 211, 0.82);
		border: 1px solid rgba(37, 34, 42, 0.16);
		border-radius: 50%;
		box-shadow: 0 10px 22px rgba(37, 34, 42, 0.1);
		transition:
			transform 0.16s ease,
			background-color 0.16s ease,
			box-shadow 0.16s ease;
	}

	.icon-bar .icon-container:hover {
		background: var(--red);
		transform: translateY(-3px);
		box-shadow: 0 15px 28px rgba(37, 34, 42, 0.14);
	}

	.icon-bar > :nth-child(4n + 1) .icon-container:hover {
		background: var(--blue);
	}

	.icon-bar > :nth-child(4n + 2) .icon-container:hover {
		background: var(--yellow);
	}

	.icon-bar > :nth-child(4n + 3) .icon-container:hover {
		background: var(--red);
	}

	.icon-bar > :nth-child(4n) .icon-container:hover {
		background: var(--green);
	}

	.icon-bar .icon {
		width: 58%;
		height: 58%;
		color: #fffaf0;
	}

	.quote {
		display: flex;
		justify-content: center;
		margin: 0 auto 1rem;
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
