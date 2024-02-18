/* eslint-disable react/prop-types */
// import React from 'react'
import image from '../assets/sample_news.jpg'

function NewsItem(props) {
  console.log(props, "PROPSSS")
  return (
 

    // <div className='news-item'>

<div className="card bg-warning-subtle mb-3 d-inline-block px-2 py-2 my-2 mx-2" style={{width: "18rem"}} >
  {/* // eslint-disable-next-line react/prop-types */}
  <img src= {props.news.urlToImage ? props.news.urlToImage : image} className="card-img-top" alt="broken image"  style={{height : "200px" , width: "100%"}} />
  <div className="card-body">
    <h5 className="card-title">{props.news.title }</h5>
    <p className="card-text">{props.news.description ? props.news.description.slice(0,80) : "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z" }</p>
    <a href={props.news.url} target='_blank' className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    // </div>


  
  )
}

export default NewsItem