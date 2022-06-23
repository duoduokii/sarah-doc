const matter = require("gray-matter");
// const stringifyObject = require("stringify-object");
module.exports = async function (src) {
	const callback = this.async();
	const { content, data } = matter(src);
	const code =
		`import Layout from 'components/Layout/LayoutBlog';

export default Layout(${JSON.stringify(data)});

	` + content;
	return callback(null, code);
};
