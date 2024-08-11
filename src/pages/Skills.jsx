import React, { useEffect, useRef } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Wrapper from "../assets/wrappers/Skills";

const Skills = () => {
	const toastShown = useRef(false);

	const notify = () =>
		toast("Haven't figured out what to put here yet :( Come back later!");

	useEffect(() => {
		if (!toastShown.current) {
			notify();
			toastShown.current = true;
		}
	}, []);

	return (
		<Wrapper>
			<Navbar />
			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
				transition:Bounce
			/>
			<div className="placeholder" />
			<Footer
				text={
					"Higher and higher you chase it. It's deep in your bones, go and take it."
				}
			/>
		</Wrapper>
	);
};

export default Skills;
