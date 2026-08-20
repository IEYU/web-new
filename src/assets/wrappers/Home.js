import styled from "styled-components";
import backgroundImage from "../images/pikmin.jpg";
import cursor1 from "../images/squid.png";
import cursor2 from "../images/squidFill.png";

const Wrapper = styled.section`
	/* General styles for centering the content */
	//cursor: url(${cursor1}) 24 24, auto; /* Default cursor */
	/* &:hover {
		cursor: url(${cursor2}) 24 24, auto;
	} */
	cursor: none;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	min-height: 100dvh;
	text-align: center;
	overflow: hidden;
	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url(${backgroundImage});
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		opacity: 0.25; /* Adjust opacity here */
		z-index: -1; /* Send the pseudo-element behind the content */
	}
	z-index: 1;

	.title {
		display: block;
		width: 90vw;
		height: auto;
		position: absolute;
		top: 42.5%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.icon-row {
		display: flex;
		gap: clamp(2rem, 8vw, 7rem);
		justify-content: center;
		flex-wrap: wrap;
		margin: auto auto clamp(2rem, 7vh, 5rem);
		width: min(92vw, 920px);
	}

	@media (max-width: 640px) {
		.title {
			width: min(96vw, 900px);
		}
	}

	nav {
		width: var(--fluid-width);
		max-width: var(--max-width);
		margin: 0 auto;
		height: var(--nav-height);
		display: flex;
		align-items: center;
	}
	.page {
		min-height: calc(100vh - var(--nav-height));
		display: grid;
		align-items: center;
		margin-top: -3rem;
	}
	h1 {
		font-weight: 700;
		margin-bottom: 1.5rem;
	}

	h1 span {
		color: var(--primary-500);
		transition: color 0.3s ease;
	}

	h1 span:hover {
		color: var(--hover-color);
		cursor: default;
	}

	p {
		line-height: 2;
		color: var(--text-secondary-color);
		margin-bottom: 1.5rem;
		max-width: 35em;
	}
	.register-link {
		margin-right: 1rem;
	}
	.main-img {
		display: none;
	}
	.btn {
		padding: 0.75rem 1rem;
	}
	@media (min-width: 992px) {
		.page {
			grid-template-columns: 1fr 400px;
			column-gap: 3rem;
		}
		.main-img {
			display: block;
		}
	}
`;
export default Wrapper;
