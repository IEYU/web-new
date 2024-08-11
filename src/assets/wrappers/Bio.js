import styled from "styled-components";

// Styled component for the typing effect container
const Wrapper = styled.main`
	width: fit-content; /* Set width */
	height: fit-content; /* Set height to make it a square */
	display: flex; /* Center content horizontally and vertically */
	font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
		sans-serif;
	font-size: large;
	font-weight: 400;
	overflow: hidden; /* Hide overflowing text */
	box-sizing: border-box; /* Include border and padding in the element's total width and height */
`;

export default Wrapper;
