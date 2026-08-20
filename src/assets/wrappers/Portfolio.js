import styled from "styled-components";
import backgroundImage from "../images/zelda.jpg";
import cursor1 from "../images/marioCursor2Smaller32.png";
import cursor2 from "../images/marioCursorSmaller32.png";

const Wrapper = styled.section`
	cursor:
		url(${cursor2}) 16 16,
		none;
	height: 100dvh;
	overflow: hidden;
	background:
		linear-gradient(rgba(255, 253, 247, 0.5), rgba(255, 253, 247, 0.9)),
		url(${backgroundImage});
	background-size: cover;
	background-position: center;
	background-attachment: fixed;

	a,
	button {
		cursor:
			url(${cursor1}) 16 16,
			none;
	}
	display: flex;
	flex-direction: column;

	> *:first-child {
		flex-shrink: 0;
	}

	> *:last-child {
		flex-shrink: 0;
	}

	> *:nth-child(2) {
		flex: 1;
		min-height: 0;
	}
`;

export default Wrapper;
