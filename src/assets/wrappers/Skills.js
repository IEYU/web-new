import styled from "styled-components";
import backgroundImage from "../images/mariobg.jpg";
import cursor1 from "../images/marioCursor2Smaller.png";
import cursor2 from "../images/marioCursorSmaller.png";

const Wrapper = styled.section`
	display: flex;
	cursor: default;
	flex-direction: column;
	height: 100vh; /* Full height of the viewport */
	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url(${backgroundImage});
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		opacity: 0.8;
		z-index: -1; /* Send the pseudo-element behind the content */
	}
	z-index: 1;
	cursor: url(${cursor2}) 18 18, auto;
	a:hover {
		cursor: url(${cursor1}) 18 18, auto;
	}
	.placeholder {
		flex: 1; /* Allow the slider container to take up all available vertical space */
		width: 90%;
		margin: auto;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export default Wrapper;
