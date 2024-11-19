import { images } from "../constant/info"

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-logo">
                <img src={images.logo_src} alt="Logo" />
            </div>
            <div className="header-menu">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#experiences">Experiences</a>
            </div>
        </div>
    )
}

export default Header
