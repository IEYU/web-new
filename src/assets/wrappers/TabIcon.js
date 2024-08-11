import styled from "styled-components";

const Wrapper = styled.section`
	.icon-container {
		height: 1.5rem;
		width: auto;
		display: flex;
		transition: background-color 0.2s ease;
		justify-content: center;
		align-items: center;
		border-radius: 10px;
		position: relative; /* Needed for the pseudo-element */
		padding: 0.5rem 0.1rem; /* Increase padding to make the shadow area larger */
	}

	.icon-container:hover {
		background-color: rgba(249, 249, 249, 0.15);
		border-radius: 10px;
	}

	.icon-container::after {
		content: "";
		position: absolute;
		bottom: 5px; /* Position the line inside the shaded area */
		left: 10%;
		right: 10%;
		height: 2px;
		background-color: white;
		transform: scaleX(0);
		transition: transform 0.2s ease;
	}

	.icon-container:hover::after {
		transform: scaleX(1); /* Expand the line on hover */
	}

	.icon {
		width: 80%;
		height: 60%;
		color: white;
	}
`;

export default Wrapper;
