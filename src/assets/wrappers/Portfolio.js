import styled from "styled-components";
import cursor1 from "../images/marioCursor2Smaller.png";
import cursor2 from "../images/marioCursorSmaller.png";

const Wrapper = styled.section`
	cursor: url(${cursor2}) 18 18, auto;
	min-height: 100dvh;
	background: #fcfbf7;

	a:hover {
		cursor: url(${cursor1}) 18 18, auto;
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
	}
`;

export default Wrapper;
