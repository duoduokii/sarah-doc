import Image from "next/image";
import type { AppProps } from "next/app";
import "../styles/global.css";

function App({ Component, pageProps }: AppProps) {
	return (
		<div className="min-h-screen">
			{/* <div className="min-h-screen bg-[#9392c5]"> */}
			<header className="w-full h-16 flex items-center">
				<Image src="/icons/logo.png" width="64" height="64"></Image>
				<ul className="flex">
					<li className="mr-4">开发日记</li>
					<li className="mr-4">
						<a href="/course">专栏</a>
					</li>
					<li className="mr-4">日常</li>
				</ul>
			</header>
			<div className="mb-5">
				<Component {...pageProps}></Component>
			</div>
			<footer className="h-16 flex justify-center items-center bg-[#9b9ad0]">this is footer</footer>
		</div>
	);
}

export default App;
