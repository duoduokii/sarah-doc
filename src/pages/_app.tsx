import Image from "next/image";
// import { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "components/mdx";

import "../styles/global.css";

function App({ Component, pageProps }) {
	return (
		<div>
			{/* <div className="min-h-screen bg-[#9392c5]"> */}
			{/* <header className="w-full h-16 flex items-center">
				<div className="mr-4 px-4">
					<Image src="/icons/logo.png" width="32" height="32"></Image>
				</div>
				<ul className="flex">
					<li className="mr-4">开发日记</li>
					<li className="mr-4">
						<a href="/course">专栏</a>
					</li>
					<li className="mr-4">日常</li>
				</ul>
			</header> */}
			{/* <div className="mb-5">
				<MDXProvider components={MDXComponents}>
					<Component {...pageProps} />
				</MDXProvider>
			</div> */}
			<div>
				<MDXProvider components={MDXComponents}>
					<Component {...pageProps} />
				</MDXProvider>
				{/* <Component {...pageProps} /> */}
			</div>
			{/* <footer className="fixed w-screen left-0 right-0 bottom-0 h-16 flex justify-center items-center bg-[#9b9ad0]">
				<a href="https://beian.miit.gov.cn/">鄂ICP备2022004573号-1</a>
			</footer> */}
		</div>
	);
}

export default App;
