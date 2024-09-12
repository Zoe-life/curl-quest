import PropTypes from 'prop-types';

function Menu({ isOpen, toggleMenu }) {
	return (
		<nav className={`menu ${isOpen ? 'open' : ''}`}>
			<button className="close-menu" onClick={toggleMenu}>x</button>
			<ul>
				<li><a href="#home">Home</a></li>
				<li><a href="#find-stylist">Find a Natural Hair Stylist</a></li>
				<li><a href="#join-as-stylist">Join as a Natural Hair Stylist</a></li>
				<li><a href="#about">About Us</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
		</nav>
	);
}

Menu.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	toggleMenu: PropTypes.func.isRequired,
};

export default Menu;
