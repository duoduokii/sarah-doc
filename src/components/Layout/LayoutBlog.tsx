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
			<div>{children}</div>
		</div>
	);
};
