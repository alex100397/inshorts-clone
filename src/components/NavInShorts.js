import React from 'react';
import './NavInShorts.css'
import HamburgerDrawer from './HamburgerDrawer'

const NavInShorts = () => {
    return(
        <div className="nav">
            <div className='icon'><HamburgerDrawer /> </div>
                <img src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png' height="80%" alt='logo'/> 
           
        </div>
    );
}

export default NavInShorts