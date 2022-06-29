export default function Layout({ title, date }) {
	return ({ children }) => (
		<MarkDownPage title={title} date={date}>
			{children}
		</MarkDownPage>
	);
}

const MarkDownPage = ({ title, date, children }) => {
	return (
		<div className="w-11/12 md:w-[940px] m-auto">
			{/* <h1>{title}</h1>
			<p>{date}</p> */}
			{/* <MDXProvider components={MDXComponents}> */}
			<div>{children}</div>
			{/* </MDXProvider> */}
		</div>
	);
};
