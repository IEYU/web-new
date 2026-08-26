import styled from "styled-components";
import cursor1 from "../images/marioCursor2Smaller32.png";
import cursor2 from "../images/marioCursorSmaller32.png";
import mapBackground from "../images/recently-map-editorial.png";

const Wrapper = styled.section`
	cursor:
		url(${cursor2}) 16 16,
		none;
	height: 100dvh;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	background: #f7f2e8;

	a,
	button {
		cursor:
			url(${cursor1}) 16 16,
			none;
	}

	.recently-content {
		position: relative;
		flex: 1;
		width: 100%;
		min-height: 0;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
	}

	.recently-heading {
		position: absolute;
		top: clamp(1.1rem, 3vw, 2.5rem);
		left: clamp(1rem, 5vw, 4.5rem);
		z-index: 5;
		flex: 0 0 auto;
		max-width: min(42rem, 72vw);
		margin: 0;
	}

	.eyebrow {
		margin: 0 0 0.45rem;
		color: #687b5a;
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.13em;
		text-transform: uppercase;
	}

	h1 {
		margin: 0;
		color: #34523b;
		font-family: Georgia, "Times New Roman", serif;
		font-size: clamp(2rem, 3.6vw, 3.2rem);
		font-style: italic;
		font-weight: 400;
		letter-spacing: -0.035em;
		line-height: 0.96;
	}

	.route-map {
		position: relative;
		isolation: isolate;
		flex: 1 1 auto;
		min-height: 0;
		width: 100%;
		margin: 0;
		overflow: hidden;
		background: #f7f2e8;
	}

	.route-map::before {
		content: "";
		position: absolute;
		inset: -1px;
		z-index: 0;
		background: url(${mapBackground}) center / 112% 112% no-repeat;
	}

	.route-map::after {
		content: "";
		position: absolute;
		inset: 0;
		z-index: 1;
		pointer-events: none;
		background: transparent;
	}

	.route-terminal {
		position: absolute;
		z-index: 2;
		display: flex;
		align-items: center;
		gap: 0.45rem;
		color: #263d35;
		font-size: 0.76rem;
		font-weight: 800;
		white-space: nowrap;
		text-shadow: 0 1px 2px rgba(255, 255, 255, 0.75);
	}

	.route-terminal svg {
		width: 2.2rem;
		height: 2.2rem;
		padding: 0.52rem;
		border-radius: 50%;
		box-sizing: border-box;
		background: rgba(255, 252, 226, 0.9);
		box-shadow:
			0 0 0 2px rgba(52, 68, 58, 0.6),
			0 5px 10px rgba(37, 34, 42, 0.2);
	}

	.route-start {
		left: 17.5%;
		top: 85.8%;
		transform: translate(-50%, -50%);
	}

	.route-start svg {
		color: #397f94;
	}

	.route-finish {
		right: 2%;
		top: 7%;
		transform: translateY(-50%);
		flex-direction: row-reverse;
	}

	.route-finish svg {
		color: #d3a717;
		font-size: 1.1rem;
	}

	.flag-stop {
		position: absolute;
		left: var(--stop-x);
		top: var(--stop-y);
		z-index: 3;
		width: 7.2rem;
		height: 4.2rem;
		margin: 0;
		padding: 0;
		transform: translate(-50%, -100%);
		transform-origin: 50% 100%;
		border: 0;
		border-radius: 0;
		background: transparent;
		box-shadow: none;
		color: var(--ink);
		font-family: var(--font-sans);
		filter: drop-shadow(0 5px 4px rgba(29, 50, 39, 0.24));
		transition: transform 0.2s cubic-bezier(0.2, 0.75, 0.25, 1);
	}

	.flag-stop:hover,
	.flag-stop:focus-visible,
	.flag-stop.active {
		transform: translate(-50%, -100%) scale(1.05);
	}

	.flag-stop:focus-visible {
		outline: none;
	}

	.flag-stop:focus-visible .flag-banner {
		box-shadow:
			0 0 0 3px rgba(255, 253, 229, 0.94),
			0 0 0 5px var(--flag-color);
	}

	.flag-banner {
		position: absolute;
		top: 0.3rem;
		left: 50%;
		z-index: 2;
		display: flex;
		align-items: center;
		gap: 0.35rem;
		min-width: 6.15rem;
		height: 2.2rem;
		padding: 0.3rem 0.85rem 0.3rem 0.45rem;
		box-sizing: border-box;
		clip-path: polygon(0 0, 100% 8%, 86% 52%, 100% 96%, 0 100%);
		background: #fffbe7;
		box-shadow: inset 0 0 0 1.5px rgba(50, 63, 53, 0.72);
		font-family: var(--font-sans);
		font-size: 0.72rem;
		font-weight: 750;
		line-height: 1;
		transition: transform 0.2s ease;
	}

	.flag-banner svg {
		width: 1.4rem;
		height: 1.4rem;
		flex: 0 0 auto;
		padding: 0.32rem;
		box-sizing: border-box;
		border-radius: 50%;
		background: var(--flag-color);
	}

	.flag-stop.green .flag-banner {
		min-width: 6.8rem;
	}

	.flag-stop:hover .flag-banner,
	.flag-stop:focus-visible .flag-banner,
	.flag-stop.active .flag-banner {
		transform: translateY(-0.18rem);
	}

	.flag-label {
		white-space: nowrap;
		letter-spacing: 0;
	}

	.flag-pole {
		position: absolute;
		top: 0.1rem;
		left: calc(50% - 0.09rem);
		z-index: 1;
		width: 0.18rem;
		height: 3.65rem;
		border-radius: 999px;
		background: #35423a;
		box-shadow: 1px 0 0 rgba(255, 255, 255, 0.35);
	}

	.flag-pole::before {
		content: "";
		position: absolute;
		left: 50%;
		top: -0.22rem;
		width: 0.55rem;
		height: 0.55rem;
		transform: translateX(-50%);
		border-radius: 50%;
		background: #35423a;
	}

	.stop-number {
		position: absolute;
		left: 50%;
		bottom: -0.625rem;
		z-index: 4;
		display: grid;
		place-items: center;
		width: 2.4rem;
		height: 1.25rem;
		transform: translateX(-50%);
		border: 1.5px solid rgba(74, 69, 40, 0.7);
		border-radius: 50%;
		background: #e7c95f;
		box-shadow:
			inset 0 2px 0 rgba(255, 255, 255, 0.45),
			0 4px 5px rgba(37, 34, 42, 0.22);
		font-size: 0.58rem;
		font-weight: 850;
	}

	.details-layer {
		position: absolute;
		inset: 0;
		z-index: 10;
		display: grid;
		place-items: center;
		padding: 1rem;
		will-change: opacity;
		transform: translateZ(0);
	}

	.details-backdrop {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		padding: 0;
		border: 0;
		border-radius: 0;
		background: rgba(225, 235, 228, 0.62);
		box-shadow: none;
		will-change: opacity;
	}

	.route-details {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		width: min(34rem, 100%);
		max-height: calc(100% - 1rem);
		overflow: hidden;
		border: 0.5px solid rgba(255, 255, 255, 0.64);
		border-radius: 18px;
		background: rgba(255, 253, 247, 0.88);
		box-shadow:
			0 2px 5px rgba(37, 34, 42, 0.1),
			0 24px 64px rgba(37, 34, 42, 0.24);
		backdrop-filter: blur(14px) saturate(1.08);
		-webkit-backdrop-filter: blur(14px) saturate(1.08);
		will-change: transform;
	}

	.route-details::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 0.32rem;
		background: var(--flag-color);
	}

	.details-heading {
		display: grid;
		grid-template-columns: auto minmax(0, 1fr) auto;
		align-items: center;
		gap: 0.8rem;
		padding: 1.3rem 1.25rem 1rem;
		border-bottom: 1px solid rgba(37, 34, 42, 0.1);
	}

	.details-icon {
		display: grid;
		place-items: center;
		width: 2.7rem;
		height: 2.7rem;
		border-radius: 10px;
		background: var(--flag-color);
		color: var(--ink);
		font-size: 1.15rem;
	}

	.details-heading p {
		margin: 0 0 0.12rem;
		color: var(--ink-muted);
		font-size: 0.68rem;
		font-weight: 800;
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}

	.details-heading h2 {
		margin: 0;
		color: var(--ink);
		font-size: clamp(1.25rem, 2.4vw, 1.75rem);
		line-height: 1;
	}

	.details-close {
		display: grid;
		place-items: center;
		width: 2.25rem;
		height: 2.25rem;
		padding: 0;
		border: 0;
		border-radius: 50%;
		background: rgba(37, 34, 42, 0.08);
		box-shadow: none;
		color: var(--ink);
		font-size: 0.9rem;
		transition:
			transform 0.16s ease,
			background-color 0.16s ease;
	}

	.details-close:hover,
	.details-close:focus-visible {
		transform: scale(1.08);
		background: rgba(37, 34, 42, 0.14);
		outline: none;
	}

	.details-content {
		display: flex;
		flex-direction: column;
		gap: 1.1rem;
		min-height: 0;
		overflow-y: auto;
		padding: 1.1rem 1.25rem 1.3rem;
		scrollbar-width: thin;
		scrollbar-color: rgba(37, 34, 42, 0.2) transparent;
	}

	.details-content::-webkit-scrollbar {
		width: 0.4rem;
	}

	.details-content::-webkit-scrollbar-thumb {
		border-radius: 999px;
		background: rgba(37, 34, 42, 0.18);
	}

	.detail-section + .detail-section {
		padding-top: 1rem;
		border-top: 1px solid rgba(37, 34, 42, 0.12);
	}

	.details-content h3 {
		margin: 0 0 0.55rem;
		color: var(--ink-muted);
		font-size: 0.72rem;
		font-weight: 800;
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}

	.details-content ul {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
		gap: 0.6rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.details-content li {
		padding: 0.68rem 0.75rem;
		border: 0.5px solid rgba(255, 255, 255, 0.5);
		border-radius: 10px;
		background: rgba(255, 255, 255, 0.4);
		box-shadow: 0 4px 12px rgba(37, 34, 42, 0.06);
		color: var(--ink);
		font-size: 0.86rem;
		font-weight: 650;
		line-height: 1.25;
	}

	@media (max-width: 700px) {
		.recently-content {
			width: 100%;
		}

		.recently-heading {
			top: 0.7rem;
			left: 0.75rem;
			padding: 0;
		}

		.recently-heading .eyebrow {
			margin-bottom: 0.15rem;
			font-size: 0.62rem;
		}

		.recently-heading h1 {
			font-size: clamp(1.35rem, 7vw, 1.8rem);
		}

		.route-map {
			flex: 0 0 auto;
			aspect-ratio: 16 / 9;
		}

		.route-terminal span,
		.flag-label {
			display: none;
		}

		.route-finish {
			right: 0;
		}

		.flag-stop {
			width: 4rem;
			transform: translate(-50%, -100%) scale(0.72);
		}

		.flag-stop:hover,
		.flag-stop:focus-visible,
		.flag-stop.active {
			transform: translate(-50%, -100%) scale(0.8);
		}

		.flag-banner {
			left: 50%;
			min-width: 2.8rem;
			width: 2.8rem;
			padding: 0;
			justify-content: center;
		}

		.flag-stop.green .flag-banner {
			min-width: 2.8rem;
		}

		.flag-pole {
			left: calc(50% - 0.09rem);
		}

		.stop-number {
			left: 50%;
		}

		.details-layer {
			position: fixed;
			padding: 0.75rem;
		}

		.route-details {
			max-height: calc(100dvh - 1.5rem);
		}

		.details-heading {
			padding: 1.15rem 1rem 0.85rem;
		}

		.details-content {
			padding: 0.9rem 1rem 1rem;
		}

		.details-content ul {
			grid-template-columns: 1fr;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.flag-stop,
		.details-close {
			transition: none;
		}
	}
`;

export default Wrapper;
