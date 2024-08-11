import styled from "styled-components";

const Wrapper = styled.section`
	.card {
		height: 20rem;
		width: 20rem;
		border: 0;
		border-radius: 40px;
		box-shadow: 0 0 0.75rem rgba(0, 0, 0, 0.2);
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden; /* Ensure content stays within the card boundaries */
	}

	.card-img-top {
		width: 100%;
		height: 100%;
		border-radius: 40px;
		position: absolute; /* Make the image fixed in place */
		top: 0;
		left: 0;
		transition: opacity 0.2s ease; /* Smooth transition for opacity */
	}

	.card-hover-text {
		background: none;
		visibility: hidden;
		position: absolute;
		top: 45%;
		left: 50%;
		text-align: center;
		transform: translate(-50%, -50%);
		font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
			sans-serif;
		font-size: 1.7rem;
		color: #2a272a;
		width: 80%;
	}

	.card:hover .card-img-top {
		opacity: 0.15;
	}

	.card:hover .card-hover-text {
		visibility: visible;
	}
`;

export default Wrapper;
