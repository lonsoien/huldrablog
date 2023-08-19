import selfie from "../images/tegning-louie.JPG";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";


export default function Aside() {
    return (
        <>
        <aside>
        <Navigation />
        <img src={selfie} alt="selfie louisebellingmo drawing" className="selfie"></img>
        <br/>
        <button className="btn">About</button>
        <h2>Jeg er Louise Bellingmo</h2>
        <p>Dette er min nettside hvor jeg deler primært livsstil artikkler, bilder og opplevelser 
            fra mine turer i naturen.</p>
        <br/>
        <p>Her håper jeg å inspirere og dele med felles interesserte i det å finne sin vei i livet. 
            Være åpen om at ikke alt trenger å være perfekt heletiden, men at det er rom for å gjøre feil,
            gruble over ting, lære å utvikle seg selv på veien ettersom vi lever.</p>
        <br/>
        <h3>Instagram</h3>
        <hr/>
        <div class="elfsight-app-7a3f9b86-7186-475a-9609-0e253799fb62"></div>
        <br/>
        <button className="btn">
        <Link to="/contact">Contact</Link>
        </button>
        <br/>
        <h3>
        <Link to="https://louisebellingmo-portfolio.netlify.app ">Link to Portfolio</Link>
        </h3>
        
        <p>A short video imported here</p>
        <br/>
        </aside>
        </>
    )
}
