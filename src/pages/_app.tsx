import type { AppProps } from "next/app";
import "../styles/global.css";

function App({ Component, pageProps }: AppProps) {
	return (
		<div>
			<div className="w-full h-16 bg-purple-400">navbar</div>
			<Component {...pageProps}></Component>
		</div>
	);
}

export default App;
