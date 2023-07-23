import React, { useState, useContext } from 'react';
import './Menu.css';
import Contacts from './Contacts';
import { Link } from 'react-router-dom';
import MenuContext from './MenuContext';

function Menu() {

	const { isMenuOpen, closeMenu } = useContext(MenuContext);

	return (
		<div className="menu">
		<div className="items">
			<div className="menu_item">
				<Link to="/" onClick={closeMenu} className="customlink">Home</Link>
				<p>...Homepage</p>
			</div>
			<div className="menu_item">
				<Link to="/qualifications" onClick={closeMenu} className="customlink">Qualifications</Link>
				<p>...Education, Skills, Relevant Experiences</p>
			</div>
			<div className="menu_item">
				<Link to="/projects" onClick={closeMenu} className="customlink">Projects</Link>
				<p>...List of Projects</p>
			</div>
			<div className="menu_item">
				<Link to="/about" onClick={closeMenu} className="customlink">About</Link>
				<p>...About Me, Future Goals, Personal Stuff</p>
			</div>
		</div>
		<Contacts/>

		
		</div>
	);
}

export default Menu;
