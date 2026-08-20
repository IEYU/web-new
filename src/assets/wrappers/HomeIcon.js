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
		position: relative;
	}

	.home-img,
	.home-text {
		position: absolute;
		inset: 0;
		margin: auto;
		object-fit: contain;
		transition: opacity 0.08s ease-out;
		will-change: opacity;
	}

	.home-img {
		width: auto;
		height: min(100%, 100px);
		opacity: 1;
	}

	.home-text {
		width: 100%;
		height: auto;
		opacity: 0;
	}

	.home-text.recently-text {
		width: 114%;
		transform: translateY(0.3rem);
	}

	.home-icon-container:hover .home-img {
		opacity: 0;
	}

	.home-icon-container:hover .home-text {
		opacity: 1;
	}
`;

export default Wrapper;
