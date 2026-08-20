import styled from "styled-components";
import backgroundImage from "../images/mariobg.jpg";
import cursor1 from "../images/marioCursor2Smaller32.png";
import cursor2 from "../images/marioCursorSmaller32.png";

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	min-height: 100dvh;
	background:
		linear-gradient(rgba(255, 253, 247, 0.5), rgba(255, 253, 247, 0.9)),
		url(${backgroundImage});
	background-size: cover;
	background-position: center;
	background-attachment: fixed;

	&::before {
		content: none;
	}
	z-index: 1;
	cursor:
		url(${cursor2}) 16 16,
		none;
	a,
	button {
		cursor:
			url(${cursor1}) 16 16,
			none;
	}
	.placeholder {
		flex: 1;
		width: min(1440px, calc(100% - 2rem));
		margin: 0 auto;
		padding: clamp(1.5rem, 4vw, 3.5rem) 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export default Wrapper;
