import type { AppProps } from "next/app";
import "../styles/global.css";

import { MDXProvider } from "@mdx-js/react";

const Wrapper = (props) => <main style={{ padding: "20px", backgroundColor: "tomato" }} {...props} />;

export default function App(props) {
	const { Component, pageProps, children } = props;
	console.log(props);

	// return <MDXProvider components={Component}></MDXProvider>;
	return <Component></Component>;
	// return <MDXProvider components={{ wrapper: Wrapper }}>{children}</MDXProvider>;
}
