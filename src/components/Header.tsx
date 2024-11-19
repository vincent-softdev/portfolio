import { images } from "../constant/info"

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-logo">
                <img src={images.logo_src} alt="Logo" />
            </div>
            <div className="header-menu">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Experiences</a>
            </div>
        </div>
    )
}

export default Header
