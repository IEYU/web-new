import styled from "styled-components";

const Blockquote = styled.blockquote`
	font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
		sans-serif;
	font-size: clamp(1rem, 1.6vw, 1.25rem);
	font-weight: 700;
	line-height: 1.45;
	color: #2a272a;
	padding: 0.8rem clamp(1rem, 5vw, 4rem);
	position: relative;
	background: #fdfbf0;
	border: 2px solid #2a272a;
	border-radius: 20px;
	box-shadow:
		inset 0 -3px 0 rgba(151, 185, 112, 0.12),
		0 3px 0 #2a272a;
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
