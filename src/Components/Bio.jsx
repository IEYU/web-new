import TypeIt from "typeit-react";
import Wrapper from "../assets/wrappers/Bio";

const Bio = () => {
	return (
		<Wrapper>
			<TypeIt
				options={{ speed: 50 }}
				getBeforeInit={(instance) => {
					instance
						//Hi,
						.type("Hi", { delay: 100 / 3 })
						.type(", ", { delay: 400 })
						.break({ delay: 400 })
						.break()
						.pause(349)

						//My name is Maggie.
						.type("My hame is", { delay: 300 / 3 })
						.move(-6, { delay: 500 / 3 })
						.delete(1, { delay: 200 / 3 })
						.type("n", { delay: 400 / 3 })
						.move(6, { delay: 100 / 3 })
						.type(" ", { delay: 100 / 3 })
						.type("Maggie. ", { delay: 500 })
						.break({ delay: 200 })
						.break()
						.pause(349)

						//I'm an Electrical and Computer Engineering student at Carnegie Mellon University.
						.type("I'm an Electical", { delay: 300 / 3 })
						.move(-4, { delay: 300 / 3 })
						.type("r", { delay: 100 / 3 })
						.move(4, { delay: 300 / 3 })
						.type(" ", { delay: 100 / 3 })
						.type(
							"and Computer Engineering student at Carnegie Mellon University. ",
							{ delay: 500 }
						)
						.break({ delay: 200 })
						.break()
						.pause(349)

						//I love building random but cool things!
						.type("I love building random but coll things!", {
							delay: 200 / 3,
						})
						.move(-9, { delay: 300 / 3 })
						.delete(1, { delay: 200 / 3 })
						.type("o", { delay: 100 / 3 })
						.move(10, { delay: 300 / 3 })
						.break({ delay: 200 })
						.break()
						.pause(349)

						//Check out the portfolio page to see what I've been working on (･ω<)☆
						.type(
							"Check out the portfolio page to see what I've been working on",
							{ delay: 150 / 3 }
						)
						.type(" (", { delay: 100 / 3 })
						.type("･", { delay: 100 / 3 })
						.type("ω", { delay: 100 / 3 })
						.type("<", { delay: 100 / 3 })
						.type(")", { delay: 100 / 3 })
						.type("☆", { delay: 100 / 3 })

						.go();

					// Remember to return it!
					return instance;
				}}
			/>
		</Wrapper>
	);
};
export default Bio;
