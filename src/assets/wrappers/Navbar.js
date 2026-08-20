import styled from "styled-components";

const Wrapper = styled.section`
	display: grid;
	grid-template-columns: 4.1rem minmax(0, 1fr) 4.1rem;
	position: relative;
	isolation: isolate;
	background: linear-gradient(
		135deg,
		rgba(250, 244, 228, 0.9),
		rgba(255, 251, 242, 0.94)
	);
	border-bottom: 0;
	box-shadow: 0 10px 28px rgba(37, 34, 42, 0.07);
	backdrop-filter: blur(18px) saturate(1.2);
	-webkit-backdrop-filter: blur(18px) saturate(1.2);
	min-height: 4.85rem;
	padding: 0.45rem clamp(0.85rem, 2.5vw, 2.1rem);
	align-items: center;
	gap: 1rem;

	&::before {
		content: none;
	}

	.brand {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 4.1rem;
		height: 3.55rem;
		flex: 0 0 auto;
		position: relative;
		background: transparent;
		border: 0;
		border-radius: 0;
		box-shadow: none;
		overflow: visible;
		transition: transform 0.18s ease;
	}

	.brand::before {
		content: none;
	}

	.brand:hover,
	.brand:focus-visible {
		transform: scale(1.04);
		outline: none;
	}

	.navbar-brand {
		position: relative;
		z-index: 1;
		display: block;
		width: 4.75rem;
		height: auto;
		max-width: none;
		object-fit: contain;
		opacity: 0.85;
		mix-blend-mode: normal;
		transform: scale(1.08);
		transform-origin: center;
		transition: transform 0.18s ease;
	}

	.brand:hover .navbar-brand,
	.brand:focus-visible .navbar-brand {
		transform: scale(1.16);
	}

	.tab-bar {
		justify-self: center;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: clamp(0.18rem, 0.55vw, 0.4rem);
		padding: 0.2rem;
		box-sizing: border-box;
		background: rgba(255, 255, 255, 0.46);
		border: 1px solid rgba(255, 255, 255, 0.76);
		border-radius: 14px;
		box-shadow: 0 8px 22px rgba(37, 34, 42, 0.06);
		backdrop-filter: blur(14px) saturate(1.2);
		-webkit-backdrop-filter: blur(14px) saturate(1.2);
		max-width: 100%;
	}

	.nav-balance {
		width: 4.1rem;
		height: 1px;
	}

	@media (max-width: 760px) {
		grid-template-columns: 3.2rem minmax(0, 1fr);
		padding: 0.45rem 0.5rem;
		gap: 0.45rem;

		.brand {
			width: 3.2rem;
			height: 3.25rem;
		}

		.navbar-brand {
			width: 3.85rem;
			height: auto;
			max-width: none;
		}

		.tab-bar {
			justify-self: stretch;
			justify-content: flex-start;
			padding: 0.18rem;
			border-radius: 12px;
			overflow-x: auto;
			scrollbar-width: none;
			-webkit-overflow-scrolling: touch;
		}

		.tab-bar::-webkit-scrollbar {
			display: none;
		}

		.nav-balance {
			display: none;
		}
	}
`;

export default Wrapper;
