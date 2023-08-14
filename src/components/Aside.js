import selfie from "../images/tegning-louie.JPG";
import loreen from "../images/loreen.jpeg";

export default function Aside() {
    return (
        <>
        <aside>
        <nav>navigation here</nav>
        <img src={selfie} alt="selfie louisebellingmo drawing" className="selfie"></img>
        <br/>
        <button className="btn">About</button>
        <h2>I am Louise Bellingmo</h2>
        <p>This is my blog about lifestyle and my own pictures from nature.</p>
        <br/>
        <p>This is my blog and more info will be added here in this text. </p>
        <br/>
        <h2>Instagram</h2>
        <hr/>
        <h2>images from instagram here</h2>
        <img src={loreen} alt="loreen tattoo" style={{width: "250px", height: "200px"}}></img>
        <br/>
        <button>Contact</button>
        <br/>
        <h2>Link to Portfolio</h2>
        <p>A short video imported here</p>
        <br/>
        </aside>
        </>
    )
}
