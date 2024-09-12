import PropTypes from 'prop-types';

function Section({ title, content, buttonText, buttonLink }) {
	return (
		<section>
			<h2>{title}</h2>
			<p>{content}</p>
			<a href={buttonLink} className="cta-button">{buttonText}</a>
		</section>
	);
}

Section.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	buttonText: PropTypes.string.isRequired,
	buttonLink: PropTypes.string.isRequired,
};

export default Section;
