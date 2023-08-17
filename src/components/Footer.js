import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faArrowRight } from '@fortawesome/free-brands-svg-icons';



export default function Footer() {
    return (
        <>
        <footer>
        <div className="footer">
            <h5>Huldrablog is designed and developed by Bellingmo Webdesign</h5>
            <Link> 
            <FontAwesomeIcon icon="fa-regular fa-arrow-right" size="sm" />
            <h5>Visit Bellingmo Webdesign</h5>
            </Link>
        </div>
        </footer>
        </>
    )
}