import styled from "styled-components";

const Blockquote = styled.blockquote`
	font-family: var(--font-sans);
	font-size: clamp(0.95rem, 1.35vw, 1.12rem);
	font-weight: 650;
	line-height: 1.45;
	color: var(--ink);
	padding: 0.75rem clamp(1rem, 4vw, 3rem);
	position: relative;
	background: rgba(255, 255, 255, 0.7);
	border: 1px solid var(--line);
	border-radius: 16px;
	box-shadow: 0 12px 28px rgba(37, 34, 42, 0.07);
	width: 100%;
	max-width: 52rem;
	box-sizing: border-box;
	margin: 0;
`;

const Quote = ({ text }) => {
	return (
		<Blockquote>
			<q>{text}</q>
		</Blockquote>
	);
};

export default Quote;
