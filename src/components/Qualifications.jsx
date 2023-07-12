import React from 'react';

import './Qualifications.css';
import Contacts from './Contacts';

function Qualifications() {
	return (
		<div className="qualifications">
			<h1 className="header">Qualifications</h1>
			<div className="education">

			</div>
			<div className="accomplishments">
				<h1>Relevant Accomplishments</h1>
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
