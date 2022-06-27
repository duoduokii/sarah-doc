// import { getRoute } from "../../lib/generateDocInfo";
// import { E_DOC_TYPE } from "../../constants";
// import Image from "next/image";

const Card = () => {
	return (
		<div className="h-56 border-2 rounded-xl overflow-hidden">
			{/* <Image src="/icons/logo.png" layout="intrinsic"></Image> */}
			<div className="w-full h-32">
				<img src="/icons/logo.png" alt="" className="w-full h-full" />
			</div>
			<div>node</div>
			<div>node学习笔记</div>
		</div>
	);
};

const Course = () => {
	return (
		<div className="w-11/12 md:w-[940px] mx-auto">
			{/* <div className="w-11/12 md:w-[940px] mx-auto"> */}
			{/* 专栏 */}
			<div className="w-full grid grid-cols-1 gap-4 md:grid-cols-3">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

// export function getStaticProps() {
// 	const routes = getRoute(E_DOC_TYPE.DEV);
// 	console.log(routes);
// 	return {
// 		props: {
// 			routes,
// 		},
// 	};
// }

export default Course;
