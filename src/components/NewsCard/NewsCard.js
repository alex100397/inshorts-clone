import React from 'react'
import "./NewsCard.css"

const NewsCard = ({newsItem}) => {

    //  const fulldate = newsItem.publishedAt;
    //  const date = fulldate.toString().split();
    //  const hour = parseInt(date[4].substring(0,2));
    //  const time = hour>12?true:false;
     console.log(newsItem)

    return(
        <div className="newsCard">
            <img className="newsImage" src={newsItem.urlToImage?newsItem.urlToImage:"https://www.waterfieldtechnologies.com/wp-content/uploads/2019/02/placeholder-image-gray-3x2.png"} alt={newsItem.title} />
            
            <div className="newsText">
                
                <span className='title'>
                    {newsItem.title}
                </span>
                
                <span className='author'>
                 <a href = {newsItem.url} target='__blank'><b>short</b> </a>
                  <span className='muted'>
                   by {newsItem.author?newsItem.author:"Unknown Source"}
                   {/* /{" "}
                   {
                   time?`${hour-12}:${date[4].substring(3,5)} pm`:
                   `${hour}:${date[4].substring(3,5)} am` 
                   }
                   on {date[2]} {date[1]} {date[3]}, {date[0]} */}
                  </span>                
                </span>
                
                <div className='lowerNewsText'>
                    <div className='description'>
                        {newsItem.description}
                    </div>
                    <span className='readMore'>
                        read more at {""}
                        <a href = {newsItem.url} target='__blank'><b>{newsItem.source.name}</b> </a>
                    </span>
                </div>

            </div>
        </div>
    );
}

export default NewsCard