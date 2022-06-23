import { title } from "process";

export default function Layout({ title, date }) {
	return ({ children }) => (
		<MarkDownPage title={title} date={date}>
			{children}
		</MarkDownPage>
	);
}

const MarkDownPage = ({ title, date, children }) => {
	return (
		<div>
			<h1>{title}</h1>
			<p>{date}</p>
			<div>{children}</div>
		</div>
	);
};
