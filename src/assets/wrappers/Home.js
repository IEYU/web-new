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
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 98vh;
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
		width: 90%; /* Adjust width as needed */
		height: auto;
		/* margin-bottom: 20px; Space between title and icons */
		margin-top: 17rem;
		margin-bottom: auto;
	}

	.icon-row {
		display: flex;
		gap: 7rem; /* Space between icons */
		justify-content: center; /* Center icons horizontally */
		margin-top: auto; // Push icons to the bottom of the viewport
		margin-bottom: 3rem; /* Space from the bottom of the viewport */
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
