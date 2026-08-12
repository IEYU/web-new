import styled from "styled-components";

const Wrapper = styled.section`
	height: 100%;

	.card {
		min-height: 100%;
		width: 100%;
		background: #fdfbf0;
		border: 2px solid #2a272a;
		border-radius: 20px;
		box-shadow: 0 4px 0 #2a272a;
		position: relative;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		text-decoration: none;
		transition:
			transform 0.16s ease,
			box-shadow 0.16s ease,
			background-color 0.16s ease;
	}

	.card-img-top {
		width: 100%;
		aspect-ratio: 4 / 3;
		object-fit: cover;
		background: #fffbea;
		border-bottom: 2px solid #2a272a;
	}

	.card-hover-text {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 5.25rem;
		margin: 0;
		padding: 0.85rem;
		text-align: center;
		font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
			sans-serif;
		font-size: clamp(1rem, 1.7vw, 1.2rem);
		line-height: 1.2;
		font-weight: 700;
		color: #2a272a;
	}

	.card:hover {
		transform: translateY(-4px);
		box-shadow: 0 7px 0 #2a272a;
	}

	&:nth-child(4n + 1) .card:hover {
		background: #8abfd1;
	}

	&:nth-child(4n + 2) .card:hover {
		background: #f4d77e;
	}

	&:nth-child(4n + 3) .card:hover {
		background: #eaa09a;
	}

	&:nth-child(4n) .card:hover {
		background: #b8d88f;
	}
`;

export default Wrapper;
