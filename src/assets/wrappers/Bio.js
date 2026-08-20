import styled from "styled-components";

const Wrapper = styled.main`
	width: min(100%, 52rem);
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 1rem;
	font-family: var(--font-sans);
	font-size: clamp(1rem, 1.7vw, 1.2rem);
	font-weight: 500;
	box-sizing: border-box;

	.bio-lines {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		flex: 1;
		width: 100%;
		gap: 0.5rem;
	}

	.bio-line {
		margin: 0;
		line-height: 1.65;
		color: var(--ink);
		opacity: 0;
		transform: translateY(0.5rem);
		animation: revealBioLine 0.32s ease-out forwards;
		animation-delay: calc(var(--line-index) * 0.16s);
	}

	@keyframes revealBioLine {
		to {
			opacity: 1;
			transform: none;
		}
	}
`;

export default Wrapper;
