import Image from "next/image";
import type { AppProps } from "next/app";
import "../styles/global.css";

function App({ Component, pageProps }: AppProps) {
	return (
		<div className="min-h-screen">
			{/* <div className="min-h-screen bg-[#9392c5]"> */}
			<div className="w-full h-16 flex items-center">
				<Image src="/icons/logo.png" width="64" height="64"></Image>
				<ul className="flex">
					<li className="mr-4">开发日记</li>
					<li className="mr-4">专栏</li>
					<li className="mr-4">日常</li>
				</ul>
			</div>
			<Component {...pageProps}></Component>
		</div>
	);
}

export default App;
