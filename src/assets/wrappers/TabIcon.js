import styled from "styled-components";

const Wrapper = styled.section`
	display: flex;
	justify-content: center;

	.icon-container {
		height: 2.8rem;
		width: auto;
		display: flex;
		transition:
			color 0.16s ease,
			box-shadow 0.16s ease;
		justify-content: center;
		align-items: center;
		border-radius: 11px;
		position: relative;
		gap: 0.4rem;
		padding: 0.2rem 0.9rem 0.2rem 0.55rem;
		background: transparent;
		border: 0;
		box-shadow: none;
		box-sizing: border-box;
		font-family: var(--font-sans);
		font-size: 0.86rem;
		font-weight: 720;
		letter-spacing: 0.01em;
		color: var(--ink-muted);
		text-decoration: none;
		overflow: hidden;
	}

	.tab-pikmin {
		position: relative;
		z-index: 1;
		width: 1.55rem;
		height: 2.35rem;
		flex: 0 0 auto;
		object-fit: contain;
		mix-blend-mode: multiply;
		transform-origin: center;
		transition: transform 0.18s ease;
	}

	.icon-container:hover .tab-pikmin,
	.icon-container:focus-visible .tab-pikmin,
	.icon-container.active .tab-pikmin {
		transform: scale(1.12);
	}

	.icon-container span {
		position: relative;
		z-index: 1;
		white-space: nowrap;
	}

	.icon-container.active,
	.icon-container:hover {
		color: var(--ink);
		box-shadow: 0 8px 18px rgba(37, 34, 42, 0.08);
	}

	.icon-container::before {
		content: "";
		position: absolute;
		inset: 0;
		z-index: 0;
		border-radius: inherit;
		opacity: 0;
		transform: scaleX(0.86);
		transform-origin: center;
		transition:
			opacity 0.16s ease,
			transform 0.16s ease;
	}

	.icon-container::after {
		content: none;
	}

	.icon-container.active::before,
	.icon-container:hover::before {
		opacity: 1;
		transform: scaleX(1);
	}

	&:nth-child(1) .icon-container::before {
		background: rgba(244, 215, 103, 0.45);
	}

	&:nth-child(2) .icon-container::before {
		background: rgba(239, 146, 135, 0.42);
	}

	&:nth-child(3) .icon-container::before {
		background: rgba(172, 217, 133, 0.44);
	}

	&:nth-child(4) .icon-container::before {
		background: rgba(121, 191, 211, 0.42);
	}

	@media (max-width: 760px) {
		.icon-container {
			height: 2.55rem;
			gap: 0.3rem;
			padding: 0.15rem 0.5rem 0.15rem 0.3rem;
			font-size: 0.74rem;
		}

		.tab-pikmin {
			width: 1.2rem;
			height: 2rem;
		}
	}
`;

export default Wrapper;
