import PropTypes from 'prop-types';

function Header({ toggleMenu }) {
	return (
		<header>
			<div className="video-background">
				<video autoPlay loop muted>
					<source src="https://pin.it/4iXRgdyv5" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>
			<div className="header-content">
				<button className="hamburger-menu" onClick={toggleMenu}>
				<img width="30" height="30" src="https://img.icons8.com/ios-filled/30/menu--v6.png" alt="menu--v6" />
				</button>
				<h1>CurlQuest</h1>
				<p>Connecting clients with natural African hair to the right hair care professionals</p>
			</div>
		</header>
	);
}

Header.propTypes = {
	toggleMenu: PropTypes.func.isRequired,
};

export default Header;
