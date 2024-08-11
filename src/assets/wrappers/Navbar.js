import styled from "styled-components";

const Wrapper = styled.section`
	display: flex;
	background-color: #2a272a;
	height: fit-content;
	align-items: center;
	/* cursor: auto; */
	justify-content: space-between; /* Distribute space between brand, tab-bar, and icon-bar */

	.navbar-brand {
		flex: 1; /* Left-align the brand */
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding-top: 0.85rem;
		padding-bottom: 0.85rem;
		padding-left: 0.7rem;
		padding-right: 0.7rem;

		height: 2rem;
	}

	.tab-bar {
		flex: 15;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 3rem;
		flex-wrap: wrap;
		/* padding-top: 0.8rem;
		padding-bottom: 0.8rem; */
	}

	.icon-bar {
		flex: 1;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 10px;
		padding-right: 0.7rem;
	}
`;

export default Wrapper;
