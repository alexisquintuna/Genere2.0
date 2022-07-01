import "./footer.css"
import logo from "../../images/logo.jpeg";


const Footer = () => {
    return (
        <footer>
            <div>
                <div>
                <img src={logo} alt="Logo" />
                </div>
                <a href="#"><strong>Genere natuS</strong></a>
            </div>

            <ul>
                <li>
                    <a href="#Welcome">Welcome</a>
                </li>
                <li>
                    <a href="#About">About</a>
                </li>
                <li>
                    <a href="#Pricing">Pricing</a>
                </li>
                <li>
                    <a href="#Contact">Contact</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;