import styled from "styled-components";

const Wrapper = styled.section`
	width: min(1120px, calc(100% - 2rem));
	margin: 0 auto;
	padding: clamp(1rem, 3vw, 2.5rem) 0;

	.portfolio-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(14.5rem, 1fr));
		gap: clamp(1rem, 2vw, 1.45rem);
		align-items: stretch;
	}

	@media (min-width: 1120px) {
		.portfolio-grid {
			grid-template-columns: repeat(4, 1fr);
		}
	}
`;

export default Wrapper;
