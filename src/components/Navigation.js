

function Navigation() {
    return (
        <>
        <nav>
            <label>
            <input type="checkbox" className="hamburger-menu" />
                <div className="toggle">
                <span className="middle-line common"></span>
                <span className="bottom-line common"></span>
                </div>
            <ul className="navigation">
            <a href="/"><p className="hover">Home Huldrablog</p></a>
            <a href="/Contact"><p className="hover">Contact</p></a>
            </ul>
            </label>
            <br />
            <div style={{height: "70px"}}></div>
        </nav>
        </>
    )
}

export default Navigation; 