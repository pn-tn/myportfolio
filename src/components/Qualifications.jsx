import React from 'react';

import './Qualifications.css';
import Contacts from './Contacts';

function Qualifications() {
	return (
		<div className="qualifications">
			<h1 className="header">Qualifications</h1>
			<div className="education">
				<div className="education_card">
					<h2>BS in Computer Science</h2>
					<p className="org">Xavier University - Ateneo de Cagayan</p>
					<p className="year">2020 - present</p>
				</div>
				<div className="education_card_right">
					<h2>Introduction to Cybersecurity</h2>
					<p className="org">Cisco Networking Academy</p>
					<p className="year">2021</p>
				</div>

			</div>
			<div className="accomplishments">
				<h1>Relevant Accomplishments</h1>
				<div className="accomplishment_card">
					<h2>Leadership Award</h2>
					<p className="org">Philippine Air Force - Air Force Reserve Command</p>
					<p className="year">2019</p>
				</div>
				<div className="accomplishment_card">
					<h2>AFRC Commander's Award</h2>
					<p className="org">Philippine Air Force - Air Force Reserve Command</p>
					<p className="year">2018</p>
				</div>
			</div>
			<div className="skills">
				<h1>Technical Skills</h1>

				<div className="skillbox">		
				<div className="languages">
					<h2>Computer Languages</h2>
					<ul>
						<li>Python</li>
						<li>Java</li>
						<li>C / C# / C++</li>
						<li>Javascript</li>
						<li>HTML</li>
						<li>CSS</li>
					</ul>
				</div>
				
				<div className="tools">
					<h2>Tools & Frameworks</h2>
					<ul>
						<li>React JS</li>
						<li>Django</li>
						<li>Git</li>
						<li>Github</li>
						<li>Bash</li>
					</ul>
				</div>
				
				<div className="concepts">
					<h2>Technologies/ Concepts</h2>
					<ul>
						<li>Machine Learning</li>
						<li>Database Systems</li>
						<li>Modelling and Simulation</li>
						<li>Data Analysis and Visualization</li>
					</ul>
				</div>
				</div>

			</div>
			<Contacts/>
		</div>
	)
}

export default Qualifications;
