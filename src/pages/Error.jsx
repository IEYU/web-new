import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/Error";
import img from "../assets/images/404.svg";

const Error = () => {
	const error = useRouteError();
	console.log(error);

	if (error.status === 404) {
		return (
			<Wrapper>
				<div>
					<Link to="/">
						<img src={img} alt="not found" />
					</Link>
					<h2>Oh No! Page not found</h2>
					<p>We can't find the page you are looking for</p>
					<p>
						<Link to="/">Go Back</Link>
					</p>
				</div>
			</Wrapper>
		);
	}
};
export default Error;
