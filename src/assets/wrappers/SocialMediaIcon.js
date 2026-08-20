import styled from "styled-components";

const Wrapper = styled.section`
	.icon-container {
		height: 2rem;
		width: 2rem;
		display: flex;
		border-radius: 50%;
		transition: background-color 0.2s ease;
		justify-content: center;
		align-items: center;
	}

	.icon-container:hover {
		background-color: rgba(255, 255, 255, 0.22);
	}
	.icon {
		width: 60%;
		height: 60%;
		color: white;
	}
`;

export default Wrapper;
