import styled from "styled-components";

const Wrapper = styled.section`
	.home-icon-container {
		width: 7rem;
		height: 7rem;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 20%;
		overflow: hidden;
		text-align: center;
		transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
		position: relative; /* Ensure positioning context for absolute children */
	}

	.home-img {
		width: auto;
		height: 100%;
		height: 100px;
		transition: opacity 0.3s ease; /* Smooth transition for image opacity */
	}

	.home-text {
		height: auto;
		width: 100%;
		bottom: -20px; /* Position text below the container */
		transition: color 0.3s ease; /* Smooth transition for text color */
	}

	.home-icon-container:hover .home-text {
		color: black; /* Change text color on hover */
	}
`;

export default Wrapper;
