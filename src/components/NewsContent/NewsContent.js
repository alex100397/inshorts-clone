import React from 'react'
import Container from '@mui/material/Container'
import './NewsContent.css'

const NewsContent = () => {
    return(
        <Container maxWidth="md">
        <div className="content">
            <div className="downloadBox">
                <span className="downloadText">
                For the best experience use inshorts app on your smartphone
                </span>
                <img src = "https://assets.inshorts.com/website_assets/images/appstore.png" height="40px" alt="img"/>
                <img src = "https://assets.inshorts.com/website_assets/images/playstore.png" height="40px" alt="img"/>
            </div>
        </div>    
        </Container>
    );
}

export default NewsContent;