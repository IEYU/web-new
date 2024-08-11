import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, About, Error, Home, Portfolio, Skills } from "./pages";

//add the checking in App.js instead of dashboard so that the setting can be applied to all the child pages
export const checkDefaultTheme = () => {
	const isDarkTheme = localStorage.getItem("darkTheme") === "true";
	document.body.classList.toggle("dark-theme", isDarkTheme);
	return isDarkTheme;
};

checkDefaultTheme();

const router = createBrowserRouter([
	{
		//parent route
		path: "/",
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true, // set as the index page for the parent
				element: <Home />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "portfolio",
				element: <Portfolio />,
			},
			{
				path: "skills",
				element: <Skills />,
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
