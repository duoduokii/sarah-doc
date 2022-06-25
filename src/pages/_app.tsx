import type { AppProps } from "next/app";
import "../styles/global.css";

function App({ Component, pageProps }: AppProps) {
	return (
		<div className="min-h-screen bg-[#9392c5]">
			<div className="w-full h-16">navbar</div>
			<Component {...pageProps}></Component>
		</div>
	);
}

export default App;
