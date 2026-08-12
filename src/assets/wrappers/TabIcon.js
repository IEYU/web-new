import styled from "styled-components";

const Wrapper = styled.section`
	flex: 1 1 5.8rem;
	display: flex;
	justify-content: center;
	min-width: 5.2rem;

	.icon-container {
		height: 3.35rem;
		width: min(100%, 6.25rem);
		display: flex;
		transition:
			transform 0.16s ease,
			background-color 0.16s ease,
			box-shadow 0.16s ease;
		justify-content: center;
		align-items: center;
		border-radius: 16px;
		position: relative;
		padding: 0.45rem 0.65rem;
		background: #8abfd1;
		border: 2px solid #2a272a;
		box-shadow: 0 3px 0 #2a272a;
		box-sizing: border-box;
	}

	.icon-container.active,
	.icon-container:hover {
		background: #f4d77e;
		transform: translateY(-3px);
		box-shadow: 0 5px 0 #2a272a;
	}

	.icon-container.external:hover {
		background: #eaa09a;
		box-shadow: 0 5px 0 #2a272a;
	}

	&:nth-child(4n + 1) .icon-container.active,
	&:nth-child(4n + 1) .icon-container:hover {
		background: #8abfd1;
	}

	&:nth-child(4n + 2) .icon-container.active,
	&:nth-child(4n + 2) .icon-container:hover {
		background: #f4d77e;
	}

	&:nth-child(4n + 3) .icon-container.active,
	&:nth-child(4n + 3) .icon-container:hover {
		background: #eaa09a;
	}

	&:nth-child(4n) .icon-container.active,
	&:nth-child(4n) .icon-container:hover {
		background: #b8d88f;
	}

	&:nth-child(4n + 1) .icon-container.active::after,
	&:nth-child(4n + 1) .icon-container:hover::after {
		background: #8abfd1;
	}

	&:nth-child(4n + 2) .icon-container.active::after,
	&:nth-child(4n + 2) .icon-container:hover::after {
		background: #f4d77e;
	}

	&:nth-child(4n + 3) .icon-container.active::after,
	&:nth-child(4n + 3) .icon-container:hover::after {
		background: #eaa09a;
	}

	&:nth-child(4n) .icon-container.active::after,
	&:nth-child(4n) .icon-container:hover::after {
		background: #b8d88f;
	}

	.icon-container::before {
		content: "";
		position: absolute;
		top: 0.45rem;
		left: 0.7rem;
		width: 0.42rem;
		height: 0.42rem;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.75);
	}

	.icon-container::after {
		content: "";
		position: absolute;
		left: 50%;
		bottom: -0.72rem;
		width: 0.52rem;
		height: 0.52rem;
		border-right: 2px solid #2a272a;
		border-bottom: 2px solid #2a272a;
		background: #f4d77e;
		transform: translateX(-50%) rotate(45deg) scale(0);
		transition: transform 0.16s ease;
	}

	.icon-container.active::after {
		transform: translateX(-50%) rotate(45deg) scale(1);
	}

	.icon {
		width: 96%;
		height: 92%;
		object-fit: contain;
		filter: drop-shadow(0 1px 0 rgba(42, 39, 42, 0.24));
	}

	@media (max-width: 760px) {
		flex: 1 1 4.2rem;
		min-width: 3.8rem;

		.icon-container {
			width: min(100%, 4.7rem);
			height: 2.85rem;
			border-radius: 14px;
			padding: 0.38rem 0.5rem;
		}
	}
`;

export default Wrapper;
