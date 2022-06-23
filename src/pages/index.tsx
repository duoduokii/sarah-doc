import { getRoute } from "../../lib/generateDocInfo";
import { E_DOC_TYPE } from "../../constants";

const Home = ({ routes }) => {
	return (
		<div>
			{routes.map((route, idx) => (
				<div key={idx}>
					<h1>
						<a href={route.path}>{route.title}</a>
					</h1>
					<p>{route.date}</p>
					<p>{route.auther}</p>
					<p>{route.description}</p>
				</div>
			))}
		</div>
	);
};

export function getStaticProps() {
	const routes = getRoute(E_DOC_TYPE.DEV);
	console.log(routes);
	return {
		props: {
			routes,
		},
	};
}

export default Home;
