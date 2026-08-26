import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
	FaBookOpen,
	FaFilm,
	FaGamepad,
	FaHeadphonesAlt,
	FaMapMarkerAlt,
	FaStar,
	FaTheaterMasks,
	FaTimes,
} from "react-icons/fa";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Wrapper from "../assets/wrappers/Recently";

const recentLists = [
	{
		title: "Books",
		accent: "blue",
		color: "#79bfd3",
		position: { x: 29.4, y: 72.7 },
		icon: FaBookOpen,
		items: ["have not been reading a lot recently :("],
	},
	{
		title: "Movies",
		accent: "yellow",
		color: "#f4d767",
		position: { x: 37.9, y: 45.3 },
		icon: FaFilm,
		items: [
			"Spider-Man: Brand New Day",
			"The Odyssey",
			"Mickey 17",
			"F1: The Movie",
		],
	},
	{
		title: "Music",
		accent: "red",
		color: "#ef9287",
		position: { x: 57.4, y: 52.8 },
		icon: FaHeadphonesAlt,
		items: [
			"日落 - 孙燕姿",
			"better and more - Anya Gupta",
			"我会等 - 承桓",
			"People Watching - Conan Gray",
		],
	},
	{
		title: "Musicals",
		accent: "green",
		color: "#acd985",
		position: { x: 59, y: 31.1 },
		icon: FaTheaterMasks,
		sections: [
			{
				label: "Like",
				items: [
					"Les Miz",
					"Dear Evan Hansen",
					"Hamilton",
					"Suffs",
					"Come From Away",
				],
			},
			{
				label: "Want to watch",
				items: [
					"Epic: The Musical",
					"The Phantom of the Opera",
					"Cabaret",
				],
			},
		],
	},
	{
		title: "Games",
		accent: "purple",
		color: "#8faad8",
		position: { x: 77.8, y: 23.2 },
		icon: FaGamepad,
		items: [
			"The Legend of Zelda: Breath of the Wild",
			"The Legend of Zelda: Tears of the Kingdom",
			"Animal Crossing",
			"GTA Online",
			"Civilization 6",
			"Assassin's Creed Odyssey",
			"House Flipper 2",
		],
	},
];

const DetailsPanel = ({ list, onClose }) => {
	const Icon = list.icon;
	const stopNumber = recentLists.indexOf(list) + 1;

	return (
		<motion.section
			id="recent-details"
			className={`route-details ${list.accent}`}
			style={{ "--flag-color": list.color }}
			initial={{ y: 10, scale: 0.985, opacity: 0 }}
			animate={{ y: 0, scale: 1, opacity: 1 }}
			exit={{ y: 8, scale: 0.99, opacity: 0 }}
			transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
			role="dialog"
			aria-modal="true"
			aria-labelledby="recent-details-title"
		>
			<header className="details-heading">
				<span className="details-icon" aria-hidden="true">
					<Icon />
				</span>
				<div>
					<p>Stop {stopNumber}</p>
					<h2 id="recent-details-title">{list.title}</h2>
				</div>
				<button
					type="button"
					className="details-close"
					onClick={onClose}
					aria-label="Close details"
					autoFocus
				>
					<FaTimes aria-hidden="true" />
				</button>
			</header>

			<div className="details-content">
				{list.sections ? (
					list.sections.map((section) => (
						<section className="detail-section" key={section.label}>
							<h3>{section.label}</h3>
							<ul>
								{section.items.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</section>
					))
				) : (
					<ul>
						{list.items.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				)}
			</div>
		</motion.section>
	);
};

const Recently = () => {
	const [activeList, setActiveList] = useState(null);

	useEffect(() => {
		const closeOnEscape = (event) => {
			if (event.key === "Escape") setActiveList(null);
		};

		window.addEventListener("keydown", closeOnEscape);
		return () => window.removeEventListener("keydown", closeOnEscape);
	}, []);

	return (
		<Wrapper>
			<Navbar />
			<main className="recently-content">
				<header className="recently-heading">
					<p className="eyebrow">Recently · What I&apos;m up to</p>
					<h1>Between Small Shores</h1>
				</header>

				<section className="route-map" aria-label="Recent interests map">
					<div className="route-terminal route-start">
						<FaMapMarkerAlt aria-hidden="true" />
						<span>Start</span>
					</div>

					<div className="route-terminal route-finish">
						<FaStar aria-hidden="true" />
					</div>

					{recentLists.map((list, index) => {
						const Icon = list.icon;
						const isActive = activeList?.title === list.title;

						return (
							<button
								type="button"
								className={`flag-stop ${list.accent} ${isActive ? "active" : ""}`}
								style={{
									"--stop-x": `${list.position.x}%`,
									"--stop-y": `${list.position.y}%`,
									"--flag-color": list.color,
								}}
								onClick={() => setActiveList(isActive ? null : list)}
								aria-label={`Open ${list.title}`}
								aria-expanded={isActive}
								aria-controls="recent-details"
								key={list.title}
							>
								<span className="flag-banner">
									<Icon aria-hidden="true" />
									<span className="flag-label">{list.title}</span>
								</span>
								<span className="flag-pole" aria-hidden="true" />
								<span className="stop-number" aria-hidden="true">
									{String(index + 1).padStart(2, "0")}
								</span>
							</button>
						);
					})}

					<AnimatePresence>
						{activeList && (
							<motion.div
								className="details-layer"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.2, ease: "easeOut" }}
							>
								<button
									type="button"
									className="details-backdrop"
									onClick={() => setActiveList(null)}
									aria-label="Close details"
								/>
								<DetailsPanel
									list={activeList}
									onClose={() => setActiveList(null)}
								/>
							</motion.div>
						)}
					</AnimatePresence>
				</section>
			</main>
			<Footer text="A tiny trail through whatever is currently taking up space in my brain." />
		</Wrapper>
	);
};

export default Recently;
