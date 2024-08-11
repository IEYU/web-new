import styled from "styled-components";

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	height: 100vh; /* Full height of the viewport */

	.slider-container {
		flex: 1; /* Allow the slider container to take up all available vertical space */
		width: 80%;
		margin: auto;
		padding-left: 5%;
		padding-right: 5%;
	}

	.slick-slide h3 {
		color: white;
		padding: 40px;
		text-align: center;
		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
	}
`;

export default Wrapper;
