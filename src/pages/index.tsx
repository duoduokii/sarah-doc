// import getPosts from "../../script/generate";
// const Home = ({ posts }) => {
// 	return (
// 		<div className="w-11/12 md:w-[940px] mx-auto">
// 			<div className="pt-6 pb-8 space-y-2 md:space-y-5">
// 				<h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">偶尔小记</h1>
// 			</div>
// 			<ul className="divide-y divide-gray-200">
// 				{posts.map((post, idx) => (
// 					<li className="py-12" key={idx}>
// 						<h2 className="text-4xl font-bold underline decoration-[#cdf0f0] decoration-8">
// 							<a className="text-black underline hover:decoration-[#cdf0f0] hover:decoration-10" href={post.href}>
// 								{post.title}
// 							</a>
// 						</h2>
// 						<p className="mt-4">{post.date}</p>
// 						<p className="mt-2 text-gray-500">{post.excerpt}</p>
// 					</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// };

// export function getStaticProps() {
// 	const posts = getPosts();
// 	console.log(posts);
// 	return {
// 		props: {
// 			posts,
// 		},
// 	};
// }

// export default Home;

import Image from "next/image";
// import "./index.module.less";

const Home = () => {
	return (
		<div className="w-screen h-screen flex justify-center items-center">
			<Image src="/icons/logo.png" width="200" height="200"></Image>
		</div>
	);
};

export default Home;
