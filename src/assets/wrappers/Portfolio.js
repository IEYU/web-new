import styled from "styled-components";
import cursor1 from "../images/marioCursor2Smaller.png";
import cursor2 from "../images/marioCursorSmaller.png";

const Wrapper = styled.section`
	cursor: url(${cursor2}) 18 18, auto;

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
`;

export default Wrapper;
