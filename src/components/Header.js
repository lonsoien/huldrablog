import banner from "../images/lou-pinetree-banner.jpg"; 

export default function Header() {
    return (
        <>
        <header>
     <div className="banner">
     <img src={banner} alt="huldrablog banner" />
     </div>
     <h1>by Louise</h1>
     </header>
        </>
    )
}