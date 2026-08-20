import styled from "styled-components";

const Wrapper = styled.section`
	width: auto;
	max-width: 100%;
	height: 100%;
	max-height: 100%;
	aspect-ratio: 1 / 1.24;

	.card {
		height: 100%;
		width: 100%;
		background: linear-gradient(
			145deg,
			rgba(255, 255, 255, 0.48),
			rgba(255, 253, 247, 0.22)
		);
		border: 0;
		border-radius: 20px;
		box-shadow: none;
		backdrop-filter: blur(12px) saturate(1.25);
		-webkit-backdrop-filter: blur(12px) saturate(1.25);
		padding: 0;
		box-sizing: border-box;
		position: relative;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		text-decoration: none;
		isolation: isolate;
		transform: translateZ(0);
		transition:
			transform 0.16s ease,
			background-color 0.16s ease;
	}

	.card-img-top {
		flex: 0 0 auto;
		width: 100%;
		height: auto;
		aspect-ratio: 1;
		object-fit: cover;
		background: var(--surface-solid);
		border: 0;
		border-bottom: 0;
		border-radius: 19px 19px 0 0;
		box-sizing: border-box;
	}

	.placeholder-image {
		display: grid;
		place-items: center;
		background:
			radial-gradient(circle at 30% 25%, rgba(255, 255, 255, 0.72), transparent 38%),
			linear-gradient(135deg, rgba(121, 191, 211, 0.5), rgba(244, 215, 103, 0.52));
	}

	.placeholder-image span {
		font-family: var(--font-sans);
		font-size: clamp(3rem, 7vw, 5.5rem);
		font-weight: 760;
		color: rgba(37, 34, 42, 0.48);
		filter: drop-shadow(0 3px 0 rgba(255, 255, 255, 0.45));
	}

	.card-hover-text {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 100%;
		width: 100%;
		margin: 0;
		padding: 0.25rem 0.4rem;
		text-align: center;
		font-family: "Trebuchet MS", var(--font-sans);
		font-size: clamp(0.68rem, 0.78vw, 0.82rem);
		line-height: 1.1;
		font-weight: 700;
		color: var(--ink);
		box-sizing: border-box;
	}

	.card-img-overlay {
		position: relative;
		flex: 1 0 3.25rem;
		min-height: 3.25rem;
		display: grid;
		place-items: center;
		width: 100%;
		background: linear-gradient(
			135deg,
			rgba(255, 255, 255, 0.48),
			rgba(255, 253, 247, 0.24)
		);
		border: 0;
		border-radius: 0 0 19px 19px;
		backdrop-filter: blur(12px) saturate(1.25);
		-webkit-backdrop-filter: blur(12px) saturate(1.25);
		box-sizing: border-box;
	}

	.card-skills-overlay {
		position: absolute;
		inset: -2px;
		z-index: 2;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
		padding: 1rem;
		background:
			linear-gradient(
				135deg,
				rgba(255, 255, 255, 0.72),
				rgba(255, 253, 247, 0.58)
			);
		border: 0;
		border-radius: 22px;
		backdrop-filter: blur(18px) saturate(1.4);
		-webkit-backdrop-filter: blur(18px) saturate(1.4);
		opacity: 0;
		pointer-events: none;
		transition: opacity 0.18s ease;
		will-change: opacity;
	}

	.card-skills-overlay p {
		margin: 0;
		font-family: var(--font-sans);
		font-size: 0.78rem;
		font-weight: 800;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--ink);
	}

	.card-skills-overlay ul {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 0.42rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.card-skills-overlay li {
		padding: 0.35rem 0.58rem;
		background: rgba(255, 255, 255, 0.55);
		border: 1px solid rgba(255, 255, 255, 0.72);
		border-radius: 999px;
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.78);
		font-family: var(--font-sans);
		font-size: clamp(0.68rem, 0.8vw, 0.78rem);
		font-weight: 700;
		line-height: 1;
		color: var(--ink);
	}

	.skills-fallback {
		font-family: var(--font-sans);
		font-size: 0.82rem;
		font-weight: 700;
		color: var(--ink-muted);
	}

	.card:hover {
		transform: translateY(-4px);
		box-shadow: none;
		background: rgba(255, 255, 255, 0.72);
	}

	.card:hover .card-skills-overlay,
	.card:focus-visible .card-skills-overlay {
		opacity: 1;
	}

	&:nth-child(4n + 1) .card:hover {
		background: rgba(255, 255, 255, 0.72);
	}

	&:nth-child(4n + 2) .card:hover {
		background: rgba(255, 255, 255, 0.72);
	}

	&:nth-child(4n + 3) .card:hover {
		background: rgba(255, 255, 255, 0.72);
	}

	&:nth-child(4n) .card:hover {
		background: rgba(255, 255, 255, 0.72);
	}

	@media (max-width: 760px) {
		aspect-ratio: 1 / 1.28;

		.card-img-overlay {
			flex-basis: 2.75rem;
			min-height: 2.75rem;
		}

		.card-hover-text {
			padding: 0.4rem;
			font-size: 0.72rem;
		}

		.card-skills-overlay {
			gap: 0.45rem;
			padding: 0.55rem;
		}

		.card-skills-overlay li {
			padding: 0.28rem 0.4rem;
			font-size: 0.62rem;
		}
	}
`;

export default Wrapper;
