import styled from "styled-components";
import cursor2 from "../images/marioCursorSmaller32.png";

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	gap: clamp(1rem, 2vw, 1.5rem);
	width: 100%;
	background: linear-gradient(
		135deg,
		rgba(255, 255, 255, 0.44),
		rgba(255, 253, 247, 0.2)
	);
	border-radius: 20px;
	backdrop-filter: blur(22px) saturate(1.35);
	-webkit-backdrop-filter: blur(22px) saturate(1.35);
	border: 1px solid rgba(255, 255, 255, 0.66);
	padding: clamp(1.25rem, 2.5vw, 2.25rem);
	box-shadow:
		inset 0 1px 0 rgba(255, 255, 255, 0.72),
		inset 0 -1px 0 rgba(255, 255, 255, 0.18),
		0 18px 48px rgba(37, 34, 42, 0.14);
	cursor: url(${cursor2}) 16 16, none;

	.icon-grid {
		display: grid;
		grid-template-columns: repeat(9, minmax(0, 1fr));
		gap: clamp(0.65rem, 1.5vw, 1.5rem);
		justify-items: center;
		align-items: center;
		width: 100%;
	}

	.icon-grid + .icon-grid {
		padding-top: clamp(1rem, 3vw, 2rem);
		border-top: 1px solid var(--line);
	}

	.icon-grid > * {
		display: grid;
		place-items: center;
		width: clamp(4rem, 8vw, 5.5rem);
		height: clamp(4rem, 8vw, 5.5rem);
		border-radius: 22px;
		background: linear-gradient(
			145deg,
			rgba(255, 255, 255, 0.48),
			rgba(255, 253, 247, 0.22)
		);
		border: 1px solid rgba(255, 255, 255, 0.62);
		box-shadow:
			inset 0 1px 0 rgba(255, 255, 255, 0.7),
			0 10px 24px rgba(37, 34, 42, 0.08);
		backdrop-filter: blur(12px) saturate(1.25);
		-webkit-backdrop-filter: blur(12px) saturate(1.25);
	}

	@media (max-width: 820px) {
		.icon-grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	.icon-grid svg {
		width: 72%;
		height: 72%;
	}
`;

export default Wrapper;
