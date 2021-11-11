import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
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
		<div className={style.layout}>
			<aside className={style.aside}>
				<header>HEADER</header>
				<div>
					<ul>
						{allPostsData.map(({ id, date, title }) => (
							<li className={utilStyles.listItem} key={id}>
								{title}
								<br />
								{id}
								<br />
								{date}
							</li>
						))}
					</ul>
				</div>
			</aside>
			<main className={style.main}>Container</main>
		</div>
	);
}
