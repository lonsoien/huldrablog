import banner from "../images/lou-pinetree-banner.jpg"; 

export default function Header() {
    return (
        <>
        <header>
     <div className="banner">
     <img src={banner} alt="huldrablog banner" />
     <div className="huldrablog">Huldrablog</div>
     </div>
     <h1>by Louise</h1>
     </header>
        </>
    )
}