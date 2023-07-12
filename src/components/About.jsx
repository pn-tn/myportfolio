import React from 'react';

import './About.css';
import Contacts from './Contacts';

function About() {
	return (
		<div className="about">
			<h1 className="header">Get To Know Me!</h1>

			<div className="introduction">
				<p>Hi! I am</p>
				<p className="name">Aloysius Hasheem A. Sendad</p>
				<p>
					A passionate Computer Science student currently in my final year of studies, 
					with a deep fascination for technology and a drive to solve complex problems.
				</p>

			</div>

			<div className="goals">
			</div>

			<div className="personal">
				<h1>Personal Interests</h1>
			</div>
			<Contacts/>

		</div>
	)
}

export default About;

