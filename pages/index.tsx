import Layout from "../components/Layout/index";
import style from "./index.module.css";
import { getSortedPostsData } from "../lib/posts";

import type { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async (context) => {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
};

export default function Home({ allPostsData }) {
	return (
		<Layout>
			<div className={style.layout}>
				<main className={style.main}>
					<ul>
						{allPostsData.map(({ id, date, title }) => (
							<li key={id}>
								<h2 className="text-3xl">
									<a href={`developer/${id}`}>{title}</a>
								</h2>
								<span>
									<time>{date}</time>
								</span>
							</li>
						))}
					</ul>
				</main>
			</div>
		</Layout>
	);
}
