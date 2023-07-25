import React from 'react';

import './Home.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import profile from './images/Profile.jpg';
import Resume from './certificates/MyResume.pdf';

function Home() {

	const openPDF = () => {
		window.open(Resume, '_blank');
	}

	return (
		<div className="home">
			<div className="info">
				<h1>Aloysius Hasheem A. Sendad</h1>
				<div className="details">
					<FontAwesomeIcon icon={faEnvelope} className="icon" />
					<p>ah.sendad@gmail.com</p>
				</div>
				<div className="details">
					<FontAwesomeIcon icon={faPhone} className="icon" />
					<p>+63 927 423 8416</p>
				</div>
				<button className="resume" onClick={openPDF}>View Resume</button>
			</div>
			<div className="profile-pic">
				<img src ={profile} alt="ProfilePicture" className="mypic" />
			</div>
		</div>
	)
}

export default Home
