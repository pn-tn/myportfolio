import './Main.css';

import Home from './components/Home';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Main() {
	return (
		<div className="Main">
			<FontAwesomeIcon icon={faBars} className="menu_bars" />
			<div className="social">
				<FontAwesomeIcon icon={faFacebook} className="facebook_icon" />
				<FontAwesomeIcon icon={faGithub} className="github_icon" />
				<FontAwesomeIcon icon={faLinkedin} className="linkedin_icon" />
			</div>
    	</div>
	);
}

export default Main;
