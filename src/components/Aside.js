import selfie from "../images/tegning-louie.JPG";
import { Link } from "react-router-dom";
import Tiktok from '../images/icons8-tiktok-200.png';
import Facebook from '../images/icons8-facebook-f-200.png';


function Aside() {
    return (
        <>
        <aside>
            <br/>
        <img src={selfie} alt="selfie louisebellingmo drawing" className="selfie"></img>
        <br/>
        <button className="btn">About</button>
        <div className="aside-text">
        <h2>Jeg er Louise Bellingmo</h2>
        <p>Dette er min egen-utviklet blogg hvor jeg vil primært dele livsstil artikler, 
        mine opplevelser og bilder i fra naturen.</p>
        <p>Jeg håper på å inspirere og dele med felles interesserte mindfullness og natur-opplevelser. 
            I flere år har jeg vært avgengig av å gå på tur i skogen, meditere og finne ro i ute naturen. 
            Lenge har jeg hatt ønske om å skrive en egen livsstil blogg der jeg kan dele mine opplevelser, 
            være åpen og dele min lære i det å utvikle meg på veien.</p>
            <p>Det å få utrykke meg, skape og være kreativ ligger i mitt DNA - Så velkommen til Huldrablog!
            </p>
            </div>
        <br/>
        <h3>Instagram</h3>
        <hr/>
        <div class="elfsight-app-7a3f9b86-7186-475a-9609-0e253799fb62"></div>
        <br/>
        <button className="btn">
        <Link to="https://louisebellingmo-portfolio.netlify.app/contact">Contact</Link>
        </button>
        <p>Ta gjerne kontakt på Insta via DM´s eller på postbellingmo@gmail.com</p>
        <br/>
        <h3>
        <Link to="https://louisebellingmo-portfolio.netlify.app ">Link to Portfolio</Link>
        </h3>
        <p>A short video coming here...</p>
        <img src={Tiktok} alt="tiktokicon" style={{width: "90px", height:"90px"}}></img>
        <img src={Facebook} alt="tiktokicon" style={{width: "90px", height:"90px"}}></img>
        <br/>
        <button className="singelpostbutton">
            <Link to="/">Huldrablog</Link>
          </button>
        </aside>
        </>
    )
}

export default Aside;
