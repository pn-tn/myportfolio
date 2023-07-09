import './Main.css';
import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Home from './components/Home';
import Menu from './components/Menu';

function Main() {

	const [isMenuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	}
	
	return (
		<div className="Main">
			<FontAwesomeIcon icon={faBars} className="menu_bars" onClick={ toggleMenu } />
			<div className="social">
				<a href="https://web.facebook.com/asendad" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faFacebook} className="facebook_icon" />
				</a>
				<a href="https://github.com/pn-tn" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faGithub} className="github_icon" />
				</a>
				<a href="https://www.linkedin.com/in/aloysius-hasheem-sendad-5ab598259/" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faLinkedin} className="linkedin_icon" />
				</a>
			</div>
			{isMenuOpen && (
				<Menu />
			)}
    	</div>
	);
}

export default Main;
