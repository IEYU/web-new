import { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";
import { client } from "../sanity/client";
import { PROJECTS_QUERY } from "../sanity/queries";
import Wrapper from "../assets/wrappers/ProjectSlider";
import SlideCard from "./SlideCard";

const PROJECTS_PER_PAGE = 8;
const PLACEHOLDER_PROJECTS = Array.from({ length: 4 }, (_, index) => ({
	_id: `placeholder-${index + 1}`,
	title: "Coming soon",
	isPlaceholder: true,
}));

const ProjectSlider = () => {
	const [projects, setProjects] = useState(null);
	const [error, setError] = useState(null);
	const [currentPage, setCurrentPage] = useState(0);
	const scrollerRef = useRef(null);
	const accumulatedScroll = useRef(0);
	const scrollLocked = useRef(false);
	const scrollAnimation = useRef(null);

	useEffect(() => {
		let isCurrent = true;

		client
			.fetch(PROJECTS_QUERY)
			.then((data) => {
				if (isCurrent) setProjects(data);
			})
			.catch((fetchError) => {
				console.error("Unable to load portfolio projects from Sanity.", fetchError);
				if (isCurrent) setError(fetchError);
			});

		return () => {
			isCurrent = false;
			scrollAnimation.current?.stop();
		};
	}, []);

	if (error) {
		return (
			<Wrapper>
				<p className="portfolio-status">Projects are temporarily unavailable.</p>
			</Wrapper>
		);
	}

	if (projects === null) {
		return (
			<Wrapper>
				<p className="portfolio-status">Loading projects...</p>
			</Wrapper>
		);
	}

	const displayedProjects = [...projects, ...PLACEHOLDER_PROJECTS];
	const projectPages = [];
	for (
		let index = 0;
		index < displayedProjects.length;
		index += PROJECTS_PER_PAGE
	) {
		projectPages.push(
			displayedProjects.slice(index, index + PROJECTS_PER_PAGE),
		);
	}

	const scrollToPage = (pageIndex) => {
		const scroller = scrollerRef.current;
		if (!scroller) return;

		const nextPage = Math.max(0, Math.min(projectPages.length - 1, pageIndex));
		const target = nextPage * scroller.clientWidth;

		scrollAnimation.current?.stop();
		scrollLocked.current = true;
		scroller.style.scrollSnapType = "none";
		scrollAnimation.current = animate(scroller.scrollLeft, target, {
			duration: 0.42,
			ease: [0.65, 0, 0.35, 1],
			onUpdate: (value) => {
				scroller.scrollLeft = value;
			},
			onComplete: () => {
				scroller.scrollLeft = target;
				scroller.style.removeProperty("scroll-snap-type");
				scrollLocked.current = false;
				setCurrentPage(nextPage);
			},
		});
	};

	const handleWheel = (event) => {
		if (projectPages.length <= 1 || !scrollerRef.current) return;

		event.preventDefault();
		if (scrollLocked.current) return;

		const delta =
			Math.abs(event.deltaY) >= Math.abs(event.deltaX)
				? event.deltaY
				: event.deltaX;
		accumulatedScroll.current += delta;

		if (Math.abs(accumulatedScroll.current) < 55) return;

		const scroller = scrollerRef.current;
		const currentPage = Math.round(scroller.scrollLeft / scroller.clientWidth);
		const direction = Math.sign(accumulatedScroll.current);
		const nextPage = Math.max(
			0,
			Math.min(projectPages.length - 1, currentPage + direction),
		);

		accumulatedScroll.current = 0;
		if (nextPage === currentPage) return;

		scrollToPage(nextPage);
	};

	const handleScroll = () => {
		const scroller = scrollerRef.current;
		if (!scroller?.clientWidth) return;
		setCurrentPage(Math.round(scroller.scrollLeft / scroller.clientWidth));
	};

	return (
		<Wrapper>
			{displayedProjects.length > 0 ? (
				<div
					className="portfolio-pages"
					ref={scrollerRef}
					onWheel={handleWheel}
					onScroll={handleScroll}
					aria-label="Portfolio project groups"
				>
					{projectPages.map((page, pageIndex) => (
						<div
							className="portfolio-page"
							key={page[0]?._id || pageIndex}
						>
							{page.map((project) => (
								<SlideCard key={project._id} {...project} />
							))}
						</div>
					))}
				</div>
			) : (
				<p className="portfolio-status">Projects coming soon.</p>
			)}
			{projectPages.length > 1 && (
				<div className="page-indicator" aria-label="Project group navigation">
					{projectPages.map((page, pageIndex) => (
						<button
							type="button"
							className={pageIndex === currentPage ? "page-dot active" : "page-dot"}
							key={page[0]?._id || pageIndex}
							onClick={() => scrollToPage(pageIndex)}
							aria-label={`Show project group ${pageIndex + 1}`}
							aria-current={pageIndex === currentPage ? "page" : undefined}
						/>
					))}
				</div>
			)}
		</Wrapper>
	);
};

export default ProjectSlider;
