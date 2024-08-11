import styled from "styled-components";

import cursor1 from "../images/marioCursor2Smaller.png";
import cursor2 from "../images/marioCursorSmaller.png";

const Wrapper = styled.section`
	/* Content container with centered text and fixed image */
	cursor: url(${cursor2}) 18 18, auto;

	a:hover {
		cursor: url(${cursor1}) 18 18, auto;
	}
	height: 100vh;
	display: flex;
	flex-direction: column;
	gap: 2rem;

	.content-container {
		display: flex;
		flex: 1;
		flex-direction: row; /* Arrange image and text horizontally */
		flex-wrap: wrap;
		justify-content: center; /* Center the content horizontally */
		flex-wrap: wrap;
		align-items: center;
		text-align: left;
		gap: 7rem;
		margin-left: 5%;
		margin-right: 5%;
	}

	.img-fluid {
		width: 20rem;
		border-radius: 50px;
		filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.2));
	}

	/* Text styling */
	.text-content {
		text-align: left;
		min-width: 50%;
	}
`;

export default Wrapper;
