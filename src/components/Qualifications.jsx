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
					<p className="year">present - 2024</p>
				</div>
				<div className="education_card_right">
					<h2>Introduction to Cybersecurity</h2>
					<p className="org">Cisco Networking Academy</p>
					<p className="year">2021</p>
				</div>

			</div>

			<div className="experience">
				<h1>Experience and Affiliations</h1>
				<div className="experience_card_right">
					<h2>Wilshire Financial Network</h2>
					<p className="title">Intern</p>
					<p className="year">2023</p>
					<p className="description">

						Assisted in data gathering and lead generation. <br /><br />
						Collaborated with the team to contribute to a project's success. <br /><br />
						Gained a better understanding of industry-specific knowledge and practices. <br /><br />
						Gained valuable experience in effectively working remotely, leveraging digital 
						tools and online collaboration platforms to maintain productivity. <br /><br />
					</p>
				</div>
				<div className="experience_card">
					<h2>Xavier University - PAF ROTC Officer</h2>
					<p className="title">Training Officer</p>
					<p className="year">2019 - 2020</p>
					<p className="description">
						Designed and delivered comprehensive training programs to equip and 
						empower trainees in the Cadet Officer Qualifying Course (COQC) with
						the necessary skills and leadership.
					</p>
					<p className="title">Safety Officer</p>
					<p className="year">2018 - 2019</p>
					<p className="description">
						Managed and maintained medical supplies readiness, serving as the 
						on-call point of contact for emergencies.
					</p>
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
					<h2>Best in Map Reading and Land Navigation</h2>
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
					<h2>Programming Languages</h2>
					<ul>
						<li>Python</li>
						<li>Java</li>
						<li>C / C# / C++</li>
						<li>Javascript</li>
					</ul>
				</div>
				
				<div className="tools_devenv">
					<h2>Dev Environment (Version Control & OS)</h2>
					<ul>
						<li>Git</li>
						<li>Github</li>
						<li>Bash</li>
						<li>Linux</li>
						<li>Windows</li>
					</ul>
				</div>
				
				<div className="tools_webdev">
					<h2>Webdev Tools & Frameworks</h2>
					<ul>
						<li>React JS</li>
						<li>Django</li>
						<li>HTML</li>
						<li>CSS</li>
					</ul>
				</div>

				<div className="tools_datascience">
					<h2>Data Science Tools</h2>
					<ul>
						<li>Numpy</li>
						<li>Pandas</li>
						<li>Matplotlib</li>
						<li>Scikit-learn</li>
						<li>JupyterLab</li>
					</ul>
				</div>

				<div className="concepts">
					<h2>Technologies/ Concepts</h2>
					<ul>
						<li>Machine Learning</li>
						<li>Database Systems</li>
						<li>Modelling and Simulation</li>
						<li>Data Analysis and Visualization</li>
						<li>Software Engineering</li>
						<li>Test-Driven Development</li>
					</ul>
				</div>
				</div>

			</div>
			<Contacts/>
		</div>
	)
}

export default Qualifications;
