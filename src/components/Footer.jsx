// Imports FontAwesome icon imports to use in the footer
import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
import { fab } from "@fontawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <>
            <div className="footer">
                <a href="https://github.com/srwesley" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={fab.faGithub} /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/sarah-wesley-69835358/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={fab.faLinkedin} /> LinkedIn
                </a>
            </div>
        </>
    );
}