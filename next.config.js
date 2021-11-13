const path = require("path");
const withMdx = require("@next/mdx")();
function remarkPlugins(md) {
	console.log(123, md);
	return md.toString();
}

module.exports = withMdx({
	pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
	webpack: (config, { ...options }) => {
		config.module.rules.push({
			test: /.mdx?$/,
			use: [
				options.defaultLoaders.babel,
				{
					loader: "@mdx-js/loader",
					options: {
						markdownToHtml: remarkPlugins,
					},
				},
				path.join(__dirname, "./plugin/md-layout-loader.js"),
			],
		});
		return config;
	},
});
