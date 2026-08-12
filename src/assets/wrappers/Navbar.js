import styled from "styled-components";

const Wrapper = styled.section`
	display: flex;
	position: relative;
	isolation: isolate;
	background: linear-gradient(135deg, #fffbea, #f6e4ae);
	border-bottom: 2px solid #2a272a;
	box-shadow:
		0 3px 0 rgba(216, 174, 92, 0.72),
		0 10px 22px rgba(42, 39, 42, 0.12);
	min-height: 5.9rem;
	padding: 0.85rem clamp(0.75rem, 3vw, 2rem);
	align-items: center;
	justify-content: space-between;
	gap: clamp(0.75rem, 2vw, 1.75rem);

	&::before {
		content: "";
		position: absolute;
		inset: 0.5rem;
		z-index: -1;
		border: 1px dashed rgba(42, 39, 42, 0.28);
		border-radius: 18px;
		pointer-events: none;
	}

	.brand {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 4.25rem;
		height: 4.25rem;
		flex: 0 0 auto;
		background: #fdfbf0;
		border: 2px solid #2a272a;
		border-radius: 50%;
		box-shadow:
			inset 0 -4px 0 rgba(238, 205, 122, 0.24),
			0 3px 0 #2a272a;
		transition:
			transform 0.18s ease,
			box-shadow 0.18s ease;
	}

	.brand:hover {
		transform: translateY(-3px) rotate(-4deg);
		box-shadow:
			inset 0 -4px 0 rgba(238, 205, 122, 0.24),
			0 5px 0 #2a272a;
	}

	.navbar-brand {
		display: block;
		width: 3rem;
		height: 3rem;
		object-fit: contain;
	}

	.tab-bar {
		flex: 1 1 auto;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		gap: clamp(0.45rem, 1.4vw, 1.25rem);
		flex-wrap: wrap;
		padding: 0.5rem clamp(0.75rem, 2.5vw, 2rem);
		box-sizing: border-box;
		background: #fdfbf0;
		border: 2px solid #2a272a;
		border-radius: 24px;
		box-shadow:
			inset 0 -4px 0 rgba(151, 185, 112, 0.16),
			0 3px 0 #2a272a;
	}

	.icon-bar {
		flex: 0 0 auto;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 0.55rem;
	}

	.icon-bar .icon-container {
		width: 2.85rem;
		height: 2.85rem;
		background: #8abfd1;
		border: 2px solid #2a272a;
		border-radius: 50%;
		box-shadow: 0 3px 0 #2a272a;
		transition:
			transform 0.16s ease,
			background-color 0.16s ease,
			box-shadow 0.16s ease;
	}

	.icon-bar .icon-container:hover {
		background: #eaa09a;
		transform: translateY(-3px);
		box-shadow: 0 5px 0 #2a272a;
	}

	.icon-bar > :nth-child(4n + 1) .icon-container:hover {
		background: #8abfd1;
	}

	.icon-bar > :nth-child(4n + 2) .icon-container:hover {
		background: #f4d77e;
	}

	.icon-bar > :nth-child(4n + 3) .icon-container:hover {
		background: #eaa09a;
	}

	.icon-bar > :nth-child(4n) .icon-container:hover {
		background: #b8d88f;
	}

	.icon-bar .icon {
		width: 58%;
		height: 58%;
		color: #fffaf0;
	}

	@media (max-width: 760px) {
		align-items: stretch;
		flex-wrap: wrap;
		padding: 0.65rem;

		.brand {
			width: 3.45rem;
			height: 3.45rem;
		}

		.navbar-brand {
			width: 2.45rem;
			height: 2.45rem;
		}

		.tab-bar {
			order: 3;
			width: 100%;
			padding: 0.45rem;
			border-radius: 18px;
		}

		.icon-bar {
			margin-left: auto;
		}

		.icon-bar .icon-container {
			width: 2.55rem;
			height: 2.55rem;
		}
	}
`;

export default Wrapper;
