import './Main.css';
import React, { useState, useContext } from 'react';

import "@fontsource/ibm-plex-mono";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Qualifications from './components/Qualifications';
import Projects from './components/Projects';
import About from './components/About';
import Menu from './components/Menu';
import MenuContext from './components/MenuContext';

function Main() {

	const [isMenuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	}
	const closeMenu = () => {
		setMenuOpen(false);
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

			<MenuContext.Provider value={{ isMenuOpen, closeMenu }}>

				<Router>
						{isMenuOpen ? (

							<Menu/>

						) : (
							<Routes>
								<Route exact path="/" element={<Home/>} />
								<Route exact path="/qualifications" element={<Qualifications/>} />
								<Route exact path="/projects" element={<Projects/>} />
								<Route exact path="/about" element={<About/>} />
							</Routes>
						)}
				</Router>


			</MenuContext.Provider>

    	</div>
	);
}

export default Main;
