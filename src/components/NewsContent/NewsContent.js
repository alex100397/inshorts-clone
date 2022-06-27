import React from 'react'
import Container from '@mui/material/Container'
import './NewsContent.css'
import NewsCard from '../NewsCard/NewsCard';


const NewsContent = ({newsArray,newsResult,loadMore,setLoadMore}) => {
    return(
        <Container maxWidth="md">
            {/* newsArray={newsArray} newsResult={newsResult} */}
        <div className="content">
            <div className="downloadBox">
                <span className="downloadText">
                For the best experience use inshorts app on your smartphone
                </span>
                <img src = "https://assets.inshorts.com/website_assets/images/appstore.png" height="40px" alt="img"/>
                <img src = "https://assets.inshorts.com/website_assets/images/playstore.png" height="40px" alt="img"/>
            </div>

            {
                newsArray.map((newsItem) => (
                    
                    <NewsCard newsItem={newsItem} key={newsItem.title}/>

                ))                
            }

            { loadMore <= newsResult && (
                <>
                <hr />
                <button className="loadMore" onClick={ () => setLoadMore(loadMore+20) }>
                Load More
                </button>
                </>
                )
            }
        </div>    
        </Container>

    );
}

export default NewsContent;