import styled from "styled-components";
import cursor1 from "../images/marioCursor2Smaller.png";
import cursor2 from "../images/marioCursorSmaller.png";

const Wrapper = styled.section`
	cursor: url(${cursor2}) 18 18, auto;
	display: flex;
	flex-direction: column;
	min-height: 100dvh; /* full viewport height */

	a:hover {
		cursor: url(${cursor1}) 18 18, auto;
	}
	height: 100vh;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	/* Ensure that any potential header takes up its natural space */
	.header {
		flex-shrink: 0; /* Prevent the header from shrinking */
	}

	.slider {
		display: flex;
		flex: 1;
		flex-direction: row; /* Arrange image and text horizontally */
		justify-content: center; /* Center the content horizontally */
	}

	> *:first-child {
		flex-shrink: 0; /* navbar fixed height */
	}

	> *:last-child {
		flex-shrink: 0; /* footer fixed height */
	}

	> *:nth-child(2) {
		flex: 1; /* ProjectSlider grows to fill middle */
		display: flex; /* ensure it can center its content if needed */
	}
`;

export default Wrapper;
