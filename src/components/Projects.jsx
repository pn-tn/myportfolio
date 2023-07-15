import React from 'react';
import './Projects.css';
import Portfolio from './images/thisPortfolio.png';
import Contacts from './Contacts';


function Template({ imageSrc, title, description }) {
	return (
		<div className="project_template">
			<div className="project_image">
				<img src={imageSrc} className="image" />	
			</div>
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
	);
}

function Projects() {
	
	return (
		<div className="projects_container">
			<div className="projects">
				<h1>Projects</h1>
				<p>A list of small personal projects throughout my coding journey</p>

				<Template 
					imageSrc = {Portfolio}
					title="This Portfolio :D"
					description="A simple portfolio to showcase myself"
				/>
			</div>
			<Contacts/>

		</div>
	);
}

export default Projects;
