const path = require("path");
const withMdx = require("@next/mdx")();

module.exports = withMdx({
	pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
	webpack: (config, { ...options }) => {
		config.module.rules.push({
			test: /.mdx?$/,
			use: [options.defaultLoaders.babel, "@mdx-js/loader", path.join(__dirname, "./plugin/md-layout-loader.js")],
		});
		return config;
	},
});
