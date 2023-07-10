import React from 'react';
import './Contacts.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import Resume from './certificates/MyResume.pdf';

function Contacts() {

	const openPDF = () => {
		window.open(Resume, '_blank');
	}

	return (
		<div className="main-container">
			<hr />

			<div className="contacts">

			<div className="info">
				<div className="details">
					<FontAwesomeIcon icon={faEnvelope} className="icon" />
					<p>ah.sendad@gmail.com</p>
				</div>
				<div className="details">
					<FontAwesomeIcon icon={faPhone} className="icon" />
					<p>+63 995 206 1437</p>
				</div>
			</div>
			<button className="resume" onClick={openPDF}>View Resume</button>
			
			</div>

		</div>
	);
}

export default Contacts;
