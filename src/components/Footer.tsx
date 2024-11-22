import { footer } from "../constant/info"
import FooterIconCard from "./card/FooterIconCard"

const Footer = () => {
    return (
        <div className="footer">
            <h1>Don't Hesitate. Let contact me</h1>
            <div className="footer-contacts">
                <FooterIconCard className="footer-contacts__icon" data = {footer.icons.phone}/>
                <FooterIconCard className="footer-contacts__icon" data = {footer.icons.email}/>
                <FooterIconCard className="footer-contacts__icon" data = {footer.icons.linkedin}/>
                <FooterIconCard className="footer-contacts__icon" data = {footer.icons.github}/>
            </div>
        </div>
    )
}

export default Footer
