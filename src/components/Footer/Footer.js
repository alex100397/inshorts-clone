import React from 'react';
import './Footer.css'

const Footer = () => {
    return(
        <div className="footer">
            <span className="name">
                Inshorts Clone Done by - Alex Mathew
            </span>
            <hr style={{width:"90%"}}/>
            <div className='iconContainer'>
               <a href="https://www.facebook.com/alex.junia/" target="_blank"> 
                <i class="fa-brands fa-facebook"/></a>
                <a href="https://www.instagram.com/alexjunia/" target="_blank">
                <i class="fa-brands fa-instagram"/></a>
                <a href="https://www.linkedin.com/in/alex-junia/" target="_blank">
                <i class="fa-brands fa-linkedin"/></a>
            </div>
        </div>
    );
}

export default Footer