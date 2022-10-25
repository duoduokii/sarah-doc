import fs from "fs";
import path from "path";
import matter from "gray-matter";

const getPosts = () => {
	const posts = [];
	const dir = path.join(process.cwd(), "src/pages/blog");
	const filePosts = fs.readdirSync(dir, "utf-8").map((file) => getPost(file, dir));
	filePosts.forEach((file) => {
		if (!file.href.includes(".")) {
			posts.push(file);
		}
	});
	return posts;
};

const getPost = (file, dir) => {
	const fullPath = path.join(dir, file);
	const fileContent = fs.readFileSync(fullPath, "utf-8");
	const { data, excerpt } = matter(fileContent, { excerpt: true });
	return {
		href: `/blog/${file.replace(/\.mdx?$/, "")}`,
		title: data.title,
		date: data.date,
		excerpt,
	};
};

export default getPosts;

// export const getRoute = (type: E_DOC_TYPE) => {
// 	const fileContents = fs.readFileSync(routeMap[type], "utf-8");
// 	const route = JSON.parse(fileContents).route;
// 	return route;
// };

// function getPostBySlug(slug: string) {
// 	const files = fs.readFileSync(postsDirectory);
// }

// export function getSortedPostsData() {
// 	console.log(postsDirectory);

// 	// Get file names under /posts
// 	const fileNames = fs.readdirSync(postsDirectory);
// 	const allPostsData = fileNames.map((fileName) => {
// 		// Remove ".md" from file name to get id
// 		const id = fileName.replace(/\.mdx?$/, "");

// 		// Read markdown file as string
// 		const fullPath = path.join(postsDirectory, fileName);
// 		const fileContents = fs.readFileSync(fullPath, "utf8");

// 		// Use gray-matter to parse the post metadata section
// 		const matterResult = matter(fileContents);

// 		// Combine the data with the id
// 		return {
// 			id,
// 			...(matterResult.data as { title: string; date: string }),
// 		};
// 	});
// 	// Sort posts by date
// 	return allPostsData.sort((a, b) => {
// 		if (a.date < b.date) {
// 			return 1;
// 		} else {
// 			return -1;
// 		}
// 	});
// }
