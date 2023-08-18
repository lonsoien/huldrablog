import selfie from "../images/tegning-louie.JPG";
import loreen from "../images/loreen.jpeg";
import Navigation from "./Navigation";


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
        <h3>images from instagram here</h3>
        <img src={loreen} alt="loreen tattoo" style={{width: "250px", height: "200px"}}></img>
        <br/>
        <button className="btn">Contact</button>
        <br/>
        <h3>Link to Portfolio</h3>
        <p>A short video imported here</p>
        <br/>
        </aside>
        </>
    )
}
