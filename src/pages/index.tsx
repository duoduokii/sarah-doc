import { getRoute } from "../../lib/generateDocInfo";
import { E_DOC_TYPE } from "../../constants";

const Home = ({ routes }) => {
	return (
		<div className="w-11/12 md:w-[940px] mx-auto">
			{routes.map((route, idx) => (
				<div key={idx}>
					<h1 className="text-4xl font-bold ">
						<a className="text-black underline decoration-[#cdf0f0] decoration-8" href={route.path}>
							{route.title}
						</a>
					</h1>
					<p className="mt-4">{route.date}</p>
					{/* <p className="mt-4">{route.auther}</p> */}
					<p className="mt-2">{route.description}</p>
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
