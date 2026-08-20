import styled from "styled-components";

import backgroundImage from "../images/kirbybg.jpg";
import cursor1 from "../images/marioCursor2Smaller32.png";
import cursor2 from "../images/marioCursorSmaller32.png";

const Wrapper = styled.section`
	cursor:
		url(${cursor2}) 16 16,
		none;
	height: 100dvh;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	background:
		linear-gradient(rgba(255, 253, 247, 0.5), rgba(255, 253, 247, 0.9)),
		url(${backgroundImage});
	background-size: cover;
	background-position: center;
	background-attachment: fixed;

	a,
	button {
		cursor:
			url(${cursor1}) 16 16,
			none;
	}

	> *:first-child,
	> *:last-child {
		flex-shrink: 0;
	}

	.content-container {
		flex: 1;
		min-height: 0;
		display: grid;
		grid-template-columns: minmax(14rem, 22rem) minmax(0, 1fr);
		align-items: center;
		align-content: center;
		gap: clamp(1.5rem, 4vw, 4rem);
		width: min(1280px, calc(100% - 2rem));
		margin: 0 auto;
		padding: clamp(0.75rem, 2.5vh, 1.75rem) 0;
		box-sizing: border-box;
	}

	.photo-card,
	.text-content {
		background: rgba(255, 255, 255, 0.18);
		border: 0.5px solid rgba(255, 255, 255, 0.46);
		border-radius: 20px;
		box-shadow:
			0 1px 2px rgba(37, 34, 42, 0.08),
			0 18px 48px rgba(37, 34, 42, 0.14);
		backdrop-filter: blur(28px) saturate(1.35);
		-webkit-backdrop-filter: blur(28px) saturate(1.35);
	}

	.photo-card {
		display: flex;
		width: 100%;
		aspect-ratio: 1;
		padding: 0.65rem;
		box-sizing: border-box;
	}

	.img-fluid {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 14px;
		display: block;
	}

	.text-content {
		display: flex;
		align-items: center;
		text-align: left;
		width: 100%;
		height: auto;
		align-self: stretch;
		max-width: 54rem;
		padding: clamp(1.25rem, 3vw, 2rem);
		box-sizing: border-box;
	}

	@media (max-width: 760px) {
		.content-container {
			grid-template-columns: 1fr;
			grid-template-rows: minmax(0, 0.75fr) minmax(0, 1.25fr);
			gap: 0.75rem;
			padding: 0.75rem 0;
		}

		.photo-card {
			width: min(10rem, 42vw);
			max-height: 100%;
			margin: 0 auto;
			padding: 0.45rem;
		}

		.img-fluid {
			max-height: 100%;
		}

		.text-content {
			align-self: stretch;
			height: auto;
			overflow: hidden;
			padding: 0.9rem 1rem;
		}
	}
`;

export default Wrapper;
