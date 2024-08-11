import React from "react";
import styled from "styled-components";

const Blockquote = styled.blockquote`
	font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
		sans-serif;
	font-size: 1.2em;
	font-weight: 300;
	color: #2a272a;
	padding: 0.7rem 6rem;
	position: relative;
	color: white;
	background-color: rgba(249, 249, 249, 0.05);
	border-left: 5px solid white;
	width: fit-content;
`;

const Quote = ({ text }) => {
	return (
		<Blockquote>
			<q>{text}</q>
		</Blockquote>
	);
};

export default Quote;
