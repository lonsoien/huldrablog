import banner from "../images/lou-pine-banner&text.png"; 
//import pinetree from "../images/loupine-text.png"; 


export default function Header() {
    return (
        <>
        <header>
     <div className="banner">
     <img src={banner} alt="huldrablog banner" />
     <h1>by bellingmo webdesign</h1>
     </div>
     </header>
        </>
    )
}