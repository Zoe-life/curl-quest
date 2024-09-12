import { useState } from 'react'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Menu from './Menu';
import './App.css';

function App() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className="App">
			<Header toggleMenu={toggleMenu} />
			<Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
