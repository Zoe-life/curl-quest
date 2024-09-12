import Section from './Section'

function Main() {
	const sections = [
		{
			title: "Find your Perfect Hair Stylist",
			content: "Discover talented natural African hair experts in your area.",
			buttonText: "Find a Natural Hair Stylist",
			buttonLink: "#"
		},
		{
			title: "Are you a Natural Hair Stylist?",
			content: "Join our platform to connect with new clients and grow your business.",
			buttonText: "Join as a Natural Hair Stylist",
			buttonLink: "#"
		}
	];

	return (
		<main>
			{sections.map((section, index) => (
				<Section key={index} {...section} />
			))}
			<section>
				<h2>Why Choose CurlQuest?</h2>
				<ul>
					<li>Easy booking system</li>
					<li>Verified professionals</li>
					<li>Client reviews and ratings</li>
					<li>Secure payments</li>
				</ul>
			</section>
		</main>
	);
}

export default Main;
