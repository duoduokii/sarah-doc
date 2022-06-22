const withMdx = require("@next/mdx")();

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
						providerImportSource: "@mdx-js/react",
					},
				},
			],
		});
		return config;
	},
});
