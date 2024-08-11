import styled from "styled-components";

const Wrapper = styled.section`
	.icon-container {
		height: 2rem;
		width: 2rem;
		display: flex;
		border-radius: 20%;
		transition: background-color 0.2s ease;
		justify-content: center;
		align-items: center;
	}

	.icon-container:hover {
		background-color: rgba(
			249,
			249,
			249,
			0.15
		); /* Change background to frosted glass effect */
	}
	.icon {
		width: 60%;
		height: 60%;
		color: white;
	}
`;

export default Wrapper;
