import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Wrapper from "../assets/wrappers/Recently";
import {
	FaBookOpen,
	FaFilm,
	FaGamepad,
	FaHeadphonesAlt,
	FaTheaterMasks,
} from "react-icons/fa";

const recentLists = [
	{
		title: "Books",
		accent: "blue",
		icon: FaBookOpen,
		// sections: [
		// 	{
		// 		label: "Like",
		// 		items: ["Add favorite books", "Add comfort reads"],
		// 	},
		// 	{
		// 		label: "Want to read",
		// 		items: ["Add current reads", "Add next-up books"],
		// 	},
		// ],
		items: ["have not been reading a lot recently :("],
	},
	{
		title: "Movies",
		accent: "yellow",
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
		// https://en.wikipedia.org/wiki/Les_Misérables_(musical)
	},
	{
		title: "Games",
		accent: "blue",
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

const Recently = () => {
	return (
		<Wrapper>
			<Navbar />
			<main className="recently-content">
				<section className="recently-heading">
					<p className="eyebrow">Recently</p>
					<h1>What I&apos;m up to</h1>
				</section>
				<section className="list-grid" aria-label="Recent interests">
					{recentLists.map((list) => {
						const Icon = list.icon;

						return (
							<article
								className={`list-card ${list.accent}`}
								key={list.title}
							>
								<div className="card-heading">
									<span
										className="category-icon"
										aria-hidden="true"
									>
										<Icon />
									</span>
									<h2>{list.title}</h2>
								</div>
								<div className="list-body">
									{list.sections ? (
										list.sections.map((section) => (
											<section
												className="list-section"
												key={section.label}
											>
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
							</article>
						);
					})}
				</section>
			</main>
			<Footer text="A tiny shelf for whatever is currently taking up space in my brain." />
		</Wrapper>
	);
};

export default Recently;
