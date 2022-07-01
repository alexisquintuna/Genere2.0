import {FiInstagram} from 'react-icons/fi'
import {FiYoutube} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'

const Socials = () =>{
    return (
        <div className="header__socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" ><FiInstagram className="instagram socials"/></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" ><FiYoutube className="youtube socials" /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" ><FiTwitter className="twitter socials" /></a>
        </div>
    )
}

export default Socials;