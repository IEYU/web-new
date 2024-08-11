import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import SocialMediaBar from "./SocialMediaBar";
import SocialMediaIcon from "./SocialMediaIcon";
import Quote from "./Quote";

const FooterWrapper = styled.footer`
	text-align: center;
	color: white;
	background-color: #2a272a;
	padding: 1rem 0;

	.signature {
		opacity: 0.25;
		font-size: smaller;
	}

	.icon-bar {
		flex: 1;
		justify-content: center;
		display: flex;
		gap: 10px;
		padding-right: 0.7rem;
		margin-bottom: 1rem;
		opacity: 0.25;
	}

	.quote {
		flex: 1;
		display: flex;
		justify-content: center; /* Centers horizontally */
		margin-bottom: 1rem;
		margin-left: 15rem;
		margin-right: 15rem;
	}
`;

const Footer = ({ text }) => {
	return (
		<FooterWrapper>
			{/* Quote */}
			<div className="quote">
				{" "}
				<Quote text={text} />{" "}
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
				<p>© 2024 Maggie Gong. All Rights Reserved</p>
			</div>
		</FooterWrapper>
	);
};

export default Footer;
