import styled from "styled-components";

const Wrapper = styled.section`
	width: min(1320px, calc(100% - 2rem));
	height: 100%;
	min-height: 0;
	margin: 0 auto;
	padding: clamp(0.35rem, 1vh, 0.75rem) 0;
	overflow: hidden;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;

	.portfolio-pages {
		display: flex;
		flex: 1;
		min-height: 0;
		width: 100%;
		overflow-x: auto;
		overflow-y: hidden;
		scroll-snap-type: x mandatory;
		scroll-behavior: auto;
		overscroll-behavior: contain;
		scrollbar-width: none;
		-webkit-overflow-scrolling: touch;
	}

	.portfolio-pages::-webkit-scrollbar {
		display: none;
	}

	.portfolio-page {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, min(16rem, 23vw)));
		grid-template-rows: repeat(2, minmax(0, 1fr));
		column-gap: clamp(0.8rem, 1.4vw, 1.25rem);
		row-gap: clamp(0.75rem, 1.5vh, 1rem);
		width: 100%;
		height: 100%;
		flex: 0 0 100%;
		min-width: 0;
		justify-items: center;
		justify-content: center;
		align-items: center;
		padding: 0.5rem 0.25rem;
		box-sizing: border-box;
		scroll-snap-align: start;
		scroll-snap-stop: always;
	}

	.page-indicator {
		flex: 0 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
		align-self: center;
		gap: 0.55rem;
		margin-top: 0.25rem;
		padding: 0.42rem 0.62rem;
		background: rgba(255, 255, 255, 0.5);
		border: 1px solid rgba(255, 255, 255, 0.68);
		border-radius: 999px;
		box-shadow:
			inset 0 1px 0 rgba(255, 255, 255, 0.74),
			0 8px 20px rgba(37, 34, 42, 0.12);
		backdrop-filter: blur(14px) saturate(1.25);
		-webkit-backdrop-filter: blur(14px) saturate(1.25);
	}

	.page-dot {
		width: 0.68rem;
		height: 0.68rem;
		padding: 0;
		border: 1px solid rgba(37, 34, 42, 0.34);
		border-radius: 999px;
		background: rgba(37, 34, 42, 0.18);
		box-shadow: none;
		cursor: pointer;
		transition:
			width 0.2s ease,
			background-color 0.2s ease;
	}

	.page-dot.active {
		width: 1.7rem;
		background: rgba(37, 34, 42, 0.68);
	}

	.portfolio-status {
		margin: auto;
		padding: 3rem 1rem;
		text-align: center;
		font-family: var(--font-sans);
		font-size: 1.1rem;
		color: var(--ink-muted);
	}

	@media (max-width: 760px) {
		.portfolio-page {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			grid-template-rows: repeat(4, minmax(0, 1fr));
			column-gap: 0.2rem;
			row-gap: 1.35rem;
			padding-top: 1.4rem;
		}
	}
`;

export default Wrapper;
