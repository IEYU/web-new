import styled from "styled-components";
import cursor1 from "../images/marioCursor2Smaller.png";

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	gap: 3rem;
	background-color: rgba(255, 255, 255, 0.35);
	border-radius: 2rem;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	border: 1px solid rgba(255, 255, 255, 0.3);
	padding: 2rem;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	cursor: url(${cursor1}) 18 18, auto;

	.icon-grid {
		display: flex;
		flex-direction: row;
		gap: 5rem; /* Adjust spacing between icons */
		justify-content: center; /* Center items horizontally */
		align-items: center; /* Center items vertically */
		padding: 20px; /* Optional padding for the grid container */
		height: 100vh; /* Make the grid container take full viewport height */
		width: 100%; /* Ensure the grid container takes full width */
		height: fit-content;
		width: fit-content;
		/* background-color: black; */
	}
`;

export default Wrapper;
