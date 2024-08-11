import styled from "styled-components";

const Wrapper = styled.section`
	display: flex;
	cursor: default;
	flex-direction: column;
	height: 100vh; /* Full height of the viewport */

	.placeholder {
		flex: 1; /* Allow the slider container to take up all available vertical space */
		width: 80%;
		margin: auto;
		padding-left: 5%;
		padding-right: 5%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export default Wrapper;
