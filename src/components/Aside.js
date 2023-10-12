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
        <button className="about-btn">About</button>
        <div className="aside-text">
        <h2>My name is</h2>
        <p>This is my blog about "your title here". Here you will have the delight to read all my posts!</p>
        </div>
        <br/>
        <h3>Instagram</h3>
        <hr/>
        <br/>
        <p>Instagram account connected here</p>
        <button className="btn">Contact</button>
        <p>Please contact me on postbellingmo@gmail.com for this design</p>
        <br/>
        <h3>
        <Link to="https://louisebellingmo-portfolio.netlify.app ">Link to Portfolio</Link>
        </h3>
        
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
