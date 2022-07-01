import React,{ useState } from 'react';
import "./nav.css";

const Nav = () => {
    const [ activeNav, setActiveNav ] = useState('')

    return (
        <nav>
            <a href="#Welcome" onClick={() => setActiveNav('#Welcome')} className={activeNav === '#Welcome' ? 'active' : ''}>Welcome</a>
            <a href="#About" onClick={() => setActiveNav('#About')} className={activeNav === '#About' ? 'active' : ''}>About</a>
            <a href="#Pricing" onClick={()=>setActiveNav('#Pricing')} className={activeNav === '#Pricing' ? 'active' : ''}>Pricing</a>
            <a href="#Contact" onClick={() => setActiveNav('#Contact')} className={activeNav === '#Contact' ? 'active' : ''}>Contact</a>
        </nav>
    )
}

export default Nav