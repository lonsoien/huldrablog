import Aside from "./Aside";
import banner from "../images/huldra-banner.png"; 

export default function Contact() {
    return (
        <>
        <body>
        <header>
     <div className="banner">
     <img src={banner} alt="huldrablog banner" />
     </div>
     <h1>Contact form here: </h1>
     </header>
       <Aside/>
        </body>
        </>
    )
}