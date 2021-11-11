export default function Layout({ title, date }: { title: string; date: string }) {
	return (
		<div>
			<h1>{title}</h1>
			<p>{date}</p>
		</div>
	);
}
