import styled from "styled-components";
import backgroundImage from "../images/kirbybg.jpg";
import cursor1 from "../images/marioCursor2Smaller32.png";
import cursor2 from "../images/marioCursorSmaller32.png";

const Wrapper = styled.section`
	cursor:
		url(${cursor2}) 16 16,
		none;
	min-height: 100dvh;
	display: flex;
	flex-direction: column;
	background:
		linear-gradient(rgba(255, 253, 247, 0.66), rgba(255, 253, 247, 0.92)),
		url(${backgroundImage});
	background-size: cover;
	background-position: center;
	background-attachment: fixed;

	a,
	button {
		cursor:
			url(${cursor1}) 16 16,
			none;
	}

	.recently-content {
		flex: 1;
		width: min(1280px, calc(100% - 2rem));
		margin: 0 auto;
		padding: clamp(1.6rem, 4vw, 2.75rem) 0;
	}

	.recently-heading {
		max-width: 42rem;
		margin-bottom: clamp(1.25rem, 3vw, 2rem);
	}

	.eyebrow {
		margin: 0 0 0.45rem;
		color: var(--ink-muted);
		font-size: 0.82rem;
		font-weight: 800;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	h1 {
		margin: 0;
		color: var(--ink);
		font-size: clamp(2rem, 4.8vw, 3.75rem);
		line-height: 0.95;
	}

	.list-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
		gap: clamp(0.9rem, 1.5vw, 1.35rem);
	}

	.list-card {
		min-height: clamp(19rem, 48vh, 25rem);
		max-height: clamp(19rem, 48vh, 25rem);
		padding: clamp(1rem, 2vw, 1.25rem);
		border: 0.5px solid rgba(255, 255, 255, 0.46);
		border-radius: 18px;
		background: rgba(255, 255, 255, 0.18);
		box-shadow:
			0 1px 2px rgba(37, 34, 42, 0.08),
			0 14px 34px rgba(37, 34, 42, 0.12);
		backdrop-filter: blur(28px) saturate(1.35);
		-webkit-backdrop-filter: blur(28px) saturate(1.35);
		transition:
			transform 0.16s ease,
			box-shadow 0.16s ease,
			background-color 0.16s ease;
		display: flex;
		flex-direction: column;
		min-width: 0;
	}

	.list-card:hover {
		transform: translateY(-4px);
		box-shadow:
			0 2px 4px rgba(37, 34, 42, 0.09),
			0 18px 40px rgba(37, 34, 42, 0.15);
	}

	.list-card.blue:hover {
		background: rgba(121, 191, 211, 0.24);
	}

	.list-card.yellow:hover {
		background: rgba(244, 215, 103, 0.25);
	}

	.list-card.red:hover {
		background: rgba(239, 146, 135, 0.22);
	}

	.list-card.green:hover {
		background: rgba(172, 217, 133, 0.24);
	}

	.card-heading {
		flex: 0 0 auto;
		display: flex;
		align-items: center;
		gap: 0.65rem;
		margin: 0 0 1rem;
	}

	.category-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2rem;
		height: 2rem;
		flex: 0 0 2rem;
		background: transparent;
		color: var(--ink-muted);
		font-size: 0.95rem;
	}

	.list-card.blue .category-icon {
		color: #397f94;
	}

	.list-card.yellow .category-icon {
		color: #9b7620;
	}

	.list-card.red .category-icon {
		color: #ad5148;
	}

	.list-card.green .category-icon {
		color: #527d38;
	}

	h2 {
		margin: 0;
		font-size: clamp(1.05rem, 1.7vw, 1.35rem);
		color: var(--ink);
	}

	.list-body {
		display: flex;
		flex: 1 1 auto;
		min-height: 0;
		flex-direction: column;
		gap: 0.85rem;
		overflow-y: auto;
		overflow-x: hidden;
		padding-right: 0.25rem;
		scrollbar-width: thin;
		scrollbar-color: rgba(37, 34, 42, 0.2) transparent;
	}

	.list-body::-webkit-scrollbar {
		width: 0.4rem;
	}

	.list-body::-webkit-scrollbar-track {
		background: transparent;
	}

	.list-body::-webkit-scrollbar-thumb {
		background: rgba(37, 34, 42, 0.18);
		border-radius: 999px;
	}

	.list-section + .list-section {
		position: relative;
		padding-top: 1rem;
	}

	.list-section + .list-section::before {
		content: "";
		position: absolute;
		top: 0.18rem;
		left: 12%;
		right: 12%;
		height: 1px;
		background: rgba(37, 34, 42, 0.14);
	}

	h3 {
		margin: 0 0 0.5rem;
		color: var(--ink-muted);
		font-size: 0.75rem;
		font-weight: 800;
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	li {
		padding: 0.62rem 0.72rem;
		border-radius: 14px;
		border: 0.5px solid rgba(255, 255, 255, 0.38);
		background: rgba(255, 253, 247, 0.3);
		box-shadow:
			0 1px 2px rgba(37, 34, 42, 0.08),
			0 5px 14px rgba(37, 34, 42, 0.06);
		color: var(--ink);
		font-size: clamp(0.82rem, 1vw, 0.95rem);
		font-weight: 650;
	}

	@media (min-width: 1120px) {
		.list-grid {
			grid-template-columns: repeat(5, minmax(0, 1fr));
		}
	}
`;

export default Wrapper;
