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
				<p>
					Beyond technical and academic pursuits, I also find joy in engaging with 
					creative hobbies such as...
				</p>
				<div className="music-art">
					<div className="image"></div>
					<div className="descr">
						<h2>Music & Art</h2>
						<p>
							I really love strumming on the guitar and sketching with my drawing tools. 
							It brings me so much joy to play music and create art!
						</p>
					</div>	
				</div>
				<div className="gaming">
					<div className="descr">
						<h2>Gaming</h2>
						<p>
							I have a great time playing all kinds of games, from indie video games to 
							tabletop role-playing games (TTRPGs). It's so much fun exploring different 
							virtual worlds and diving into imaginative adventures. 
						</p>
					</div>	
					<div className="image"></div>
				</div>
			</div>
			<Contacts/>

		</div>
	)
}

export default About;

